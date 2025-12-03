"use client";

import { motion } from "framer-motion";
import { CheckCircle, PlayCircle, ShieldCheck, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Import necessário para a imagem

export default function Hero() {
  
    const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Compensação para o header não tapar o título
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  
  return (
    // AJUSTE 1: Reduzi o padding-top (pt-) de 32 para 20 no mobile e 28 no desktop
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center pt-20 md:pt-28 pb-20 overflow-hidden bg-background">
      
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Brilho central */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* --- COLUNA ESQUERDA: COPY --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 relative text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-zinc-300 text-[10px] md:text-xs font-mono tracking-wider uppercase">Sistema Validado 2025</span>
          </div>

          {/* AJUSTE 2: Tamanhos de fonte reduzidos (de 8xl para 7xl no max) */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.95]">
            Copie, Cole <br />
            e <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-green-600 drop-shadow-[0_0_25px_rgba(34,197,94,0.3)]">Lucre</span> <br />
            Sem Aparecer.
          </h1>

          <p className="font-sans text-zinc-400 text-base md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed border-l-2 border-primary/30 pl-4 lg:pl-6 text-left">
            Desbloqueie o <strong>T1TAN VAULT</strong>: o banco de dados de cortes virais para vender no automático. 
            <span className="block mt-2 text-zinc-500 text-xs md:text-sm">Atualizado diariamente • Pronto para postar</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            {/* LINK DE CHECKOUT CAKTO ADICIONADO */}
            <a href="https://t.me/T1TANVault_bot" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 md:h-14 px-8 text-base rounded-xl bg-primary text-black font-bold tracking-tight shadow-[0_0_30px_-5px_rgba(34,197,94,0.5)] hover:scale-105 transition-all duration-300 hover:shadow-[0_0_50px_-10px_rgba(34,197,94,0.7)]">
                  ACESSAR O VAULT <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </a>
            
            {/* BOTÃO SCROLL PARA BENEFÍCIOS */}
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 md:h-14 px-6 text-base rounded-xl border-zinc-800 bg-black/40 hover:bg-zinc-900 text-zinc-300 hover:text-white backdrop-blur-sm group cursor-pointer"
              onClick={() => handleScrollTo("beneficios")}
            >
              <PlayCircle className="mr-2 w-5 h-5 group-hover:text-primary transition-colors" /> 
              Ver Como Funciona
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 text-[10px] md:text-xs font-medium text-zinc-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500/20" />
                <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Risco Zero (7 Dias)</span>
            </div>
          </div>
        </motion.div>

        {/* --- COLUNA DIREITA: MONITOR COM TELEGRAM --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group lg:mt-0 mt-8"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-[80px] rounded-full" />
            
            <div className="relative z-10 bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-2 shadow-2xl ring-1 ring-white/5 transform hover:rotate-0 transition-transform duration-500 md:rotate-2">
               {/* Container da tela */}
               <div className="aspect-video bg-zinc-950 rounded-xl overflow-hidden relative border border-zinc-900">
                  
                  {/* AJUSTE 3: Imagem do Telegram aqui */}
                  <Image 
                    src="/telegram-print.png" // Certifique-se que a imagem está na pasta public
                    alt="T1TAN Vault Telegram Channel"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Overlay escuro para a imagem não ficar muito brilhante */}
                  <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                  {/* Scanline effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[20%] w-full animate-[scan_4s_linear_infinite] opacity-50 pointer-events-none" />
               </div>
            </div>

            {/* Card Flutuante */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 p-3 md:p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3 md:gap-4 pr-6 md:pr-8"
            >
               <div className="bg-green-500 rounded-full p-1.5 md:p-2 text-black shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
               </div>
               <div>
                  <p className="text-zinc-400 text-[9px] md:text-[10px] uppercase font-bold tracking-widest">Acesso vitálicio</p>
                  <p className="text-white font-mono font-bold text-lg md:text-xl tracking-tight">R$ 29,90</p>
               </div>
            </motion.div>
        </motion.div>

      </div>
    </section>
  );
}