import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
                <span className="px-4 py-2 md:px-6 md:py-3 bg-white/20 backdrop-blur-md text-white text-sm md:text-base font-semibold rounded-full border border-white/30">
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
                <button className="px-8 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded-lg transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 whitespace-nowrap cursor-pointer">
                  Solicitar Orçamento
                </button>
                <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white/50 whitespace-nowrap cursor-pointer shadow-xl">
                  Nossos Serviços
                </button>
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
        <section id="servicos" className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-6 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  NOSSOS SERVIÇOS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Soluções Completas em Logística
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos soluções logísticas completas e personalizadas para atender todas as necessidades do seu negócio
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

          </div>
        </section>

        {/* Why Choose Section */}
        <section id="porque" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-6 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  NOSSOS DIFERENCIAIS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Por Que Escolher a Open Sea?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Somos referência em logística com diferenciais que fazem toda a diferença para o sucesso do seu negócio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "ri-time-line", title: "Pontualidade Garantida", desc: "Cumprimos 99% dos prazos estabelecidos com nossos clientes através de planejamento rigoroso." },
                { icon: "ri-shield-check-line", title: "Segurança Total", desc: "Sistemas avançados de rastreamento e seguro completo para proteger sua carga." },
                { icon: "ri-global-line", title: "Alcance Global", desc: "Rede de parceiros em mais de 50 países garantindo entregas em qualquer lugar do mundo." },
                { icon: "ri-line-chart-line", title: "Tecnologia Avançada", desc: "Plataforma digital integrada para rastreamento em tempo real." },
                { icon: "ri-customer-service-line", title: "Suporte 24/7", desc: "Equipe especializada disponível 24 horas por dia, 7 dias por semana." },
                { icon: "ri-leaf-line", title: "Sustentabilidade", desc: "Compromisso com práticas sustentáveis e redução de emissões." },
              ].map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <i className={`${item.icon} text-3xl text-white`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-r from-primary via-black to-primary-hover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-black/85 to-primary/95"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm border border-white/30">
                  NÚMEROS QUE IMPRESSIONAM
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Resultados Comprovados</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">Nossa trajetória de sucesso refletida em números que demonstram excelência e confiança</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "ri-calendar-line", number: "15+", label: "Anos de Experiência" },
                { icon: "ri-earth-line", number: "50+", label: "Países Atendidos" },
                { icon: "ri-box-3-line", number: "10k+", label: "Entregas Mensais" },
                { icon: "ri-star-line", number: "99%", label: "Satisfação dos Clientes" },
              ].map((stat, index) => (
                <div key={index} className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <i className={`${stat.icon} text-3xl text-primary`}></i>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-lg text-gray-200 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="sobre" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-6 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  NOSSO PROCESSO
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Como Trabalhamos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Um processo estruturado e eficiente que garante resultados excepcionais em cada etapa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "ri-search-line", number: "01", title: "Análise e Planejamento", desc: "Avaliamos suas necessidades e desenvolvemos a melhor estratégia logística personalizada." },
                { icon: "ri-truck-line", number: "02", title: "Execução Eficiente", desc: "Nossa equipe especializada coloca o plano em ação com precisão e agilidade." },
                { icon: "ri-radar-line", number: "03", title: "Monitoramento Contínuo", desc: "Acompanhamento em tempo real de toda operação com tecnologia de ponta." },
                { icon: "ri-checkbox-circle-line", number: "04", title: "Entrega e Suporte", desc: "Garantimos a entrega no prazo com suporte completo e documentação organizada." },
              ].map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 bg-gradient-to-br from-primary to-primary-hover">
                      <div className="absolute bottom-4 left-4">
                        <div className="text-6xl font-bold text-white/30 leading-none mb-2">{step.number}</div>
                      </div>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <i className={`${step.icon} text-2xl text-primary`}></i>
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-24 -right-4 z-20">
                      <i className="ri-arrow-right-line text-3xl text-primary"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-muted to-background" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-black/85 to-primary/90"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full text-sm border border-white/30">
                  🚀 PRONTO PARA COMEÇAR?
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transforme Sua Logística Hoje
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
                Solicite um orçamento personalizado e descubra como a Open Sea Logística pode otimizar suas operações e impulsionar seus resultados
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="px-10 py-5 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 whitespace-nowrap cursor-pointer text-lg">
                  <i className="ri-mail-line mr-2"></i>
                  Solicitar Orçamento Gratuito
                </button>
                <a href="tel:+551134567890" className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 whitespace-nowrap cursor-pointer text-lg shadow-xl inline-flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  (11) 3456-7890
                </a>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: "ri-time-line", title: "Resposta Rápida", desc: "Retornamos em até 2 horas úteis" },
                  { icon: "ri-shield-check-line", title: "Sem Compromisso", desc: "Orçamento gratuito e sem obrigações" },
                  { icon: "ri-customer-service-line", title: "Suporte Dedicado", desc: "Equipe especializada à disposição" },
                ].map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <i className={`${feature.icon} text-4xl text-white mb-3`}></i>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-200 text-sm">{feature.desc}</p>
                  </div>
                ))}
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
