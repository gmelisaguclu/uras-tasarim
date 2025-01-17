"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const ServicesSection = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  return (
    <div ref={sectionRef} className="py-12">
      <h2
        className={`text-3xl sm:text-4xl font-bold text-primary mb-8 text-center transform transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        Hizmetlerimiz <span className="text-primary-light">& Çözümlerimiz</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`group bg-secondary/20 backdrop-blur-sm rounded-xl border border-secondary/10 overflow-hidden hover:border-primary/30 transition-all duration-700 transform ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
            style={{
              transitionDelay: `${index * 200}ms`,
              transitionProperty: "all",
              willChange: "transform, opacity",
            }}
          >
            <div className="h-56 relative overflow-hidden">
              <Image
                src={`/image/${
                  index === 0
                    ? "mekanik tasarım"
                    : index === 1
                    ? "mekanik tasarım ve üretim danışmanlığı"
                    : "üretim planlama ve takibi"
                }.jpg`}
                alt={
                  index === 0
                    ? "Mekanik Tasarım"
                    : index === 1
                    ? "Mekanik Tasarım ve Üretim Danışmanlığı"
                    : "Üretim Planlama Ve Takibi"
                }
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-primary-light mb-3 group-hover:text-primary transition-colors">
                {index === 0
                  ? "Mekanik Tasarım"
                  : index === 1
                  ? "Mekanik Tasarım ve Üretim Danışmanlığı"
                  : "Üretim Planlama Ve Takibi"}
              </h3>
              <p className="text-secondary-light mb-4">
                {index === 0
                  ? "Başta Savunma Sanayi olmak üzere birçok farklı sektörde, çeşitli ihtiyaçlardan kaynaklanan talepleri karşılamak üzere bir çok farklı türde mekanik tasarım faaliyetlerini..."
                  : index === 1
                  ? "Partneri olduğumuz birçok firmanın kendi bünyesinde yürütmekte olduğu tasarım ve üretim faaliyetleri esnasında oluşan tıkanıklıkların çözümünde, yıllara sari tecrübemizle..."
                  : "Firmamız sahip olduğu yüksek kabiliyetli alt yüklenicileri ve geniş tedarikçi ağı ile her türlü prototip ve seri üretimleri sürat ve başarıyla gerçekleştirebilmektedir. Kuruluşumuz,..."}
              </p>
              <button className="text-primary-light hover:text-primary flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                Detaylı Bilgi
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
