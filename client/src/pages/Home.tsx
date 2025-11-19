import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { CheckCircle2, Shield, Star, TrendingUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing! Check your email for confirmation.");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Trusted Guide to <span className="text-primary">Clear, Healthy Skin</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover the most effective acne treatment and skincare products, backed by expert reviews and transparent recommendations. Say goodbye to confusion and hello to confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/comparisons">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                    Explore Top Products
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Read Expert Guides
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/hero-image.jpg"
                alt="Woman with clear, healthy skin"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Picks: Most Effective Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked by our experts, these products have proven results in preventing and treating acne. Each recommendation is backed by thorough research and real user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                </div>
                <CardTitle>Exposed Skincare Clearing Tonic</CardTitle>
                <CardDescription>Best for blackheads & mild breakouts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Powerful combination of salicylic acid and glycolic acid that unclogs pores and prevents future breakouts. Suitable for sensitive skin.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/products/exposed-skincare" className="w-full">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    View Details & Buy
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Product Card 2 */}
            <Card className="hover:shadow-lg transition-shadow border-primary/50">
              <div className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-t-lg text-center">
                EDITOR'S CHOICE
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                </div>
                <CardTitle>Paula's Choice 2% BHA Liquid</CardTitle>
                <CardDescription>Best for clogged pores & texture</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cult-favorite exfoliant with 2% salicylic acid that gently removes dead skin cells and reduces pore size. Visible results in 2-3 weeks.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/products/paulas-choice-bha" className="w-full">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    View Details & Buy
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Product Card 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-muted text-muted" />
                </div>
                <CardTitle>Circcell Skincare Serum</CardTitle>
                <CardDescription>Best natural luxury option</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  High-end natural formula with plant-based actives that calm inflammation and promote healing. Perfect for those seeking clean beauty.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/products/circcell-serum" className="w-full">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    View Details & Buy
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/comparisons">
              <Button variant="outline" size="lg">
                See Full Comparison Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trust Acnelist?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another product listing site. Our mission is to provide honest, research-backed recommendations that truly help you achieve clear skin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Transparent Reviews</h3>
              <p className="text-muted-foreground">
                We clearly disclose our affiliate relationships and only recommend products we genuinely believe in. Your trust is our priority.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Expert-Backed Research</h3>
              <p className="text-muted-foreground">
                Every product is evaluated based on active ingredients, clinical studies, and real user feedback. No guesswork, just facts.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Constantly Updated</h3>
              <p className="text-muted-foreground">
                The skincare industry evolves rapidly. We regularly update our recommendations to reflect the latest innovations and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Skincare Tips & Product Updates</h2>
          <p className="text-muted-foreground mb-8">
            Join our community and receive expert skincare advice, new product reviews, and exclusive deals directly to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
