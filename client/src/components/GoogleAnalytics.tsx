import { useEffect } from 'react';
import { useLocation } from 'wouter';

// Google Analytics Measurement ID
// Your actual Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = 'G-WW7JM473JX';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function GoogleAnalytics() {
  const [location] = useLocation();

  useEffect(() => {
    // Load Google Analytics script
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location,
      });
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location,
      });
    }
  }, [location]);

  return null;
}

// Helper function to track affiliate link clicks
export function trackAffiliateClick(productName: string, affiliateProgram: string, url: string) {
  if (window.gtag) {
    window.gtag('event', 'affiliate_click', {
      event_category: 'Affiliate',
      event_label: productName,
      affiliate_program: affiliateProgram,
      destination_url: url,
    });
  }
}

// Helper function to track newsletter signups
export function trackNewsletterSignup(email: string) {
  if (window.gtag) {
    window.gtag('event', 'newsletter_signup', {
      event_category: 'Engagement',
      event_label: 'Newsletter',
    });
  }
}

// Helper function to track product page views
export function trackProductView(productName: string, productId: string) {
  if (window.gtag) {
    window.gtag('event', 'view_item', {
      event_category: 'Product',
      event_label: productName,
      product_id: productId,
    });
  }
}

// Helper function to track comparison page interactions
export function trackComparisonView() {
  if (window.gtag) {
    window.gtag('event', 'view_comparison', {
      event_category: 'Engagement',
      event_label: 'Comparison Page',
    });
  }
}

// Helper function to track blog article views
export function trackBlogView(articleTitle: string) {
  if (window.gtag) {
    window.gtag('event', 'view_blog_post', {
      event_category: 'Content',
      event_label: articleTitle,
    });
  }
}
