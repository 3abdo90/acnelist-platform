import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_TITLE } from "@/const";

export default function PrivacyPolicy() {
  const lastUpdated = "November 16, 2025";

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Welcome to {APP_TITLE}.com ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <p>
                By using {APP_TITLE}.com, you consent to the data practices described in this policy. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Personal Data</h4>
                <p>
                  We may collect personally identifiable information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Subscribe to our newsletter (email address)</li>
                  <li>Contact us through forms or email (name, email address, message content)</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Automatically Collected Information</h4>
                <p>
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Send you newsletters and marketing communications (with your consent)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website content and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Detect, prevent, and address technical issues or fraudulent activity</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
              </p>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Types of Cookies We Use:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Affiliate Marketing Cookies:</strong> Track purchases made through our affiliate links to ensure proper commission attribution (typically 3-45 days duration depending on the affiliate program)</li>
                </ul>
              </div>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Affiliate Marketing Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                {APP_TITLE}.com participates in affiliate marketing programs. When you click on affiliate links and make a purchase, we may earn a commission at no additional cost to you. These affiliate relationships help support our website and allow us to continue providing free content and product reviews.
              </p>
              <p>
                Affiliate cookies are used to track your purchases and ensure we receive proper credit for referrals. These cookies typically expire after 3-45 days, depending on the specific affiliate program.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Third-Party Service Providers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. These parties include:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Email marketing platforms (for newsletter distribution)</li>
                <li>Analytics providers (e.g., Google Analytics)</li>
                <li>Affiliate network partners</li>
                <li>Hosting and technical service providers</li>
              </ul>
              <p>
                These third parties are obligated to keep your information confidential and use it only for the purposes for which we disclose it to them.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Your Data Protection Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Objection:</strong> Object to our processing of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing at any time</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the information provided at the end of this policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us at:
              </p>
              <p className="font-semibold text-foreground">
                Email: privacy@{APP_TITLE.toLowerCase()}.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
