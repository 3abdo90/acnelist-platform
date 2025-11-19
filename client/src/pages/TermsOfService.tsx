import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_TITLE } from "@/const";

export default function TermsOfService() {
  const lastUpdated = "November 16, 2025";

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                By accessing and using {APP_TITLE}.com ("the Website"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use this Website.
              </p>
              <p>
                {APP_TITLE}.com is an affiliate marketing platform that provides information, reviews, and recommendations for acne treatment and skincare products. All products featured on this site are sold and shipped by third-party suppliers, not by {APP_TITLE}.com.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Nature of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                {APP_TITLE}.com operates as an <strong>affiliate marketing platform</strong>. This means:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>We do not manufacture, own, or directly sell any products featured on this Website</li>
                <li>All products are owned, sold, and shipped by third-party suppliers and retailers</li>
                <li>We act solely as an intermediary, providing product information and affiliate links</li>
                <li>When you click on product links and make purchases, we may earn a commission from the retailer</li>
                <li>Purchases are subject to the terms, conditions, and policies of the respective third-party sellers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>By using this Website, you agree to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Provide accurate and current information when required</li>
                <li>Use the Website only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to any portion of the Website</li>
                <li>Not use the Website in any way that could damage, disable, or impair it</li>
                <li>Understand that product availability, pricing, and terms are controlled by third-party sellers</li>
                <li>Review and accept the terms of third-party sellers before making purchases</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                All content on {APP_TITLE}.com, including but not limited to text, graphics, logos, images, reviews, and software, is the property of {APP_TITLE}.com or its content suppliers and is protected by international copyright and intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from this Website without our express written permission.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Product Information and Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We strive to provide accurate and up-to-date product information. However:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Product descriptions, prices, and availability are subject to change without notice</li>
                <li>We do not guarantee the accuracy, completeness, or timeliness of product information</li>
                <li>Actual product packaging and materials may contain different information than shown on our Website</li>
                <li>We reserve the right to correct errors, inaccuracies, or omissions at any time</li>
                <li>Final product details, pricing, and availability are determined by the third-party seller</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Medical Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">
                IMPORTANT: The content on this Website is for informational purposes only and is NOT intended as medical advice, diagnosis, or treatment.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Always consult a qualified dermatologist or healthcare provider before starting any new skincare regimen</li>
                <li>Individual results may vary; what works for one person may not work for another</li>
                <li>If you have severe acne, allergies, or underlying medical conditions, seek professional medical advice</li>
                <li>Discontinue use of any product if you experience adverse reactions and consult a healthcare provider</li>
                <li>We are not responsible for any health outcomes resulting from the use of products purchased through our affiliate links</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Purchases and Transactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                When you click on affiliate links and make purchases:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>The transaction occurs directly between you and the third-party seller</li>
                <li>You are subject to the seller's terms of service, privacy policy, and return/refund policies</li>
                <li>{APP_TITLE}.com is not a party to the transaction and has no control over product quality, delivery, or customer service</li>
                <li>Any disputes regarding purchases must be resolved directly with the seller</li>
                <li>We may earn a commission from qualifying purchases at no additional cost to you</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                To the fullest extent permitted by law, {APP_TITLE}.com and its affiliates, officers, directors, employees, and agents shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or use</li>
                <li>Product defects, quality issues, or adverse reactions to products purchased through affiliate links</li>
                <li>Delays, errors, or interruptions in Website availability</li>
                <li>Actions or omissions of third-party sellers or service providers</li>
              </ul>
              <p>
                Your use of this Website and any products purchased through affiliate links is at your own risk.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Indemnification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                You agree to indemnify and hold harmless {APP_TITLE}.com and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Your use of the Website</li>
                <li>Your violation of these Terms of Service</li>
                <li>Your violation of any third-party rights</li>
                <li>Your use of products purchased through affiliate links</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved in the appropriate courts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="font-semibold text-foreground">
                Email: legal@{APP_TITLE.toLowerCase()}.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
