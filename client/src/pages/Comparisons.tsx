import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

interface Product {
  id: string;
  name: string;
  brand: string;
  activeIngredient: string;
  targetAcneType: string;
  rating: number;
  commission: string;
  price: string;
  pros: string[];
  cons: string[];
  affiliateLink: string;
  bestFor: string;
}

const products: Product[] = [
  {
    id: "exposed-skincare",
    name: "Clearing Tonic",
    brand: "Exposed Skincare",
    activeIngredient: "Salicylic Acid 2% + Glycolic Acid",
    targetAcneType: "Blackheads, Mild Breakouts",
    rating: 4.8,
    commission: "15%",
    price: "$29.95",
    pros: ["Long cookie duration (45 days)", "Gentle on sensitive skin", "Proven ingredients"],
    cons: ["May take 4-6 weeks for results", "Slightly higher price point"],
    affiliateLink: "https://www.exposedskincare.com",
    bestFor: "Those with sensitive skin and persistent blackheads"
  },
  {
    id: "paulas-choice",
    name: "2% BHA Liquid Exfoliant",
    brand: "Paula's Choice",
    activeIngredient: "Salicylic Acid 2%",
    targetAcneType: "Clogged Pores, Whiteheads",
    rating: 4.9,
    commission: "7%",
    price: "$32.00",
    pros: ["Cult favorite with proven results", "Reduces pore size visibly", "Works for all skin types"],
    cons: ["Lower commission rate", "Can be drying for very sensitive skin"],
    affiliateLink: "https://www.paulaschoice.com",
    bestFor: "Anyone struggling with enlarged pores and texture issues"
  },
  {
    id: "circcell",
    name: "Acne Clarifying Serum",
    brand: "Circcell Skincare",
    activeIngredient: "Natural Plant Extracts + Niacinamide",
    targetAcneType: "Inflammatory Acne, Redness",
    rating: 4.6,
    commission: "15%",
    price: "$68.00",
    pros: ["High-end natural formula", "Excellent commission rate", "Calms inflammation quickly"],
    cons: ["Premium price point", "May not work for severe cystic acne"],
    affiliateLink: "https://www.circcellskincare.com",
    bestFor: "Clean beauty enthusiasts with moderate acne"
  },
  {
    id: "manuka-doctor",
    name: "ApiClear Purifying Facial Wash",
    brand: "Manuka Doctor",
    activeIngredient: "Manuka Honey + Tea Tree Oil",
    targetAcneType: "Mild to Moderate Acne",
    rating: 4.5,
    commission: "8%",
    price: "$24.99",
    pros: ["Natural antibacterial properties", "Affordable price", "Gentle daily cleanser"],
    cons: ["Results may vary", "Not ideal for severe acne"],
    affiliateLink: "https://www.manukadoctor.com",
    bestFor: "Those preferring natural ingredients and daily prevention"
  },
  {
    id: "juice-beauty",
    name: "Blemish Clearing Serum",
    brand: "Juice Beauty",
    activeIngredient: "Malic Acid + Lactic Acid",
    targetAcneType: "Sensitive Skin, Mild Acne",
    rating: 4.4,
    commission: "6%",
    price: "$35.00",
    pros: ["Organic certified ingredients", "Suitable for sensitive skin", "Eco-friendly brand"],
    cons: ["Lower commission", "Milder formula may not suit severe cases"],
    affiliateLink: "https://www.juicebeauty.com",
    bestFor: "Eco-conscious consumers with sensitive, acne-prone skin"
  }
];

export default function Comparisons() {
  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground">2025 Updated Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best 10 Acne Treatment Creams for 2025
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Finding the <strong>best acne treatment cream</strong> can be overwhelming with hundreds of products promising quick results. We've analyzed and evaluated the most effective formulations for 2025, focusing on proven active ingredients like salicylic acid, benzoyl peroxide, and niacinamide. Here's our curated list of the top 10 creams, ranked by effectiveness, ingredients, and user experience.
          </p>
        </div>

        {/* Quick Comparison Table */}
        <Card className="mb-12 overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle>Quick Comparison Table</CardTitle>
            <CardDescription>Compare key features at a glance</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Product</th>
                    <th className="text-left p-4 font-semibold">Active Ingredient</th>
                    <th className="text-left p-4 font-semibold">Target Acne Type</th>
                    <th className="text-left p-4 font-semibold">Rating</th>
                    <th className="text-left p-4 font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="p-4">
                        <div>
                          <div className="font-semibold">{product.brand}</div>
                          <div className="text-sm text-muted-foreground">{product.name}</div>
                        </div>
                      </td>
                      <td className="p-4 text-sm">{product.activeIngredient}</td>
                      <td className="p-4 text-sm">{product.targetAcneType}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span className="font-semibold">{product.rating}</span>
                        </div>
                      </td>
                      <td className="p-4 font-semibold text-primary">{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Product Reviews */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-6">Detailed Product Reviews</h2>
          
          {products.map((product, index) => (
            <Card key={product.id} className={index === 1 ? "border-primary/50 shadow-lg" : ""}>
              {index === 1 && (
                <div className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-t-lg text-center">
                  🏆 EDITOR'S CHOICE - BEST OVERALL
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-accent text-accent"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                      <span className="font-semibold ml-2">{product.rating}/5.0</span>
                    </div>
                    <CardTitle className="text-2xl">
                      {index + 1}. {product.brand} - {product.name}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      <Badge variant="secondary" className="mr-2">{product.activeIngredient}</Badge>
                      <Badge variant="outline">{product.commission} Commission</Badge>
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{product.price}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Best For
                  </h4>
                  <p className="text-muted-foreground">{product.bestFor}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">✓ Pros</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {product.pros.map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-destructive">✗ Cons</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {product.cons.map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Target Acne Type</h4>
                  <p className="text-sm text-muted-foreground">{product.targetAcneType}</p>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Link href={`/products/${product.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    Read Full Review
                  </Button>
                </Link>
                <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Buy Now <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Buying Guide Section */}
        <Card className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl">How to Choose the Right Acne Treatment Cream</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Identify Your Acne Type</h4>
              <p className="text-sm text-muted-foreground">
                Different active ingredients work better for specific acne types. Salicylic acid excels at treating blackheads and clogged pores, while benzoyl peroxide is more effective for inflammatory acne.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. Consider Your Skin Sensitivity</h4>
              <p className="text-sm text-muted-foreground">
                If you have sensitive skin, start with lower concentrations (1-2% salicylic acid) or natural alternatives like niacinamide and plant extracts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">3. Check for Complementary Ingredients</h4>
              <p className="text-sm text-muted-foreground">
                Look for products that combine acne-fighting actives with soothing ingredients like aloe vera, green tea, or hyaluronic acid to prevent excessive dryness.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">4. Be Patient and Consistent</h4>
              <p className="text-sm text-muted-foreground">
                Most acne treatments require 4-8 weeks of consistent use to show visible results. Don't switch products too quickly.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Medical Disclaimer */}
        <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong>Medical Disclaimer:</strong> The information provided on this page is for educational purposes only and is not intended as medical advice. Always consult with a qualified dermatologist or healthcare provider before starting any new acne treatment regimen, especially if you have severe or cystic acne. Individual results may vary.
          </p>
        </div>
      </div>
    </div>
  );
}
