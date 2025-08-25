import { Card, CardContent } from "@/components/ui/card";

const SocialProof = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join local businesses who trust us with their technology needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-none shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-slate-600">Monitoring & Support</p>
            </CardContent>
          </Card>
          <Card className="text-center border-none shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">< 4hrs</div>
              <p className="text-slate-600">Average Response Time</p>
            </CardContent>
          </Card>
          <Card className="text-center border-none shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">$0</div>
              <p className="text-slate-600">Setup Fees</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-500 mb-4">
            "Finally, IT support that actually understands small business needs."
          </p>
          <p className="text-xs text-slate-400">
            - Local Business Owner
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;