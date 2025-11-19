import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_TITLE } from "@/const";
import { ExternalLink } from "lucide-react";

export default function AffiliateDisclosure() {
  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Affiliate Disclosure</h1>
          <p className="text-muted-foreground">
            Transparency is at the core of everything we do at {APP_TITLE}.com
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle>Our Commitment to Transparency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="text-foreground font-semibold">
                {APP_TITLE}.com is an affiliate marketing website. We earn commissions from qualifying purchases made through links on this site.
              </p>
              <p>
                This disclosure is made in accordance with the Federal Trade Commission's (FTC) guidelines on endorsements and testimonials. We believe in complete transparency with our readers and want you to understand how our business model works.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What is Affiliate Marketing?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Affiliate marketing is a performance-based marketing arrangement where we earn a commission when you purchase products through our affiliate links. Here's how it works:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>You click on a product link on our website</li>
                <li>You are redirected to the retailer's website (e.g., Exposed Skincare, Paula's Choice, etc.)</li>
                <li>If you make a purchase, we receive a small commission from the retailer</li>
                <li><strong>You pay the same price</strong> – there is no additional cost to you</li>
              </ol>
              <p className="font-semibold text-foreground">
                Important: Affiliate commissions do NOT increase the price you pay. The retailer pays us a percentage of the sale as a marketing fee.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Affiliate Partners</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We partner with reputable skincare brands and retailers that offer high-quality acne treatment products. Our current affiliate partners include (but are not limited to):
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Exposed Skincare (15% commission, 45-day cookie)</li>
                <li>Paula's Choice (7% commission, 30-day cookie)</li>
                <li>Circcell Skincare (15% commission, 30-day cookie)</li>
                <li>Manuka Doctor (8% commission, 30-day cookie)</li>
                <li>Juice Beauty (6% commission, 30-day cookie)</li>
                <li>DermStore, Sephora, Ulta Beauty (various commission rates)</li>
              </ul>
              <p className="text-sm">
                <strong>Note:</strong> "Cookie duration" refers to how long the retailer tracks your purchase after you click our link. For example, a 45-day cookie means if you purchase within 45 days of clicking our link, we receive credit for the referral.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Choose Products to Recommend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">
                Our recommendations are based on research, ingredient analysis, and effectiveness – NOT commission rates.
              </p>
              <p>
                While we do earn commissions, our primary goal is to help you find effective acne treatment solutions. We evaluate products based on:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Active ingredients:</strong> Proven effectiveness (e.g., salicylic acid, benzoyl peroxide, niacinamide)</li>
                <li><strong>Clinical evidence:</strong> Scientific studies and dermatological research</li>
                <li><strong>User reviews:</strong> Real customer experiences and feedback</li>
                <li><strong>Safety profile:</strong> Suitability for different skin types and sensitivities</li>
                <li><strong>Value for money:</strong> Price relative to quality and results</li>
              </ul>
              <p>
                We may recommend products with lower commission rates if we believe they are more effective or better suited for your needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Editorial Independence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Our content is editorially independent. This means:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Brands and retailers do not pay us to write reviews or feature their products</li>
                <li>We maintain full editorial control over all content published on this site</li>
                <li>Our reviews reflect our honest assessment based on research and analysis</li>
                <li>We clearly distinguish between sponsored content (if any) and organic reviews</li>
                <li>We update our recommendations regularly to reflect new research and product innovations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medical Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">
                The content on {APP_TITLE}.com is for informational purposes only and is NOT intended as medical advice.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>We are not dermatologists or licensed healthcare professionals</li>
                <li>Product recommendations are based on research, not personal medical expertise</li>
                <li>Individual results may vary significantly</li>
                <li>Always consult a qualified dermatologist before starting any new acne treatment</li>
                <li>If you experience adverse reactions, discontinue use and seek medical attention</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Trust Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We understand that trust is earned, not given. That's why we are committed to:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Full transparency about our affiliate relationships</li>
                <li>Honest, research-backed product reviews</li>
                <li>Regular updates to ensure information accuracy</li>
                <li>Clearly labeling affiliate links throughout the site</li>
                <li>Prioritizing your skin health over commission earnings</li>
              </ul>
              <p className="font-semibold text-foreground">
                If you have any questions about our affiliate relationships or how we evaluate products, please don't hesitate to contact us.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>FTC Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                This disclosure complies with the Federal Trade Commission's 16 CFR Part 255: "Guides Concerning the Use of Endorsements and Testimonials in Advertising."
              </p>
              <p>
                For more information about the FTC's guidelines, visit:{" "}
                <a
                  href="https://www.ftc.gov/legal-library/browse/rules/guides-concerning-use-endorsements-testimonials-advertising"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  FTC Endorsement Guidelines
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you have any questions about our affiliate relationships or this disclosure, please contact us at:
              </p>
              <p className="font-semibold text-foreground">
                Email: disclosure@{APP_TITLE.toLowerCase()}.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
