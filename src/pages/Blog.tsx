import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { blogPosts, blogCategories, getFeaturedPosts } from '@/data/blogPosts';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featuredPosts = getFeaturedPosts();

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>IT Support Blog | Tips, Guides & Industry News | Detached Solution</title>
        <meta name="description" content="Expert IT support tips, cybersecurity guides, cloud computing insights, and industry news for small businesses. Updated weekly with actionable advice." />
        <meta name="keywords" content="IT blog, cybersecurity tips, cloud computing, small business IT, managed services, technology news" />
        <link rel="canonical" href="https://detachedsolution.us/blog" />
        <meta property="og:title" content="IT Support Blog | Detached Solution" />
        <meta property="og:description" content="Expert IT support tips, cybersecurity guides, and cloud computing insights for small businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://detachedsolution.us/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Detached Solution IT Blog",
            "description": "IT support tips, cybersecurity guides, and technology insights for small businesses",
            "url": "https://detachedsolution.us/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Detached Solution",
              "logo": {
                "@type": "ImageObject",
                "url": "https://detachedsolution.us/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
              <div className="space-y-6">
                <div>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    Resource library
                  </span>
                  <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                    Practical guidance for keeping small-business IT on track.
                  </h1>
                </div>
                <p className="text-lg text-slate-600">
                  Explore weekly walkthroughs, security updates, and step-by-step checklists written by the Detached Solution team for owners and operations leaders.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <Search className="mt-1 h-4 w-4 text-blue-600" />
                    <span>Filter articles by topic or keyword to quickly find what you need.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                    <span>Most reads take 5–10 minutes and end with actionable next steps.</span>
                  </li>
                </ul>

                {/* Search Bar */}
                <div className="relative max-w-xl">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search by topic, keyword, or challenge…"
                    className="pl-10 py-6 text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <aside className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  Popular topics
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Preparing for Microsoft 365 migrations</p>
                  <p>• Practical cyber hygiene for hybrid teams</p>
                  <p>• Building a reliable backup plan</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-slate-300 text-slate-900 hover:bg-slate-100"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                >
                  Browse all articles
                </Button>
              </aside>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b bg-white sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory === 'all' ? 'bg-blue-600' : ''}
              >
                All Posts
              </Button>
              {blogCategories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className={selectedCategory === category.name ? 'bg-blue-600' : ''}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'all' && searchQuery === '' && featuredPosts.length > 0 && (
          <section className="py-12 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Featured Articles</h2>
                <Badge className="bg-yellow-500 text-slate-900">Top Picks</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map(post => (
                  <BlogCard key={post.id} post={post} featured />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              {selectedCategory === 'all' ? 'All Articles' : `${selectedCategory} Articles`}
              {searchQuery && ` - Search results for "${searchQuery}"`}
            </h2>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-slate-600">No articles found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get weekly IT tips, security alerts, and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-grow bg-white text-slate-900"
                />
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
