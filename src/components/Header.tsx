import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Início", anchor: "#" },
    { name: "Serviços", anchor: "#servicos" },
    { name: "Por Que Escolher", anchor: "#porque" },
    { name: "Sobre", anchor: "#sobre" },
  ];

  const scrollToSection = (anchor: string) => {
    if (anchor === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("#")}>
            <h1 className="text-2xl font-bold font-pacifico">
              <span className="text-primary">Open Sea</span>{" "}
              <span className="text-gray-800">Logística</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.anchor}
                onClick={() => scrollToSection(item.anchor)}
                className="text-gray-700 hover:text-primary font-semibold transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Phone and CTA */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+551134567890"
              className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-phone-line text-xl"></i>
              </div>
              <span className="font-semibold">(11) 3456-7890</span>
            </a>
            <Button size="lg" onClick={() => scrollToSection("#contato")}>
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-left font-pacifico text-2xl">
                  <span className="text-primary">Open Sea</span>{" "}
                  <span className="text-gray-800">Logística</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.anchor}
                    onClick={() => scrollToSection(item.anchor)}
                    className="text-lg text-gray-700 hover:text-primary font-semibold transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
                <Button size="lg" className="mt-4" onClick={() => scrollToSection("#contato")}>
                  Solicitar Orçamento
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
