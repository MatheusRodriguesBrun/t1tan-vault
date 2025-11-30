"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section id="oferta" className="py-8 md:py-10 bg-background relative overflow-hidden">
      
      {/* Detalhe de Fundo */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            Escolha Seu <span className="text-primary">Acesso</span>
          </h2>
          <p className="text-zinc-400">
            Comece hoje e recupere o investimento com sua primeira venda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          
          {/* --- PLANO MENSAL (ÂNCORA) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-6 relative"
          >
            <div className="text-center pb-6 border-b border-zinc-800">
                <h3 className="font-display text-2xl text-zinc-400 uppercase tracking-widest">Mensal</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-zinc-500 line-through text-lg">R$ 49,90</span>
                    <span className="text-4xl font-bold text-white">R$ 17,00</span>
                </div>
                <p className="text-zinc-500 text-sm mt-2">Renovação mensal automática</p>
            </div>

            <ul className="space-y-4 text-zinc-400 text-sm">
                <li className="flex gap-3"><Check className="text-zinc-600 w-5 h-5" /> Acesso a 10.000 Vídeos</li>
                <li className="flex gap-3"><Check className="text-zinc-600 w-5 h-5" /> Atualizações Diárias</li>
                <li className="flex gap-3"><Check className="text-zinc-600 w-5 h-5" /> Grupo de Networking</li>
                <li className="flex gap-3"><Check className="text-zinc-600 w-5 h-5" /> Acesso por 30 dias</li>
            </ul>
        <a href="https://pay.cakto.com.br/32dhc5p_437741" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full h-12 border-zinc-700 hover:bg-zinc-800 text-white font-bold rounded-xl mt-4">
                Assinar Mensal
            </Button>
        </a>
          </motion.div>

          {/* --- PLANO VITALÍCIO (OFERTA HERO) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-950 border-2 border-primary rounded-2xl p-8 flex flex-col gap-6 relative shadow-[0_0_50px_-10px_rgba(34,197,94,0.2)] transform md:-translate-y-4"
          >
            {/* Badge de Melhor Escolha */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black font-bold text-xs uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                <Zap className="w-3 h-3 fill-black" /> Mais Vendido
            </div>

            <div className="text-center pb-6 border-b border-zinc-800/50">
                <h3 className="font-display text-3xl text-primary uppercase tracking-widest font-bold drop-shadow-md">Vitalício</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-zinc-500 line-through text-lg">R$ 97,90</span>
                    <span className="text-5xl font-bold text-white">R$ 29,90</span>
                </div>
                <p className="text-green-400/80 text-sm mt-2 font-medium">Pagamento único. Acesso para sempre.</p>
            </div>

            <ul className="space-y-4 text-zinc-300 font-medium">
                <li className="flex gap-3"><div className="bg-primary/20 p-1 rounded-full"><Check className="text-primary w-3 h-3" /></div> +10.000 Vídeos Prontos</li>
                <li className="flex gap-3"><div className="bg-primary/20 p-1 rounded-full"><Check className="text-primary w-3 h-3" /></div> Atualizações Diárias</li>
                <li className="flex gap-3"><div className="bg-primary/20 p-1 rounded-full"><Check className="text-primary w-3 h-3" /></div> 10 Nichos Virais</li>
                <li className="flex gap-3"><div className="bg-primary/20 p-1 rounded-full"><Check className="text-primary w-3 h-3" /></div> Acesso Vitalício (Sem taxas)</li>
            </ul>

            <div className="space-y-3 mt-4">
                <a href="https://pay.cakto.com.br/sr35huo" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full h-14 bg-primary text-black text-lg font-bold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all">
                    GARANTIR ACESSO AGORA
                </Button>
                </a>
                <div className="flex justify-center gap-4 text-[10px] text-zinc-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Compra Segura</span>
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Entrega Imediata</span>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}