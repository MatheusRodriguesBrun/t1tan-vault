"use client";

import { motion } from "framer-motion";
import { 
  Database, 
  TrendingUp, 
  RefreshCcw, 
  Users, 
  Lock, 
  Smartphone,
  Play
} from "lucide-react";
import Image from "next/image"; // Import necessário para as imagens

const features = [
  {
    title: "Banco de Dados Infinito",
    description: "+10.000 Vídeos Virais já editados e prontos para postar. Basta baixar e subir.",
    icon: Database,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-zinc-900 to-black",
  },
  {
    title: "Nichos Lucrativos",
    description: "Lifestyle, Carros de Luxo, Humor, Religioso, Cortes de Podcast e Muito Mais.",
    icon: TrendingUp,
    colSpan: "md:col-span-1",
    bg: "bg-zinc-900",
  },
  {
    title: "Atualizações Semanais",
    description: "Nossa equipe sobe novos packs toda semana. Você nunca fica sem conteúdo.",
    icon: RefreshCcw,
    colSpan: "md:col-span-1",
    bg: "bg-zinc-900",
  },
  {
    title: "Comunidade VIP",
    description: "Networking com outros T1TANS que já estão faturando alto.",
    icon: Users,
    colSpan: "md:col-span-2",
    bg: "bg-zinc-900",
  },
];

export default function Features() {
  return (
    <section id="beneficios" className="py-8 md:py-10 bg-background relative overflow-hidden">
      
      {/* Luz de Fundo Discreta */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            O Que Você Vai <span className="text-primary">Desbloquear</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Não é apenas um pack de vídeos. É uma estrutura completa de venda automática.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${feature.colSpan} relative group rounded-3xl border border-zinc-800 p-8 overflow-hidden hover:border-primary/50 transition-colors duration-500 bg-card`}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-zinc-300 group-hover:text-primary transition-colors" />
                </div>
                
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>

              <div className="absolute top-4 right-4 text-zinc-800 opacity-50 group-hover:text-primary/20 transition-colors">
                 <Lock className="w-24 h-24 -rotate-12" />
              </div>
            </motion.div>
          ))}
          
          {/* Card Especial: Formatos (ATUALIZADO PARA IMAGENS CHEIAS) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:col-span-3 rounded-3xl border border-dashed border-zinc-700 bg-zinc-950/50 p-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          >
            <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                    <Smartphone className="text-primary" /> Formato Viral (9:16)
                </h3>
                <p className="text-zinc-400">Todos os arquivos renderizados em alta qualidade, prontos para TikTok, Reels e Shorts.</p>
            </div>
            
            <div className="flex gap-4">
                {[
                    { src: "/tiktok-logo.png", alt: "TikTok Logo" },
                    { src: "/reels-logo.png", alt: "Instagram Reels Logo" },
                    { src: "/shorts-logo.png", alt: "YouTube Shorts Logo" },
                ].map((img, i) => (
                    <div key={i} className="w-20 h-32 bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden shadow-lg hover:border-primary/50 transition-colors duration-300 relative group">
                        
                        {/* Imagem agora usa object-cover para preencher tudo */}
                        <Image 
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        
                        {/* Ícone de Play centralizado sobre a imagem */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                                <Play className="w-4 h-4 text-white fill-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}