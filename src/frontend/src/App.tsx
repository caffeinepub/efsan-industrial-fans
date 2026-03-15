import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickLinks from "./components/QuickLinks";
import Solutions from "./components/Solutions";
import ProductsPage from "./components/pages/ProductsPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ServicesPage from "./components/pages/ServicesPage";
import SolutionsPage from "./components/pages/SolutionsPage";

export type Page =
  | "home"
  | "products"
  | "solutions"
  | "projects"
  | "services"
  | "blog"
  | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const onNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "products":
        return <ProductsPage onNavigate={onNavigate} />;
      case "solutions":
        return <SolutionsPage onNavigate={onNavigate} />;
      case "projects":
        return <ProjectsPage onNavigate={onNavigate} />;
      case "services":
        return <ServicesPage onNavigate={onNavigate} />;
      default:
        return (
          <main>
            <Hero onNavigate={onNavigate} />
            <QuickLinks onNavigate={onNavigate} />
            <About />
            <Solutions onNavigate={onNavigate} />
            <Blog />
            <Contact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={onNavigate} currentPage={currentPage} />
      {renderPage()}
      <Footer onNavigate={onNavigate} />
      <Toaster />
    </div>
  );
}
