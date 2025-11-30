"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito de vidro ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função de rolagem suave com ajuste de altura
  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Compensação para o menu fixo não tapar o título
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

    const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Benefícios", id: "beneficios" },
    { label: "Resultados", id: "resultados" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link 
          href="#inicio" 
          onClick={(e) => handleScrollTo(e, "inicio")}
          className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity text-white"
        >
          T1TAN<span className="text-primary drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">.VAULT</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* BOTÃO CTA DESKTOP (Funcional: Leva à oferta) */}
        <div className="hidden md:block">
          <Button 
            size="lg" 
            className="rounded-full font-bold bg-primary text-black hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all"
            onClick={(e) => handleScrollTo(e, "oferta")}
          >
            Começar Agora <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* MENU MOBILE */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-zinc-800">
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="bg-zinc-950 border-l border-zinc-800 w-[300px] p-0">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              
              <div className="flex flex-col h-full p-6">
                <div className="mt-8 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleScrollTo(e, item.id)}
                        className="text-xl font-medium text-zinc-300 hover:text-primary transition-colors border-b border-zinc-900 pb-4"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>

                {/* BOTÃO CTA MOBILE (Funcional: Leva à oferta e fecha o menu) */}
                <div className="mt-auto pb-8">
                  <SheetClose asChild>
                    <Button 
                      className="w-full font-bold h-14 text-lg bg-primary text-black hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                      onClick={(e) => handleScrollTo(e, "oferta")}
                    >
                      QUERO ACESSAR AGORA
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}