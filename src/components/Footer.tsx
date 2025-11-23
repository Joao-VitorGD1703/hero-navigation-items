import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (anchor: string) => {
    if (anchor === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer id="contato" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-gray-300 text-lg mb-8">
              Preencha o formulário e nossa equipe entrará em contato para apresentar as melhores soluções logísticas para seu negócio.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Endereço</h4>
                  <p className="text-gray-300">
                    Av. das Nações Unidas, 12.901<br />
                    São Paulo - SP, 04578-000
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Telefone</h4>
                  <p className="text-gray-300">
                    (11) 3456-7890<br />
                    (11) 98765-4321
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">E-mail</h4>
                  <p className="text-gray-300">
                    contato@opensealogistica.com.br<br />
                    comercial@opensealogistica.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Telefone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="(11) 98765-4321"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Empresa
                </label>
                <Input
                  id="company"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="Nome da sua empresa"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Mensagem * (máx. 500 caracteres)
                </label>
                <Textarea
                  id="message"
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                  placeholder="Descreva suas necessidades logísticas..."
                />
                <p className="text-xs text-gray-400 mt-1">0/500 caracteres</p>
              </div>
              <Button
                type="submit"
                className="w-full px-6 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-pacifico">
                <span className="text-primary">Open Sea</span> Logística
              </h3>
              <p className="text-gray-400">
                Soluções logísticas completas para conectar seu negócio ao mundo.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a onClick={() => scrollToSection("#")} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                    Início
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("#servicos")} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                    Serviços
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("#porque")} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                    Por Que Escolher
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("#sobre")} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                    Sobre
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm pt-8 border-t border-white/10">
            <p>© 2024 Open Sea Logística. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
