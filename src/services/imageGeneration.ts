
import { toast } from "sonner";

const API_ENDPOINT = "https://api.runware.ai/v1";

export interface GenerateImageParams {
  positivePrompt: string;
  model?: string;
  width?: number;
  height?: number;
  numberResults?: number;
  outputFormat?: string;
  CFGScale?: number;
  scheduler?: string;
  strength?: number;
  seed?: number | null;
}

export interface GeneratedImage {
  imageURL: string;
  positivePrompt: string;
  seed: number;
  NSFWContent: boolean;
}

export class ImageGenerationService {
  private apiKey: string | null = null;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || null;
  }

  async generateImage(params: GenerateImageParams): Promise<GeneratedImage> {
    if (!this.apiKey) {
      throw new Error("API key is required for image generation");
    }

    const taskUUID = crypto.randomUUID();
    
    const requestData = [
      {
        taskType: "authentication",
        apiKey: this.apiKey,
      },
      {
        taskType: "imageInference",
        taskUUID,
        model: params.model || "runware:100@1",
        width: params.width || 1024,
        height: params.height || 768,
        numberResults: params.numberResults || 1,
        outputFormat: params.outputFormat || "WEBP",
        CFGScale: params.CFGScale || 7,
        scheduler: params.scheduler || "FlowMatchEulerDiscreteScheduler",
        strength: params.strength || 0.8,
        positivePrompt: params.positivePrompt,
        seed: params.seed || undefined,
      }
    ];

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.error || result.errors) {
        const errorMessage = result.errorMessage || result.errors?.[0]?.message || "Image generation failed";
        throw new Error(errorMessage);
      }

      const imageData = result.data?.find((item: any) => item.taskType === "imageInference");
      
      if (!imageData) {
        throw new Error("No image data returned");
      }

      return {
        imageURL: imageData.imageURL,
        positivePrompt: imageData.positivePrompt,
        seed: imageData.seed,
        NSFWContent: imageData.NSFWContent || false,
      };
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate image. Please try again.");
      throw error;
    }
  }
}

// Pre-defined prompts for the website
export const imagePrompts = {
  hero: "Professional African American business owner working confidently on laptop in modern office setting, natural lighting, high quality, business professional",
  managedIT: "Professional African American IT technician monitoring multiple computer screens in modern office, focused and competent, high quality",
  cybersecurity: "Professional African American woman IT consultant explaining cybersecurity concepts to small business owner, professional setting, trustworthy atmosphere",
  cloudServices: "African American professionals collaborating using cloud-based tools in modern office environment, teamwork and technology integration",
  consulting: "African American IT consultant presenting technology strategy to diverse small business owners in conference room, professional presentation",
  team: "Group of professional African American IT specialists in business casual attire, friendly and approachable team photo, modern office background",
  testimonial1: "Professional headshot of confident African American restaurant owner in their establishment, warm and successful",
  testimonial2: "Professional headshot of African American auto repair shop manager in clean garage setting, trustworthy and experienced",
  testimonial3: "Professional headshot of African American insurance agency owner in professional office, reliable and knowledgeable"
};
