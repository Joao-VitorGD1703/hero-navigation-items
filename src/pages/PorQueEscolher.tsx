import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Shield, Globe, TrendingUp, HeadphonesIcon, Leaf, Award, Users, Target } from "lucide-react";

const PorQueEscolher = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Pontualidade Garantida",
      description: "Cumprimos 99% dos prazos estabelecidos com nossos clientes através de planejamento rigoroso e monitoramento constante.",
      stats: "99% de entregas no prazo"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Sistemas avançados de rastreamento e seguro completo para proteger sua carga em todas as etapas do transporte.",
      stats: "Zero sinistros em 2024"
    },
    {
      icon: Globe,
      title: "Alcance Global",
      description: "Rede de parceiros em mais de 50 países garantindo entregas em qualquer lugar do mundo com eficiência.",
      stats: "50+ países atendidos"
    },
    {
      icon: TrendingUp,
      title: "Tecnologia Avançada",
      description: "Plataforma digital integrada para rastreamento em tempo real e gestão completa de toda sua operação logística.",
      stats: "Sistema 100% digital"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte 24/7",
      description: "Equipe especializada disponível 24 horas por dia, 7 dias por semana para atender suas necessidades.",
      stats: "Tempo de resposta: 2h"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Compromisso com práticas sustentáveis e redução de emissões através de rotas otimizadas e frota moderna.",
      stats: "30% menos emissões"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos a excelência em cada entrega e processo, superando expectativas constantemente."
    },
    {
      icon: Users,
      title: "Comprometimento",
      description: "Comprometidos com o sucesso dos nossos clientes e parceiros em cada projeto."
    },
    {
      icon: Target,
      title: "Inovação",
      description: "Investimos continuamente em tecnologia e processos para oferecer as melhores soluções."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-black">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')] bg-cover bg-center"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <span className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm inline-block mb-6">
              NOSSOS DIFERENCIAIS
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Por Que Escolher a Open Sea?
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Somos referência em logística com diferenciais que fazem toda a diferença para o sucesso do seu negócio
            </p>
          </div>
        </section>

        {/* Reasons Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-border">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <reason.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {reason.description}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <span className="text-sm font-semibold text-primary">{reason.stats}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-muted to-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Números Que Falam Por Si
              </h2>
              <p className="text-xl text-muted-foreground">
                Resultados comprovados ao longo de nossa trajetória
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Anos de Experiência", suffix: "" },
                { number: "10", label: "Entregas Mensais", suffix: "mil+" },
                { number: "500+", label: "Clientes Ativos", suffix: "" },
                { number: "99", label: "Satisfação", suffix: "%" }
              ].map((stat, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 text-center shadow-lg">
                  <div className="text-6xl font-bold text-primary mb-2">
                    {stat.number}
                    {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
                  </div>
                  <div className="text-lg text-muted-foreground font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="px-6 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm inline-block mb-4">
                NOSSOS VALORES
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                O Que Nos Move
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary to-primary-hover">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto Para Experimentar a Diferença?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Junte-se a centenas de empresas que já confiam na Open Sea Logística
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/orcamento">Solicitar Orçamento</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-2 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contato">Falar Conosco</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PorQueEscolher;
