import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "../App";
import { useTheme } from "@/components/theme-provider";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const currentPageIndex = navItems.findIndex(item => item.to === location.pathname);

  const goToPreviousPage = () => {
    if (currentPageIndex > 0) {
      navigate(navItems[currentPageIndex - 1].to);
    }
  };

  const goToNextPage = () => {
    if (currentPageIndex < navItems.length - 1) {
      navigate(navItems[currentPageIndex + 1].to);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex w-64 flex-col bg-muted">
        <SidebarContent />
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-background border-b h-14 flex items-center px-4 justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-lg font-semibold ml-4">App Name</h1>
          </div>
          {/* Mobile navigation buttons */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={goToPreviousPage} disabled={currentPageIndex === 0}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={goToNextPage} disabled={currentPageIndex === navItems.length - 1}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </header>

        {/* Mobile sidebar */}
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetContent side="left" className="w-64 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8 relative">
          <Outlet />
          {/* Web navigation buttons */}
          <div className="hidden md:flex justify-center items-center space-x-4 absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <Button variant="outline" onClick={goToPreviousPage} disabled={currentPageIndex === 0}>
              Previous
            </Button>
            <Button variant="outline" onClick={goToNextPage} disabled={currentPageIndex === navItems.length - 1}>
              Next
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

const SidebarContent = () => (
  <nav className="flex flex-col p-4 space-y-2">
    {navItems.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          cn(
            "flex items-center space-x-2 px-2 py-2 rounded-lg transition-colors",
            isActive
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )
        }
      >
        {item.icon}
        <span>{item.title}</span>
      </NavLink>
    ))}
  </nav>
);

export default MainLayout;