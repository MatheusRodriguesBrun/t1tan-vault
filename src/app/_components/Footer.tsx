"use client";

import { Instagram, MapPin, Phone, ShieldCheck, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8 relative overflow-hidden">
      
      {/* Detalhe de Fundo (Luz Verde Bem Fraca) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* COLUNA 1: MARCA & SOBRE */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter text-white">
              T1TAN<span className="text-primary">.VAULT</span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              "Ao criar este projeto, pensamos em todos aqueles que buscam aumentar seus resultados no mercado digital. T1TAN não é apenas um pack, é uma comunidade de otimização e networking."
            </p>
            <div className="flex items-center gap-2 pt-2">
                <a 
                  href="https://instagram.com/t1tan.oficial" 
                  target="_blank" 
                  className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-primary hover:bg-zinc-800 transition-all border border-zinc-800"
                >
                    <Instagram size={20} />
                </a>
            </div>
          </div>

          {/* COLUNA 2: EQUIPE (Management) */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Liderança</h4>
            <ul className="space-y-3">
                <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-primary border border-zinc-700">RM</div>
                    <div>
                        <p className="text-zinc-300 text-sm font-medium">Rafael Mathias</p>
                        <p className="text-zinc-600 text-xs">CEO & Founder</p>
                    </div>
                </li>
                <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-primary border border-zinc-700">SP</div>
                    <div>
                        <p className="text-zinc-300 text-sm font-medium">Sophia Prado</p>
                        <p className="text-zinc-600 text-xs">CEO & Co-Founder</p>
                    </div>
                </li>
                <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-primary border border-zinc-700">MB</div>
                    <div>
                        <p className="text-zinc-300 text-sm font-medium">Matheus Brun</p>
                        <p className="text-zinc-600 text-xs">CIO & Tech Lead</p>
                    </div>
                </li>
            </ul>
          </div>

          {/* COLUNA 3: LINKS RÁPIDOS */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
                <li><a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a></li>
                <li><a href="#pack" className="hover:text-primary transition-colors">O que vem no Pack</a></li>
                <li><a href="#depoimentos" className="hover:text-primary transition-colors">Resultados</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* COLUNA 4: CONTATO & LOCAL */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <span>+55 51 99566-1144</span>
                </li>
                <li className="flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    <span>contato@t1tan.com.br</span>
                </li>
                <li className="flex items-start gap-2">
                    <MapPin size={16} className="text-primary mt-1" />
                    <span>Porto Alegre, Brasil.</span>
                </li>
            </ul>
          </div>

        </div>

        {/* BARRA INFERIOR (COPYRIGHT) */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
            <p>&copy; {currentYear} T1TAN VAULT. Todos os direitos reservados.</p>
            <div className="flex gap-4">
                <a href="#" className="hover:text-zinc-400">Termos de Uso</a>
                <a href="#" className="hover:text-zinc-400">Política de Privacidade</a>
            </div>
            <div className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-primary" />
                <span>Site Seguro</span>
            </div>
        </div>
      </div>
    </footer>
  );
}