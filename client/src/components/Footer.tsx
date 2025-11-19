import { Link } from "wouter";
import { APP_TITLE } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30 mt-auto">
      {/* Affiliate Disclosure Banner */}
      <div className="bg-accent/10 border-b border-accent/20">
        <div className="container py-3">
          <p className="text-xs text-center text-muted-foreground">
            <strong className="text-accent-foreground">Affiliate Disclosure:</strong> {APP_TITLE}.com earns commissions from qualifying purchases made through links on this site. We only recommend products we trust.{" "}
            <Link href="/affiliate-disclosure" className="underline hover:text-accent">
              Learn more
            </Link>
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">{APP_TITLE}</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted source for the best acne treatment and skincare products. We help you find effective solutions for clear, healthy skin.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/comparisons" className="hover:text-primary transition-colors">
                  Comparisons
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-primary transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-primary transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/return-refund-policy" className="hover:text-primary transition-colors">
                  Return & Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Connect</h3>
            <p className="text-sm text-muted-foreground">
              Follow us for skincare tips and product updates.
            </p>
            <div className="flex gap-3">
              {/* Placeholder for social icons - can be added later */}
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container py-4">
          <p className="text-xs text-center text-muted-foreground">
            © {currentYear} {APP_TITLE}.com. All rights reserved. This site is for informational purposes only and is not a substitute for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
