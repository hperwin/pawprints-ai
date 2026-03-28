import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// SEO pages
import VsCrownAndPaw from "./pages/seo/VsCrownAndPaw";
import VsWestAndWillow from "./pages/seo/VsWestAndWillow";
import VsDreamPets from "./pages/seo/VsDreamPets";
import ForDogOwners from "./pages/seo/ForDogOwners";
import ForCatOwners from "./pages/seo/ForCatOwners";
import ForGifts from "./pages/seo/ForGifts";
import Alternatives from "./pages/seo/Alternatives";

// Blog pages
import BlogRenaissance from "./pages/blog/RenaissanceMasterpiece";
import BlogVsCrownAndPaw from "./pages/blog/VsCrownAndPawPricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* SEO comparison and use-case pages */}
          <Route path="/vs/crown-and-paw" element={<VsCrownAndPaw />} />
          <Route path="/vs/west-and-willow" element={<VsWestAndWillow />} />
          <Route path="/vs/dreampets" element={<VsDreamPets />} />
          <Route path="/for/dog-owners" element={<ForDogOwners />} />
          <Route path="/for/cat-owners" element={<ForCatOwners />} />
          <Route path="/for/gifts" element={<ForGifts />} />
          <Route path="/alternatives" element={<Alternatives />} />

          {/* Blog */}
          <Route path="/blog/pet-photo-renaissance-masterpiece" element={<BlogRenaissance />} />
          <Route path="/blog/pawprints-ai-vs-crown-and-paw-pricing" element={<BlogVsCrownAndPaw />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
