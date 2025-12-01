"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section id="oferta" className="py-12 md:py-24 bg-background relative overflow-hidden">
      
      {/* Detalhe de Fundo */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white px-2">
            Escolha Seu <span className="text-primary">Acesso</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto px-4">
            Comece hoje e recupere o investimento com sua primeira venda.
          </p>
        </div>

        {/* AJUSTE AQUI: justify-items-center para forçar o centro no mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 max-w-4xl mx-auto justify-items-center items-center">
          
          {/* --- PLANO MENSAL --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[340px] md:max-w-md bg-zinc-900/30 border border-zinc-800 rounded-2xl p-5 md:p-8 flex flex-col gap-5 md:gap-6 relative"
          >
            <div className="text-center pb-5 md:pb-6 border-b border-zinc-800">
                <h3 className="font-display text-lg md:text-2xl text-zinc-400 uppercase tracking-widest">Mensal</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-zinc-500 line-through text-base md:text-lg">R$ 49,90</span>
                    <span className="text-3xl md:text-4xl font-bold text-white">R$ 17,00</span>
                </div>
                <p className="text-zinc-500 text-xs md:text-sm mt-2">Renovação mensal automática</p>
            </div>

            <ul className="space-y-3 md:space-y-4 text-zinc-400 text-sm">
                <li className="flex gap-3 items-center"><Check className="text-zinc-600 w-5 h-5 shrink-0" /> Acesso a 10.000 Vídeos</li>
                <li className="flex gap-3 items-center"><Check className="text-zinc-600 w-5 h-5 shrink-0" /> Atualizações Diárias</li>
                <li className="flex gap-3 items-center"><Check className="text-zinc-600 w-5 h-5 shrink-0" /> Grupo de Networking</li>
                <li className="flex gap-3 items-center"><Check className="text-zinc-600 w-5 h-5 shrink-0" /> Acesso por 30 dias</li>
            </ul>

            <Button variant="outline" className="w-full h-11 md:h-12 border-zinc-700 hover:bg-zinc-800 text-white font-bold rounded-xl mt-2">
                Assinar Mensal
            </Button>
          </motion.div>

          {/* --- PLANO VITALÍCIO --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // AJUSTE: Removida a transformação negativa no mobile para evitar quebra de layout, mantida no MD
            className="w-full max-w-[340px] md:max-w-md bg-zinc-950 border-2 border-primary rounded-2xl p-5 md:p-8 flex flex-col gap-5 md:gap-6 relative shadow-[0_0_50px_-10px_rgba(34,197,94,0.2)] md:-translate-y-4"
          >
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-black font-bold text-[10px] md:text-xs uppercase px-4 py-1 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap z-20">
                <Zap className="w-3 h-3 fill-black" /> Mais Vendido
            </div>

            <div className="text-center pb-5 md:pb-6 border-b border-zinc-800/50">
                <h3 className="font-display text-xl md:text-3xl text-primary uppercase tracking-widest font-bold drop-shadow-md">Vitalício</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-zinc-500 line-through text-base md:text-lg">R$ 97,90</span>
                    <span className="text-4xl md:text-5xl font-bold text-white">R$ 29,90</span>
                </div>
                <p className="text-green-400/80 text-xs md:text-sm mt-2 font-medium">Pagamento único. Acesso para sempre.</p>
            </div>

            <ul className="space-y-3 md:space-y-4 text-zinc-300 font-medium text-sm">
                <li className="flex gap-3 items-center"><div className="bg-primary/20 p-1 rounded-full shrink-0"><Check className="text-primary w-3 h-3" /></div> +10.000 Vídeos Prontos</li>
                <li className="flex gap-3 items-center"><div className="bg-primary/20 p-1 rounded-full shrink-0"><Check className="text-primary w-3 h-3" /></div> Atualizações Diárias</li>
                <li className="flex gap-3 items-center"><div className="bg-primary/20 p-1 rounded-full shrink-0"><Check className="text-primary w-3 h-3" /></div> 10 Nichos Virais</li>
                <li className="flex gap-3 items-center"><div className="bg-primary/20 p-1 rounded-full shrink-0"><Check className="text-primary w-3 h-3" /></div> Acesso Vitalício (Sem taxas)</li>
            </ul>

            <div className="space-y-3 mt-2 md:mt-4">
                <a href="https://pay.cakto.com.br/sr35huo" target="_blank" rel="noopener noreferrer" className="block">
                    <Button size="lg" className="w-full h-12 md:h-14 bg-primary text-black text-base md:text-lg font-bold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all">
                        GARANTIR ACESSO AGORA
                    </Button>
                </a>
                <div className="flex justify-center gap-3 md:gap-4 text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest">
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