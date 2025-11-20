import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Ship, Truck, Building, Package, Globe, HeadphonesIcon, ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-black to-primary-hover">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec')] bg-cover bg-center"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-3xl">
              <div className="mb-6 inline-block">
                <span className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border border-white/30">
                  🌊 Líder em Logística Internacional
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Logística Inteligente para o Seu Negócio
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                A Open Sea Logística oferece soluções completas em transporte marítimo, armazenagem e distribuição com excelência e eficiência comprovadas no mercado internacional.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/orcamento">Solicitar Orçamento</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg border-2 border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/servicos">Nossos Serviços</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <ChevronDown className="text-white" />
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="px-6 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm inline-block mb-4">
                NOSSOS SERVIÇOS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Soluções Completas em Logística
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Oferecemos soluções logísticas completas e personalizadas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Ship, title: "Transporte Marítimo", desc: "Soluções completas em transporte marítimo internacional" },
                { icon: Truck, title: "Transporte Terrestre", desc: "Frota moderna e rastreada para distribuição nacional" },
                { icon: Building, title: "Armazenagem", desc: "Centros de distribuição com tecnologia de ponta" },
                { icon: Package, title: "Gestão de Cargas", desc: "Controle total com rastreamento em tempo real" },
                { icon: Globe, title: "Comércio Exterior", desc: "Assessoria completa em importação e exportação" },
                { icon: HeadphonesIcon, title: "Consultoria", desc: "Otimização de processos logísticos" },
              ].map((service, index) => (
                <div key={index} className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group p-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/servicos">Ver Todos os Serviços</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-r from-primary via-black to-primary-hover">
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm border border-white/30 inline-block mb-4">
                NÚMEROS QUE IMPRESSIONAM
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Resultados Comprovados</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Anos de Experiência" },
                { number: "50+", label: "Países Atendidos" },
                { number: "10k+", label: "Entregas Mensais" },
                { number: "99%", label: "Satisfação dos Clientes" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105 cursor-pointer">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">{stat.number}</div>
                  <div className="text-lg text-gray-200 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-muted to-background">
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="px-6 py-3 bg-primary/10 text-primary font-semibold rounded-full text-sm inline-block mb-6">
                🚀 PRONTO PARA COMEÇAR?
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
                Transforme Sua Logística Hoje
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Solicite um orçamento personalizado e descubra como podemos otimizar suas operações
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/orcamento">Solicitar Orçamento Gratuito</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <Link to="/contato">Falar com Especialista</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
