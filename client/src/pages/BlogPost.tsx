import { useRoute, Link } from "wouter";
import { getBlogPost, getAllBlogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Streamdown } from "streamdown";
import NotFound from "./NotFound";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const post = getBlogPost(slug);
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter(p => p.id !== post?.id).slice(0, 3);

  if (!post) {
    return <NotFound />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container py-6">
        <Link href="/blog">
          <Button variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container max-w-4xl pb-16">
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedDate).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime} min read
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="ml-auto"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">By {post.author}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{post.category}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <Streamdown>{post.content}</Streamdown>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">About the Author</h3>
          <p className="text-muted-foreground">
            The Acnelist Editorial Team consists of skincare experts, dermatologists, and researchers dedicated to providing evidence-based information about acne treatment and skincare.
          </p>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="group cursor-pointer">
                    <div className="aspect-video overflow-hidden rounded-lg mb-3">
                      <img
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {relatedPost.readTime} min read
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
