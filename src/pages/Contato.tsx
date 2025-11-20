import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-black">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a')] bg-cover bg-center"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <span className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm inline-block mb-6">
              ENTRE EM CONTATO
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Fale Conosco
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Estamos prontos para atender você e oferecer as melhores soluções logísticas
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-8">
                  Informações de Contato
                </h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  Nossa equipe está disponível para atender suas necessidades. Entre em contato através de qualquer um dos canais abaixo.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">Endereço</h3>
                      <p className="text-muted-foreground">
                        Av. das Nações Unidas, 12.901<br />
                        São Paulo - SP, 04578-000<br />
                        Brasil
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">Telefones</h3>
                      <p className="text-muted-foreground">
                        (11) 3456-7890<br />
                        (11) 98765-4321<br />
                        0800 123 4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">E-mails</h3>
                      <p className="text-muted-foreground">
                        contato@opensealogistica.com.br<br />
                        comercial@opensealogistica.com.br<br />
                        atendimento@opensealogistica.com.br
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h<br />
                        Suporte 24/7 disponível
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                  <h2 className="text-3xl font-bold text-card-foreground mb-2">
                    Envie sua Mensagem
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Preencha o formulário e retornaremos em até 2 horas úteis
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 98765-4321"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da sua empresa"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Descreva suas necessidades logísticas..."
                        rows={5}
                        maxLength={500}
                        className="mt-2 resize-none"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Máximo 500 caracteres
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Nossa Localização
              </h2>
              <p className="text-xl text-muted-foreground">
                Visite nosso escritório principal em São Paulo
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl h-96 flex items-center justify-center">
              <MapPin className="h-32 w-32 text-primary" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
