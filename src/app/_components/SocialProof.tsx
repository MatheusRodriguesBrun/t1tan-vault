"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, MousePointerClick, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const profiles = [
  {
    name: "Cenas Pica-Pau",
    image: "/picapau.png",
    alt: "Perfil Cenas Pica-Pau",
    followers: "910 mil"
  },
  {
    name: "Desenho Adulto",
    image: "/familiapesada.png",
    alt: "Perfil Família da Pesada",
    followers: "265 mil"
  },
  {
    name: "Evolution Milionária",
    image: "/evolutionmilionaria.png",
    alt: "Perfil Evolution Milionária",
    followers: "462 mil"
  },
  {
    name: "Motivacionais",
    image: "/motivacionais.png",
    alt: "Perfil Motivacionais",
    followers: "165 mil"
  },
];

const steps = [
  {
    icon: TrendingUp,
    title: "1. Poste o Vídeo Viral",
    desc: "Pegue um dos 10.000 vídeos do Vault. Eles já são validados para reter a atenção.",
  },
  {
    icon: MousePointerClick,
    title: "2. Tráfego no Link",
    desc: "O vídeo explode de views e as pessoas clicam no link da sua bio curioso.",
  },
  {
    icon: DollarSign,
    title: "3. Venda Automática",
    desc: "O link leva para um produto afiliado ou seu próprio. A venda cai enquanto você dorme.",
  },
];

export default function SocialProof() {
  return (
    <section id="resultados" className="py-8 md:py-10 bg-zinc-950 relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- TÍTULO --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white mb-4">
            Perfis Que <span className="text-primary">Dominam o Jogo</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base px-2">
            Essas páginas não criam conteúdo do zero. Elas usam nossa estratégia de curadoria e repostagem.
          </p>
        </div>

        {/* --- GRID DE PERFIS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24 px-2 md:px-0">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10"
            >
              <div className="aspect-[4/3] w-full relative bg-black/50">
                 <Image 
                   src={profile.image}
                   alt={profile.alt}
                   fill
                   className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-5 relative z-10 -mt-12">
                 <div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800 p-4 rounded-xl text-center shadow-xl">
                    <h3 className="text-white font-bold text-lg mb-1 truncate">{profile.name}</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Seguidores</p>
                    <p className="text-2xl font-mono font-bold text-primary">{profile.followers}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- COMO LUCRAM (LÓGICA) --- */}
        {/* AJUSTE AQUI: padding reduzido no mobile (p-5) e overflow-hidden garantido */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 md:p-12 relative overflow-hidden">
           
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-zinc-900/0 to-transparent pointer-events-none" />

           <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
             
             {/* Texto Explicativo */}
             <div className="space-y-6">
                 <h3 className="font-display text-2xl md:text-4xl font-bold text-white uppercase leading-tight break-words">
                   Crie um Negócio Lucrativo <span className="text-primary block md:inline">Sem Aparecer.</span>
                 </h3>
                 <p className="text-zinc-400 text-base md:text-lg leading-relaxed break-words">
                   Você não precisa ser criativo, nem ter equipamentos caros. Com o <strong>T1TAN VAULT</strong>, você recebe mais de <strong>10.000 vídeos prontos</strong>. Sua única tarefa é baixar e postar.
                 </p>
                 
                 <div className="w-full md:w-auto">
                    <a href="https://pay.cakto.com.br/sr35huo" target="_blank" rel="noopener noreferrer" className="block w-full md:w-auto">
                       <Button size="lg" className="w-full md:w-auto bg-primary mt-2 md:mt-6 text-black font-bold rounded-full text-base md:text-lg px-8 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-105 transition-transform">
                         GARANTIR ACESSO AGORA <ArrowRight className="ml-2 w-5 h-5" />
                       </Button>
                    </a>
                 </div>
             </div>
             
             {/* Steps */}
             <div className="space-y-6 md:space-y-8 mt-4 md:mt-0">
                 {steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                       <div className="flex flex-col items-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-primary shrink-0">
                             <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                          </div>
                          {index !== steps.length - 1 && (
                             <div className="w-0.5 h-full bg-zinc-800 my-2"></div>
                          )}
                       </div>
                       <div className="pt-1">
                          <h4 className="text-lg md:text-xl font-bold text-white mb-1 leading-tight">{step.title}</h4>
                          <p className="text-zinc-400 text-xs md:text-sm leading-snug">{step.desc}</p>
                       </div>
                    </div>
                 ))}
             </div>

           </div>
        </div>

      </div>
    </section>
  );
}