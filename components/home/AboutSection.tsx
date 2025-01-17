import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-secondary/5 rounded-xl p-4 sm:p-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-primary-light">
          Hakkımızda Uras Tasarım
        </h2>
        <Separator className="bg-secondary/20" />
        <p className="text-secondary-light leading-relaxed">
          2013 yılı ortalarında kurulan firmamız, bu tarihten itibaren öncelikle
          Savunma Sanayi olmak üzere birçok alanda ortaya çıkan ihtiyaçlara
          cevap vermek adına özel tasarımlar yapmaktadır. Yapılan bu tasarımlara
          ait prototipleri ve zaman içerisinde ürüne dönüşen tasarımlara ait
          seri imalatları, kabiliyeti yüksek alt yüklenicileri ve
          tedarikçileriyle bütünlük içerisinde çalışarak hayata geçirmektedir.
        </p>
        <p className="text-secondary-light leading-relaxed">
          Her türlü mekanik tasarım konusunda markalaşma yolunda emin adımlarla
          ilerlemekte olan firmamız, kalite ve müşteri memnuniyetini odak
          noktası kabul ederek her geçen gün daha da büyümek ve daha iyi hizmet
          vermek için gereken adımları da atmaktadır.
        </p>
      </div>

      <div className="bg-secondary/20 p-6 rounded-xl backdrop-blur-sm border border-secondary/10">
        <h3 className="text-xl font-semibold mb-4 text-primary-light">
          Bize Ulaşın
        </h3>
        <form className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Adınız Soyadınız"
              className="bg-secondary/10 border-secondary/20"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="E-posta Adresiniz"
              className="bg-secondary/10 border-secondary/20"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="tel"
              placeholder="Telefon Numaranız"
              className="bg-secondary/10 border-secondary/20"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Mesajınız..."
              className="min-h-[120px] bg-secondary/10 border-secondary/20"
            />
          </div>
          <Button className="w-full bg-primary hover:bg-primary-dark text-white transition-colors duration-300">
            Gönder
          </Button>
        </form>
      </div>
    </div>
  );
};
