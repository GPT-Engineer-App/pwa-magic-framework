import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Info, Settings as SettingsIcon, Mail, Book, HelpCircle } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
import UserManual from "./pages/UserManual";
import Help from "./pages/Help";
import { ThemeProvider } from "@/components/theme-provider";
import OfflineNotification from "@/components/OfflineNotification";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Features",
    to: "/features",
    icon: <Info className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <SettingsIcon className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    title: "User Manual",
    to: "/user-manual",
    icon: <Book className="h-4 w-4" />,
  },
  {
    title: "Help",
    to: "/help",
    icon: <HelpCircle className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Router>
            <Routes>
              <Route element={<MainLayout />}>
                <Route index element={<Index />} />
                <Route path="features" element={<Features />} />
                <Route path="settings" element={<Settings />} />
                <Route path="contact" element={<Contact />} />
                <Route path="user-manual" element={<UserManual />} />
                <Route path="help" element={<Help />} />
                <Route path="*" element={<Index />} /> {/* Added fallback route */}
              </Route>
            </Routes>
          </Router>
          <OfflineNotification />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;