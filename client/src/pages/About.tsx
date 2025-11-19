import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_TITLE } from "@/const";
import { Target, Heart, Shield, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About {APP_TITLE}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in the journey to clear, healthy, and confident skin.
          </p>
        </div>

        <div className="space-y-8">
          {/* Mission Section */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                At {APP_TITLE}.com, we believe that everyone deserves access to reliable, science-backed information about acne treatment and skincare. Our mission is to cut through the noise of the beauty industry and provide honest, transparent recommendations that truly help you achieve clear, healthy skin.
              </p>
              <p className="text-lg leading-relaxed">
                We are not just another product listing site. We are your trusted guide, committed to empowering you with the knowledge and resources you need to make informed decisions about your skincare routine.
              </p>
            </CardContent>
          </Card>

          {/* What We Do */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What We Do</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                {APP_TITLE}.com is an affiliate marketing platform specializing in acne treatment and skincare products. We curate, research, and review the most effective products available globally, helping you navigate the overwhelming world of skincare with confidence.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">✓ Expert Product Reviews</h4>
                  <p className="text-sm">
                    In-depth analysis of active ingredients, clinical evidence, and real user experiences.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">✓ Honest Comparisons</h4>
                  <p className="text-sm">
                    Side-by-side evaluations to help you choose the best product for your specific needs.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">✓ Educational Content</h4>
                  <p className="text-sm">
                    Guides, tips, and articles to help you understand acne causes and effective treatments.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">✓ Transparent Affiliate Partnerships</h4>
                  <p className="text-sm">
                    Clear disclosure of our affiliate relationships and how we earn commissions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Values */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle>Transparency</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="text-sm">
                    We clearly disclose our affiliate relationships and never compromise our editorial integrity for higher commissions. Your trust is our most valuable asset.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary mb-4">
                    <Heart className="h-6 w-6" />
                  </div>
                  <CardTitle>Empathy</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="text-sm">
                    We understand the emotional and physical impact of acne. Our recommendations prioritize your well-being and skin health above all else.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="text-sm">
                    We constantly update our content to reflect the latest research, innovations, and user feedback, ensuring you always have access to the best information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How We Evaluate Products */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How We Evaluate Products</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Our product evaluation process is rigorous and research-driven. We assess each product based on multiple criteria to ensure we recommend only the most effective solutions:
              </p>
              <ol className="list-decimal list-inside space-y-3">
                <li className="pl-2">
                  <strong className="text-foreground">Active Ingredients Analysis:</strong> We verify that products contain clinically proven ingredients at effective concentrations (e.g., 2% salicylic acid, 2.5-10% benzoyl peroxide).
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Clinical Evidence Review:</strong> We examine peer-reviewed studies and dermatological research to validate product claims.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">User Feedback Analysis:</strong> We consider real customer reviews and experiences from multiple sources to understand practical effectiveness.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Safety Profile Assessment:</strong> We evaluate potential side effects, suitability for different skin types, and contraindications.
                </li>
                <li className="pl-2">
                  <strong className="text-foreground">Value for Money:</strong> We assess whether the product's price is justified by its quality, effectiveness, and ingredient concentration.
                </li>
              </ol>
              <p className="font-semibold text-foreground mt-4">
                Our recommendations are based on effectiveness and safety – NOT on which products offer the highest affiliate commissions.
              </p>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl">Why Choose {APP_TITLE}?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                In a crowded market of skincare advice and product recommendations, here's what sets us apart:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-foreground">No Hidden Agendas:</strong> We disclose all affiliate relationships upfront and maintain full editorial independence.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-foreground">Science-Backed Recommendations:</strong> Every recommendation is supported by clinical research and ingredient analysis.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-foreground">Regularly Updated Content:</strong> We continuously monitor new research and product innovations to keep our recommendations current.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-foreground">Comprehensive Comparisons:</strong> We don't just list products – we compare them side-by-side to help you make informed decisions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-foreground">User-Centric Approach:</strong> Your skin health and satisfaction are our top priorities, not commission rates.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card>
            <CardHeader>
              <CardTitle>Important Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                {APP_TITLE}.com is an informational resource and affiliate marketing platform. We are not licensed dermatologists or healthcare professionals. The content on this website is for educational purposes only and should not be considered medical advice.
              </p>
              <p className="font-semibold text-foreground">
                Always consult a qualified dermatologist or healthcare provider before starting any new acne treatment regimen, especially if you have severe acne, allergies, or underlying medical conditions.
              </p>
              <p>
                Individual results may vary. What works for one person may not work for another. We encourage you to perform patch tests and introduce new products gradually.
              </p>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We love hearing from our community! Whether you have questions, feedback, or suggestions, we're here to help.
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">General Inquiries:</p>
                <p>contact@{APP_TITLE.toLowerCase()}.com</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Partnership Opportunities:</p>
                <p>partnerships@{APP_TITLE.toLowerCase()}.com</p>
              </div>
              <p className="text-sm mt-6">
                Thank you for trusting {APP_TITLE}.com as your partner in achieving clear, healthy, and confident skin!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
