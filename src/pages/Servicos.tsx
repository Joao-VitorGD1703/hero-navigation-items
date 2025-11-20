import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Ship, Truck, Building, Package, Globe, HeadphonesIcon, CheckCircle2, ArrowRight } from "lucide-react";

const Servicos = () => {
  const services = [
    {
      icon: Ship,
      title: "Transporte Marítimo",
      description: "Soluções completas em transporte marítimo internacional com rotas otimizadas e prazos garantidos para sua carga.",
      features: [
        "Rotas otimizadas globalmente",
        "Rastreamento em tempo real",
        "Seguro completo de cargas",
        "Consolidação de containers",
        "FCL e LCL disponíveis"
      ]
    },
    {
      icon: Truck,
      title: "Transporte Terrestre",
      description: "Frota moderna e rastreada para distribuição nacional com segurança e pontualidade em todas as entregas.",
      features: [
        "Frota própria rastreada",
        "Entregas expressas",
        "Transporte refrigerado",
        "Cobertura nacional",
        "Monitoramento 24/7"
      ]
    },
    {
      icon: Building,
      title: "Armazenagem",
      description: "Centros de distribuição estrategicamente localizados com tecnologia de ponta para gestão de estoque.",
      features: [
        "WMS integrado",
        "Gestão de estoque",
        "Cross-docking",
        "Picking e packing",
        "Controle de temperatura"
      ]
    },
    {
      icon: Package,
      title: "Gestão de Cargas",
      description: "Controle total da sua operação com sistemas integrados de rastreamento e monitoramento em tempo real.",
      features: [
        "Rastreamento GPS",
        "Relatórios detalhados",
        "Gestão de documentos",
        "Controle de avarias",
        "Auditoria de processos"
      ]
    },
    {
      icon: Globe,
      title: "Comércio Exterior",
      description: "Assessoria completa em importação e exportação com expertise em documentação e processos aduaneiros.",
      features: [
        "Despacho aduaneiro",
        "Licenciamento de importação",
        "Consultoria tributária",
        "Certificações internacionais",
        "Compliance regulatório"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Consultoria Logística",
      description: "Análise e otimização de processos logísticos para redução de custos e aumento de eficiência operacional.",
      features: [
        "Análise de processos",
        "Otimização de rotas",
        "Redução de custos",
        "Mapeamento de riscos",
        "KPIs personalizados"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-black">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec')] bg-cover bg-center"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <span className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm inline-block mb-6">
              NOSSOS SERVIÇOS
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Soluções Completas em Logística
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Oferecemos soluções logísticas integradas e personalizadas para atender todas as necessidades do seu negócio
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 h-full flex items-center justify-center">
                      <service.icon className="h-48 w-48 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild>
                      <Link to="/orcamento">
                        Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary to-primary-hover">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Precisa de uma Solução Personalizada?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Nossa equipe está pronta para criar a solução logística perfeita para o seu negócio
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/contato">Falar com Especialista</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-2 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/orcamento">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicos;
