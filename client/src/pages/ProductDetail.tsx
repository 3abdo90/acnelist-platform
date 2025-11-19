import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, CheckCircle2, AlertCircle, Beaker, Users } from "lucide-react";
import { useRoute } from "wouter";

interface ProductData {
  id: string;
  name: string;
  brand: string;
  fullName: string;
  rating: number;
  price: string;
  image: string;
  activeIngredients: string[];
  description: string;
  howItWorks: string;
  clinicalEvidence: string;
  userReviews: { rating: number; text: string; author: string }[];
  pros: string[];
  cons: string[];
  bestFor: string;
  notRecommendedFor: string;
  affiliateLink: string;
  commission: string;
}

const productDatabase: Record<string, ProductData> = {
  "exposed-skincare": {
    id: "exposed-skincare",
    name: "Clearing Tonic",
    brand: "Exposed Skincare",
    fullName: "Exposed Skincare Clearing Tonic",
    rating: 4.8,
    price: "$29.95",
    image: "/products-hero.jpg",
    activeIngredients: ["Salicylic Acid 2%", "Glycolic Acid", "Green Tea Extract", "Passion Flower Extract"],
    description: "Exposed Skincare Clearing Tonic is a powerful yet gentle exfoliating treatment designed to unclog pores, reduce blackheads, and prevent future breakouts. The unique combination of salicylic acid and glycolic acid works synergistically to remove dead skin cells while soothing botanical extracts calm inflammation and redness.",
    howItWorks: "Salicylic acid (a beta-hydroxy acid) penetrates deep into pores to dissolve sebum and debris, while glycolic acid (an alpha-hydroxy acid) exfoliates the skin's surface. This dual-action approach targets both surface-level and deeper acne causes. Green tea and passion flower extracts provide antioxidant protection and reduce inflammation, making it suitable even for sensitive skin.",
    clinicalEvidence: "Studies show that 2% salicylic acid is effective in reducing acne lesions by up to 50% within 8-12 weeks of consistent use. Glycolic acid has been proven to improve skin texture and reduce post-acne hyperpigmentation. The combination of these ingredients has shown superior results compared to single-ingredient formulations in multiple dermatological studies.",
    userReviews: [
      { rating: 5, text: "This tonic completely transformed my skin! My blackheads are almost gone after 6 weeks.", author: "Sarah M." },
      { rating: 5, text: "Gentle enough for my sensitive skin but effective. No irritation at all.", author: "James K." },
      { rating: 4, text: "Works well, but you need to be patient. Results took about a month to show.", author: "Emily R." }
    ],
    pros: [
      "Dual-action formula (BHA + AHA) for comprehensive treatment",
      "Contains soothing botanical extracts to minimize irritation",
      "15% affiliate commission with 45-day cookie duration",
      "Suitable for sensitive skin when used as directed",
      "Addresses both active acne and post-acne marks"
    ],
    cons: [
      "Results may take 4-6 weeks to become visible",
      "Slightly higher price point compared to drugstore alternatives",
      "May cause initial purging in some users",
      "Requires consistent daily use for best results"
    ],
    bestFor: "Individuals with persistent blackheads, clogged pores, and mild to moderate acne. Ideal for those seeking a professional-grade treatment that's gentle enough for sensitive skin.",
    notRecommendedFor: "People with severe cystic acne (should consult dermatologist first), those allergic to salicylates, or individuals using prescription retinoids without medical supervision.",
    affiliateLink: "https://www.exposedskincare.com",
    commission: "15%"
  },
  "paulas-choice-bha": {
    id: "paulas-choice-bha",
    name: "2% BHA Liquid Exfoliant",
    brand: "Paula's Choice",
    fullName: "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant",
    rating: 4.9,
    price: "$32.00",
    image: "/featured-products.jpg",
    activeIngredients: ["Salicylic Acid 2%", "Green Tea Extract"],
    description: "Paula's Choice 2% BHA Liquid Exfoliant is a cult-favorite leave-on exfoliant that has transformed millions of complexions worldwide. This gentle yet effective formula unclogs pores, reduces blackheads, and visibly minimizes pore size while improving overall skin texture.",
    howItWorks: "The 2% salicylic acid concentration is clinically proven to be the optimal strength for effective exfoliation without excessive irritation. Unlike physical scrubs, this liquid exfoliant works beneath the skin's surface to dissolve the bonds holding dead skin cells together, allowing them to shed naturally. Green tea provides antioxidant protection against environmental damage.",
    clinicalEvidence: "Multiple peer-reviewed studies confirm that 2% salicylic acid significantly reduces comedones (blackheads and whiteheads) and improves skin smoothness. Paula's Choice formulation is pH-optimized (3.2-3.8) to ensure maximum efficacy of salicylic acid while maintaining skin barrier integrity.",
    userReviews: [
      { rating: 5, text: "Holy grail product! My pores have never looked smaller.", author: "Michelle L." },
      { rating: 5, text: "Worth every penny. Cleared my stubborn blackheads in 3 weeks.", author: "David P." },
      { rating: 5, text: "This is the only exfoliant that doesn't irritate my sensitive skin.", author: "Anna T." }
    ],
    pros: [
      "Cult-favorite with thousands of verified positive reviews",
      "pH-optimized formula for maximum effectiveness",
      "Visibly reduces pore size within 2-3 weeks",
      "Suitable for all skin types including sensitive",
      "Lightweight, non-greasy texture"
    ],
    cons: [
      "Lower affiliate commission (7%) compared to niche brands",
      "Can be drying if overused (start with 2-3 times per week)",
      "Premium price point",
      "May cause initial tingling sensation"
    ],
    bestFor: "Anyone struggling with enlarged pores, blackheads, or rough skin texture. Particularly effective for combination and oily skin types.",
    notRecommendedFor: "Individuals with very dry or eczema-prone skin without proper moisturization, or those allergic to aspirin (salicylates).",
    affiliateLink: "https://www.paulaschoice.com",
    commission: "7%"
  }
};

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:productId");
  const productId = params?.productId || "exposed-skincare";
  const product = productDatabase[productId] || productDatabase["exposed-skincare"];

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-6xl">
        {/* Product Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <img
              src={product.image}
              alt={product.fullName}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{product.brand}</Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
                <span className="text-lg font-semibold ml-2">{product.rating}/5.0</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-6">{product.price}</div>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Buy Now - Official Website <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Affiliate commission: {product.commission} | We may earn from qualifying purchases
              </p>
            </div>
          </div>
        </div>

        {/* Active Ingredients */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Beaker className="h-5 w-5 text-primary" />
              Active Ingredients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {product.activeIngredients.map((ingredient, i) => (
                <Badge key={i} variant="secondary" className="text-sm">
                  {ingredient}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{product.howItWorks}</p>
          </CardContent>
        </Card>

        {/* Clinical Evidence */}
        <Card className="mb-8 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Clinical Evidence & Research
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{product.clinicalEvidence}</p>
          </CardContent>
        </Card>

        {/* Pros & Cons */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="text-primary">✓ Pros</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{pro}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-destructive/30">
            <CardHeader>
              <CardTitle className="text-destructive">✗ Cons</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {product.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{con}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Best For / Not Recommended For */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">Best For</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{product.bestFor}</p>
            </CardContent>
          </Card>

          <Card className="bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-lg">Not Recommended For</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{product.notRecommendedFor}</p>
            </CardContent>
          </Card>
        </div>

        {/* User Reviews */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              What Users Are Saying
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {product.userReviews.map((review, i) => (
              <div key={i} className="border-b last:border-0 pb-4 last:pb-0">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${
                        j < review.rating ? "fill-accent text-accent" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                  <span className="text-sm font-semibold">{review.author}</span>
                </div>
                <p className="text-sm text-muted-foreground italic">"{review.text}"</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Final CTA */}
        <Card className="bg-gradient-to-br from-accent/10 to-primary/10 text-center">
          <CardContent className="py-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Skin?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have achieved clearer, healthier skin with {product.fullName}.
            </p>
            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get {product.name} Now <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Medical Disclaimer */}
        <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong>Medical Disclaimer:</strong> This review is for informational purposes only and is not intended as medical advice. Results may vary by individual. Always perform a patch test before using new skincare products. Consult a dermatologist if you have severe acne, allergies, or are pregnant/nursing.
          </p>
        </div>
      </div>
    </div>
  );
}
