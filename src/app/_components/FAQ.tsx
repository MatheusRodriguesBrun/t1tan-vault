"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-8 md:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-zinc-400">
            Tire suas dúvidas e entre para o time com total segurança.
          </p>
        </div>

        {/* Acordeão de Perguntas */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          
          <AccordionItem value="item-1" className="border border-zinc-800 rounded-xl bg-zinc-900/30 px-6">
            <AccordionTrigger className="text-lg font-bold text-white hover:text-primary hover:no-underline py-6">
              Preciso saber editar vídeos?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 text-base pb-6 leading-relaxed">
              Não! O T1TAN VAULT entrega os vídeos 100% prontos, editados e legendados. Sua única tarefa é baixar do nosso drive e postar nas suas redes sociais. É literalmente copiar e colar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-zinc-800 rounded-xl bg-zinc-900/30 px-6">
            <AccordionTrigger className="text-lg font-bold text-white hover:text-primary hover:no-underline py-6">
              Como recebo o acesso?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 text-base pb-6 leading-relaxed">
              O acesso é imediato e automático. Assim que o pagamento for confirmado, você recebe um e-mail com seu login e senha para entrar na nossa área de membros exclusiva e baixar os materiais.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-zinc-800 rounded-xl bg-zinc-900/30 px-6">
            <AccordionTrigger className="text-lg font-bold text-white hover:text-primary hover:no-underline py-6">
              Funciona para quem nunca vendeu nada?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 text-base pb-6 leading-relaxed">
              Sim. O método foi desenhado para iniciantes. Além dos vídeos, você recebe um guia de como configurar suas contas e os scripts de vendas prontos para converter seguidores em compradores.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-zinc-800 rounded-xl bg-zinc-900/30 px-6">
            <AccordionTrigger className="text-lg font-bold text-white hover:text-primary hover:no-underline py-6">
              E se eu não gostar do conteúdo?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 text-base pb-6 leading-relaxed">
              Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o T1TAN VAULT não é para você, basta enviar um e-mail e devolvemos 100% do seu dinheiro. O risco é todo nosso.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-zinc-800 rounded-xl bg-zinc-900/30 px-6">
            <AccordionTrigger className="text-lg font-bold text-white hover:text-primary hover:no-underline py-6">
              Vou ter problemas com direitos autorais?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 text-base pb-6 leading-relaxed">
              Nossos cortes são editados utilizando técnicas de retenção e "Fair Use" (Uso Aceitável), o que minimiza drasticamente problemas. Além disso, ensinamos truques para "limpar" o metadado do vídeo e torná-lo único para o algoritmo.
            </AccordionContent>
          </AccordionItem>

        </Accordion>

      </div>
    </section>
  );
}