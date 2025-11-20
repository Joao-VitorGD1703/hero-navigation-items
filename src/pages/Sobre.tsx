import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Ship, Target, Eye, Award } from "lucide-react";

const Sobre = () => {
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
              SOBRE NÓS
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Conheça a Open Sea Logística
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Mais de 15 anos conectando negócios ao mundo com excelência e inovação
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Nossa História
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Fundada em 2009, a Open Sea Logística nasceu com o propósito de transformar o setor de logística no Brasil, trazendo soluções inovadoras e eficientes para empresas de todos os portes.
                  </p>
                  <p>
                    Ao longo de mais de 15 anos, construímos uma reputação sólida baseada em confiança, pontualidade e excelência no atendimento. Hoje, somos uma das principais operadoras logísticas do país, atendendo clientes em mais de 50 países.
                  </p>
                  <p>
                    Nossa jornada é marcada pelo compromisso constante com a inovação tecnológica e a sustentabilidade, sempre buscando oferecer as melhores soluções para nossos parceiros comerciais.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl p-8 h-[500px] flex items-center justify-center">
                  <Ship className="h-64 w-64 text-primary" />
                </div>
              </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conectar negócios ao mundo através de soluções logísticas inteligentes, eficientes e sustentáveis, superando expectativas a cada entrega.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como a operadora logística mais confiável e inovadora da América Latina até 2030.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Excelência, Integridade, Inovação, Sustentabilidade e Compromisso com o cliente.
                </p>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-muted rounded-3xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Nossa Infraestrutura
                </h2>
                <p className="text-xl text-muted-foreground">
                  Investimos continuamente em tecnologia e infraestrutura de ponta
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { number: "5", label: "Centros de Distribuição", unit: "" },
                  { number: "200", label: "Veículos na Frota", unit: "+" },
                  { number: "50", label: "m² de Armazenagem", unit: "mil" },
                  { number: "500", label: "Colaboradores", unit: "+" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {item.number}
                      <span className="text-2xl">{item.unit}</span>
                    </div>
                    <div className="text-lg text-foreground font-semibold">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Nossa Equipe
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Profissionais altamente qualificados e comprometidos com a excelência
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 text-center">
              <p className="text-2xl text-foreground leading-relaxed mb-8">
                "Nosso maior ativo são as pessoas. Contamos com uma equipe de mais de 500 colaboradores dedicados, treinados constantemente para oferecer o melhor atendimento e as soluções mais eficientes para nossos clientes."
              </p>
              <Button asChild size="lg">
                <Link to="/contato">Fale com Nossa Equipe</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary to-primary-hover">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quer Fazer Parte da Nossa História?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/orcamento">Solicitar Orçamento</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-2 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contato">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
