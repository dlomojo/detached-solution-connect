import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { getPostBySlug, getRelatedPosts } from '@/data/blogPosts';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { openCalendlyPopup } from '@/components/CalendlyWidget';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const relatedPosts = getRelatedPosts(post);
  const formattedDate = format(new Date(post.publishedAt), 'MMMM dd, yyyy');
  const postUrl = `https://detachedsolution.us/blog/${post.slug}`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Detached Solution Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta name="author" content={post.author.name} />
        <link rel="canonical" href={postUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.featuredImage} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.featuredImage,
            "datePublished": post.publishedAt,
            "dateModified": post.updatedAt || post.publishedAt,
            "author": {
              "@type": "Person",
              "name": post.author.name,
              "jobTitle": post.author.role
            },
            "publisher": {
              "@type": "Organization",
              "name": "Detached Solution",
              "logo": {
                "@type": "ImageObject",
                "url": "https://detachedsolution.us/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": postUrl
            },
            "articleSection": post.category,
            "keywords": post.tags.join(', '),
            "wordCount": post.content.split(/\s+/).length,
            "timeRequired": `PT${post.readTime}M`
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://detachedsolution.us"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://detachedsolution.us/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": postUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Breadcrumb */}
        <div className="pt-20 pb-4 bg-slate-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-blue-600">Blog</Link>
              <span>/</span>
              <span className="text-slate-900">{post.title}</span>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Meta Info */}
              <div className="mb-6">
                <Badge className="bg-blue-600 text-white">{post.category}</Badge>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author & Meta */}
              <div className="flex flex-wrap items-center gap-6 pb-8 border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-900">{post.author.name}</div>
                    <div className="text-sm text-slate-600">{post.author.role}</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-sm text-slate-600 mr-2">Share:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(shareLinks.facebook, '_blank')}
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(shareLinks.twitter, '_blank')}
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(shareLinks.linkedin, '_blank')}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="my-12">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg prose-slate max-w-none mb-12">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>

              {/* CTA */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle>Need Expert IT Support?</CardTitle>
                  <CardDescription>
                    Our team can help implement these strategies for your business. Schedule a free consultation to discuss your IT needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={openCalendlyPopup}>
                    Schedule Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <BlogCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <section className="py-8 bg-white border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
