import { Service } from "@/types/service";
import {
  Car,
  Droplets,
  Shield,
  Sparkles,
  Eye,
  Scissors,
  Settings,
  Zap,
  Crown,
} from "lucide-react";

export const services: Service[] = [
  {
    id: "1",
    name: "Lavagem Simples",
    description: "Manutenção rápida e veículos com sujeira leve",
    priceRange: "R$ 80 a R$ 100",
    category: "Básico",
    icon: <Droplets className="h-5 w-5" />,
    image: "/images/img-1.jpg",
    items: [
      { text: "Lavagem externa", included: true },
      { text: "Limpeza de rodas", included: true },
      { text: "Remoção de sujeiras leves", included: true },
      { text: "Secagem com toalha de microfibra", included: true },
      { text: "Limpeza Interna Básica", included: true },
      { text: "Aspiração de bancos e carpetes", included: true },
      {
        text: "Limpeza superficial de painel, console e portas com pano de microfibra",
        included: true,
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de agendar uma *Lavagem Simples* (R$ 80 a R$ 100). Qual a disponibilidade de vocês?",
  },
  {
    id: "2",
    name: "Lavagem Detalhada",
    description: "Acabamento melhor e proteção leve da pintura",
    priceRange: "R$ 120 a R$ 170",
    category: "Intermediário",
    icon: <Car className="h-5 w-5" />,
    image: "/images/img-3.jpg",
    items: [
      {
        text: "Pré-lavagem para amolecer sujeiras e reduzir riscos na pintura",
        included: true,
      },
      { text: "Lavagem Externa", included: true },
      {
        text: "Limpeza de rodas, caixas de roda e detalhes externos",
        included: true,
      },
      { text: "Limpeza de emblemas, cantos e acabamentos", included: true },
      { text: "Secagem com toalha de microfibra", included: true },
      {
        text: "Finalização com cera spray para realce de brilho",
        included: true,
      },
      { text: "Limpeza Interna Básica", included: true },
      { text: "Aspiração de bancos e carpetes", included: true },
      {
        text: "Limpeza superficial de painel, console e portas com pano de microfibra",
        included: true,
      },
    ],
    whatsappMessage:
      "Olá! Tenho interesse na *Lavagem Detalhada* (R$ 120 a R$ 170). Podem me informar a disponibilidade?",
  },
  {
    id: "3",
    name: "Lavagem Plus",
    description: "Proteção a mais e um toque de brilho especial",
    priceRange: "R$ 250 a R$ 300",
    category: "Premium",
    icon: <Sparkles className="h-5 w-5" />,
    image: "/images/lav-3.jpeg",
    items: [
      { text: "Todos os processos da Lavagem Detalhada", included: true },
      {
        text: "Descontaminação da pintura com Clay Bar (remoção de contaminantes sólidos como pó de ferro e seiva de árvores)",
        included: true,
      },
      { text: "Limpeza e proteção dos plásticos externos", included: true },
      { text: "Limpeza Interna Básica", included: true },
      { text: "Aspiração de bancos e carpetes e porta-malas", included: true },
      {
        text: "Limpeza superficial de painel, console e portas com pano de microfibra",
        included: true,
      },
      { text: "Limpeza de vidros internos", included: true },
    ],
    whatsappMessage:
      "Olá! Gostaria de fazer uma *Lavagem Plus* (R$ 250 a R$ 300). Qual o tempo de execução?",
  },
  {
    id: "4",
    name: "Higienização Interna Completa",
    description: "Limpeza profunda de todo o interior do veículo",
    priceRange: "R$ 300 a R$ 800",
    category: "Especializado",
    icon: <Shield className="h-5 w-5" />,
    image: "/images/lav-4.jpeg",
    items: [
      { text: "Limpeza técnica dos bancos (tecido ou couro)", included: true },
      { text: "Limpeza do carpete e porta-malas", included: true },
      { text: "Limpeza de teto", included: true },
      { text: "Limpeza e hidratação dos plásticos internos", included: true },
      { text: "Limpeza das saídas de ar, cantinhos e pedais", included: true },
      { text: "Eliminação de ácaros, fungos e bactérias", included: true },
      { text: "Aromatização especial", included: true },
    ],
    whatsappMessage:
      "Olá! Gostaria de agendar uma *Higienização Interna Completa* (R$ 300 a R$ 800). Quando vocês têm disponibilidade?",
  },
  {
    id: "5",
    name: "Higienização de Bancos de Tecido",
    description: "Remove sujeiras impregnadas, manchas e odores",
    priceRange: "R$ 200 a R$ 400",
    category: "Especializado",
    icon: <Scissors className="h-5 w-5" />,
    image: "/images/higienizacao-bancos-tecido.jpg",
    items: [
      {
        text: "Limpeza profunda dos bancos de tecido com uso de produtos específicos",
        included: true,
      },
      { text: "Escovação controlada e extração a vácuo", included: true },
      { text: "Remove sujeiras impregnadas, manchas e odores", included: true },
      {
        text: "Indicado para: Veículos com bancos manchados, com cheiro de mofo, cigarro ou após derramamento de líquidos",
        included: true,
      },
    ],
    whatsappMessage:
      "Olá! Preciso de uma *Higienização de Bancos de Tecido* (R$ 200 a R$ 400). Vocês atendem hoje?",
  },
  {
    id: "6",
    name: "Hidratação de Bancos de Couro",
    description: "Revitaliza o couro, previne ressecamento e rachaduras",
    priceRange: "R$ 80 a R$ 120",
    category: "Especializado",
    icon: <Crown className="h-5 w-5" />,
    image: "/images/hidratacao-bancos-couro.jpg",
    items: [
      { text: "Limpeza profunda dos bancos", included: true },
      {
        text: "Aplicação de hidratante específico para revitalizar o couro",
        included: true,
      },
      { text: "Prevenir ressecamento e rachaduras", included: true },
      {
        text: "Indicado para: Manutenção periódica de bancos de couro",
        included: true,
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de fazer uma *Hidratação de Bancos de Couro* (R$ 80 a R$ 120). Qual a disponibilidade?",
  },
  {
    id: "7",
    name: "Polimento Comercial (Correção Leve)",
    description:
      "Remove pequenos riscos superficiais, marcas de lavagens mal feitas e oxidações leves",
    priceRange: "R$ 400 a R$ 700",
    category: "Correção",
    icon: <Settings className="h-5 w-5" />,
    image: "/images/img-2.jpg",
    items: [
      { text: "Melhora o brilho da pintura", included: true },
      { text: "Corrige riscos leves e marcas circulares", included: true },
      {
        text: "Ideal como pré-tratamento antes da vitrificação ou cristalização",
        included: true,
      },
      {
        text: "Indicado para: Pinturas em bom estado com pequenos defeitos visuais",
        included: true,
      },
      { text: "Tempo de execução: 6 a 8 horas", included: true },
    ],
    whatsappMessage:
      "Olá! Tenho interesse no *Polimento Comercial* (R$ 400 a R$ 700). Qual o prazo de execução?",
  },
  {
    id: "8",
    name: "Polimento Técnico",
    description:
      "Tratamento completo para quem busca o máximo nível de correção e acabamento",
    priceRange: "R$ 1.500 a R$ 2.500",
    category: "Correção Premium",
    icon: <Zap className="h-5 w-5" />,
    image: "/images/img-4.jpg",
    items: [
      {
        text: "1ª Etapa: Corte pesado para remoção de riscos profundos",
        included: true,
      },
      { text: "2ª Etapa: Refino para reduzir marcas do corte", included: true },
      {
        text: "3ª Etapa: Lustro para máximo brilho e profundidade de cor",
        included: true,
      },
      {
        text: "Indicado para: Pinturas muito danificadas, com muitos riscos, pós-funilaria ou veículos antigos",
        included: true,
      },
      {
        text: "Tempo de execução: 2 dias completos (16 a 20 horas de trabalho)",
        included: true,
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de fazer um *Polimento Técnico* (R$ 1.500 a R$ 2.500). Precisam avaliar o veículo primeiro?",
  },
  {
    id: "9",
    name: "Vitrificação de Pintura",
    description: "Proteção extrema com brilho incomparável!",
    priceRange: "R$ 800 a R$ 1.300",
    category: "Proteção Premium",
    icon: <Shield className="h-5 w-5" />,
    image: "/images/img-5.jpg",
    items: [
      { text: "Resistência a Raios UV", included: true },
      { text: "Resistência a Chuva ácida", included: true },
      { text: "Resistência a Fezes de pássaros", included: true },
      { text: "Resistência a Seiva de árvores", included: true },
      { text: "Resistência a Pequenas agressões químicas", included: true },
      { text: "Lavagem técnica completa", included: true },
      { text: "Descontaminação da pintura (Clay Bar)", included: true },
      {
        text: "Polimento técnico leve (se necessário para nivelamento)",
        included: true,
      },
      { text: "Aplicação do vitrificador profissional", included: true },
      { text: "Processo de cura controlada", included: true },
      { text: "Tempo médio de execução: De 8 a 12 horas", included: true },
    ],
    whatsappMessage:
      "Olá! Tenho interesse na *Vitrificação de Pintura* (R$ 800 a R$ 1.300). Qual a durabilidade da proteção?",
  },
  {
    id: "10",
    name: "Vitrificação de Vidros (Cristalização)",
    description:
      "Aplicação de produto hidrofóbico que cria uma película protetora, fazendo com que a água escorra com mais facilidade",
    priceRange: "R$ 100 a R$ 150",
    category: "Proteção",
    icon: <Eye className="h-5 w-5" />,
    image: "/images/vitrificacao-vidros.jpg",
    items: [
      {
        text: "Aplicação de produto hidrofóbico que cria uma película protetora",
        included: true,
      },
      {
        text: "Faz com que a água escorra com mais facilidade",
        included: true,
      },
      { text: "Melhora a visibilidade durante a chuva", included: true },
      {
        text: "Indicado para: Quem dirige muito em estrada ou em dias de chuva",
        included: true,
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de fazer a *Vitrificação de Vidros* (R$ 100 a R$ 150). Vocês fazem esse serviço?",
  },
];
