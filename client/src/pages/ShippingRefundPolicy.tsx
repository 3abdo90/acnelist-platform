import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_TITLE } from "@/const";
import { AlertCircle } from "lucide-react";

export default function ShippingRefundPolicy() {
  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Shipping & Return Policy</h1>
          <p className="text-muted-foreground">
            Important information about product shipping and returns
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">
                {APP_TITLE}.com is an affiliate marketing platform. We do NOT sell, ship, or handle products directly.
              </p>
              <p>
                All products featured on our website are sold and shipped by third-party retailers and suppliers. When you click on our affiliate links and make a purchase, the transaction occurs directly between you and the retailer. As such, shipping and return policies are determined by the individual seller, not by {APP_TITLE}.com.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">General Shipping Information</h4>
                <p>
                  Since products are shipped directly from third-party suppliers, shipping terms vary by retailer. However, here are some general guidelines based on our affiliate partners:
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Typical Delivery Times</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Domestic (US):</strong> 3-7 business days for standard shipping</li>
                  <li><strong>Expedited (US):</strong> 1-3 business days (if available)</li>
                  <li><strong>International:</strong> 7-21 business days, depending on destination and customs processing</li>
                </ul>
                <p className="text-sm mt-2">
                  Note: Delivery times may vary based on product availability, location, and shipping method selected at checkout.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Shipping Costs</h4>
                <p>
                  Shipping costs are determined by the retailer and may vary based on:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Order total (many retailers offer free shipping above a certain threshold)</li>
                  <li>Shipping destination</li>
                  <li>Shipping method selected (standard, expedited, overnight, etc.)</li>
                  <li>Product size and weight</li>
                </ul>
                <p className="text-sm mt-2">
                  Shipping costs will be displayed at checkout before you complete your purchase.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Order Tracking</h4>
                <p>
                  Most retailers provide tracking information via email once your order ships. If you do not receive tracking information within 2-3 business days of placing your order, contact the retailer's customer service directly.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Our Role</h4>
                <p>
                  {APP_TITLE}.com facilitates communication and provides general shipping information, but we are not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Shipping delays caused by the retailer or carrier</li>
                  <li>Lost or damaged packages during transit</li>
                  <li>Customs fees or import duties for international orders</li>
                  <li>Incorrect shipping addresses provided by the customer</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Return & Refund Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">General Return Policy</h4>
                <p>
                  Returns and refunds are handled directly by the retailer from whom you purchased the product. Each retailer has its own return policy, which you should review before making a purchase.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Typical Return Conditions (Varies by Retailer)</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Return Window:</strong> Most retailers accept returns within 30-60 days of purchase</li>
                  <li><strong>Condition:</strong> Products must be unused, unopened, and in original packaging</li>
                  <li><strong>Proof of Purchase:</strong> Original receipt or order confirmation required</li>
                  <li><strong>Return Shipping:</strong> Customer may be responsible for return shipping costs unless the product is defective</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Non-Returnable Items</h4>
                <p>
                  For health and safety reasons, many skincare retailers do not accept returns on:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Opened or used skincare products</li>
                  <li>Products damaged after delivery due to customer mishandling</li>
                  <li>Products purchased during final sale or clearance events</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Refund Processing Time</h4>
                <p>
                  Once the retailer receives and approves your return:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Refunds are typically processed within 5-10 business days</li>
                  <li>Refunds are issued to the original payment method</li>
                  <li>It may take an additional 3-5 business days for the refund to appear in your account</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Defective or Damaged Products</h4>
                <p>
                  If you receive a defective or damaged product:
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Contact the retailer's customer service immediately (within 48 hours of delivery)</li>
                  <li>Provide photos of the damage or defect</li>
                  <li>Most retailers will offer a replacement or full refund, including return shipping costs</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Our Role in Returns</h4>
                <p>
                  {APP_TITLE}.com does not process returns or refunds. However, we can:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Provide general guidance on return procedures</li>
                  <li>Direct you to the appropriate retailer's customer service</li>
                  <li>Assist in facilitating communication if needed</li>
                </ul>
                <p className="font-semibold text-foreground mt-2">
                  For specific return requests, you must contact the retailer directly.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Retailer-Specific Policies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Each of our affiliate partners has unique shipping and return policies. Before making a purchase, we recommend reviewing the specific retailer's policies:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Exposed Skincare:</strong> 60-day money-back guarantee</li>
                <li><strong>Paula's Choice:</strong> 100% satisfaction guarantee, accepts returns on opened products</li>
                <li><strong>Sephora:</strong> 60-day return policy with receipt</li>
                <li><strong>Ulta Beauty:</strong> 60-day return policy, even on used products</li>
                <li><strong>DermStore:</strong> 30-day return policy on unopened items</li>
              </ul>
              <p className="text-sm mt-2">
                Note: Policies are subject to change. Always verify current terms on the retailer's website before purchasing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Exceptions and Special Circumstances</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Shipping Delays</h4>
                <p>
                  Delays may occur due to:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>High order volume during promotional periods</li>
                  <li>Weather-related disruptions</li>
                  <li>Carrier delays or strikes</li>
                  <li>Customs processing for international orders</li>
                </ul>
                <p className="mt-2">
                  If your order is significantly delayed, contact the retailer's customer service for assistance.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">International Orders</h4>
                <p>
                  International customers should be aware:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>You may be responsible for customs duties and import taxes</li>
                  <li>Delivery times are estimates and may vary significantly</li>
                  <li>Return shipping costs for international orders can be substantial</li>
                  <li>Some retailers may not ship to all countries</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How to Contact Retailers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                For shipping or return inquiries, contact the retailer's customer service directly:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Check your order confirmation email for customer service contact information</li>
                <li>Visit the retailer's website and look for "Customer Service" or "Contact Us"</li>
                <li>Have your order number ready when contacting support</li>
              </ul>
              <p className="font-semibold text-foreground mt-4">
                If you need assistance locating a retailer's customer service, contact us at:
              </p>
              <p className="font-semibold text-foreground">
                Email: support@{APP_TITLE.toLowerCase()}.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                {APP_TITLE}.com provides this information as a general guide only. Shipping and return policies are subject to change at the discretion of individual retailers. We are not responsible for any discrepancies between the information provided here and the actual policies of third-party sellers.
              </p>
              <p className="font-semibold text-foreground">
                Always review the specific retailer's shipping and return policy before completing your purchase.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
