import Image from "next/image";

export const ServicesSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-primary p-6 rounded-xl text-white">
        <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
          <Image
            src="/image/mekanik tasarım.jpg"
            alt="Mekanik Tasarım"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">Mekanik Tasarım</h3>
        <p className="text-secondary">
          Başta Savunma Sanayi olmak üzere birçok farklı sektörde, çeşitli
          ihtiyaçlardan kaynaklanan talepleri karşılamak üzere bir çok farklı
          türde mekanik tasarım faaliyetlerini...
        </p>
        <button className="text-sm text-secondary hover:text-white transition-colors">
          ...devamı
        </button>
      </div>

      <div className="bg-primary p-6 rounded-xl text-white">
        <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
          <Image
            src="/image/mekanik tasarım ve üretim danışmanlığı.jpg"
            alt="Mekanik Tasarım ve Üretim Danışmanlığı"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">
          Mekanik Tasarım ve Üretim Danışmanlığı
        </h3>
        <p className="text-secondary">
          Partneri olduğumuz birçok firmanın kendi bünyesinde yürütmekte olduğu
          tasarım ve üretim faaliyetleri esnasında oluşan tıkanıklıkların
          çözümünde, yıllara sari tecrübemizle...
        </p>
        <button className="text-sm text-secondary hover:text-white transition-colors">
          ...devamı
        </button>
      </div>

      <div className="bg-primary p-6 rounded-xl text-white">
        <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
          <Image
            src="/image/üretim planlama ve takibi.jpg"
            alt="Üretim Planlama Ve Takibi"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">Üretim Planlama Ve Takibi</h3>
        <p className="text-secondary">
          Firmamız sahip olduğu yüksek kabiliyetli alt yüklenicileri ve geniş
          tedarikçi ağı ile her türlü prototip ve seri üretimleri sürat ve
          başarıyla gerçekleştirebilmektedir. Kuruluşumuz,...
        </p>
        <button className="text-sm text-secondary hover:text-white transition-colors">
          ...devamı
        </button>
      </div>
    </div>
  );
};
