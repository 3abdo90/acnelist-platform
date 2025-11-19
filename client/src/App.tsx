import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import Home from "./pages/Home";
import Comparisons from "./pages/Comparisons";
import ProductDetail from "./pages/ProductDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Products from "./pages/Products";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import ShippingRefundPolicy from "./pages/ShippingRefundPolicy";
import About from "./pages/About";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/products"} component={Products} />
          <Route path={"/products/:id"} component={ProductDetail} />
          <Route path={"/comparisons"} component={Comparisons} />
          <Route path={"/privacy-policy"} component={PrivacyPolicy} />
          <Route path={"/terms-of-service"} component={TermsOfService} />
          <Route path={"/affiliate-disclosure"} component={AffiliateDisclosure} />
          <Route path={"/shipping-policy"} component={ShippingRefundPolicy} />
          <Route path={"/return-refund-policy"} component={ShippingRefundPolicy} />
          <Route path={"/about"} component={About} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPost} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <GoogleAnalytics />
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
