
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import About from "./pages/About";
import Photographer from "./pages/Photographer";
import PhotographerDetail from "./pages/PhotographerDetail";
import PhotoDetail from "./pages/PhotoDetail";
import VideoDetail from "./pages/VideoDetail";
import WeddingPhotography from "./pages/services/WeddingPhotography";
import PortraitSessions from "./pages/services/PortraitSessions";
import CommercialPhotography from "./pages/services/CommercialPhotography";
import EventCoverage from "./pages/services/EventCoverage";
import NotFound from "./pages/NotFound";
import React from "react";

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/about" element={<About />} />
      <Route path="/photographer" element={<Photographer />} />
      <Route path="/photographer/:id" element={<PhotographerDetail />} />
      <Route path="/photo/:id" element={<PhotoDetail />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/services/wedding" element={<WeddingPhotography />} />
      <Route path="/services/portrait" element={<PortraitSessions />} />
      <Route path="/services/commercial" element={<CommercialPhotography />} />
      <Route path="/services/events" element={<EventCoverage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
