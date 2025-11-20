import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Orcamento = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    origin: "",
    destination: "",
    cargoType: "",
    weight: "",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação Enviada!",
      description: "Nosso time entrará em contato em breve com seu orçamento personalizado.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      origin: "",
      destination: "",
      cargoType: "",
      weight: "",
      details: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
              SOLICITE SEU ORÇAMENTO
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Orçamento Gratuito
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Receba uma proposta personalizada para suas necessidades logísticas
            </p>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Benefits */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Por que solicitar um orçamento?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Resposta em até 2 horas úteis",
                    "Sem compromisso ou taxas ocultas",
                    "Proposta personalizada",
                    "Consultoria especializada gratuita",
                    "Melhores condições do mercado"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-muted rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    Seus dados estão seguros conosco e serão usados apenas para elaborar seu orçamento personalizado.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                  <h2 className="text-3xl font-bold text-card-foreground mb-2">
                    Preencha os Dados
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Quanto mais detalhes você fornecer, mais preciso será seu orçamento
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Empresa *</Label>
                        <Input
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nome da empresa"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    </div>

                    <div>
                      <Label htmlFor="service">Serviço Desejado *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleSelectChange("service", value)}
                        required
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maritimo">Transporte Marítimo</SelectItem>
                          <SelectItem value="terrestre">Transporte Terrestre</SelectItem>
                          <SelectItem value="armazenagem">Armazenagem</SelectItem>
                          <SelectItem value="gestao">Gestão de Cargas</SelectItem>
                          <SelectItem value="comercio">Comércio Exterior</SelectItem>
                          <SelectItem value="consultoria">Consultoria</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="origin">Origem *</Label>
                        <Input
                          id="origin"
                          name="origin"
                          required
                          value={formData.origin}
                          onChange={handleChange}
                          placeholder="Cidade/País de origem"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="destination">Destino *</Label>
                        <Input
                          id="destination"
                          name="destination"
                          required
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder="Cidade/País de destino"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="cargoType">Tipo de Carga *</Label>
                        <Input
                          id="cargoType"
                          name="cargoType"
                          required
                          value={formData.cargoType}
                          onChange={handleChange}
                          placeholder="Ex: Eletrônicos, Alimentos..."
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="weight">Peso Aproximado (kg)</Label>
                        <Input
                          id="weight"
                          name="weight"
                          type="number"
                          value={formData.weight}
                          onChange={handleChange}
                          placeholder="Ex: 1000"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="details">Detalhes Adicionais</Label>
                      <Textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Forneça informações adicionais que possam ajudar na elaboração do orçamento..."
                        rows={5}
                        maxLength={1000}
                        className="mt-2 resize-none"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Máximo 1000 caracteres
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg">
                      Solicitar Orçamento Gratuito
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Ao enviar este formulário, você concorda com nossa política de privacidade
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 bg-gradient-to-br from-muted to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Atendemos Empresas de Todos os Portes
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Desde pequenas empresas até grandes corporações confiam em nossas soluções logísticas
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: "500+", label: "Clientes Satisfeitos" },
                { number: "99%", label: "Taxa de Aprovação" },
                { number: "2h", label: "Tempo de Resposta" }
              ].map((stat, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Orcamento;
