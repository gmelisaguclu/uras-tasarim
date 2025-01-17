"use client";
import { useInView } from "react-intersection-observer";

export const WhyChooseUs = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  return (
    <div ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Arkaplan dekoratif elementler */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-secondary/10 to-secondary/5 -skew-y-3 z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 animate-text bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent bg-300% transform transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Neden{" "}
            <span className="text-primary-light hover:text-primary transition-colors">
              Uras Tasarım
            </span>
          </h2>
          <p
            className={`text-secondary-light max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Yenilikçi çözümler ve güvenilir hizmet anlayışımızla savunma
            sanayinde öncü firma olmaya devam ediyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={`group bg-secondary/20 backdrop-blur-sm p-8 rounded-lg border border-secondary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden hover:-translate-y-1 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: `${(index + 1) * 100}ms`,
                transitionProperty: "all",
                willChange: "transform, opacity",
              }}
            >
              {/* Kart içi parıltı efekti */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-light/5 to-transparent group-hover:translate-x-full duration-1000 transition-transform" />

              <div className="flex items-start gap-4 relative">
                <div className="text-primary-light text-3xl p-3 bg-secondary/20 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative">
                  {/* İkon arkası parıltı */}
                  <div className="absolute inset-0 bg-primary-light/10 rounded-lg group-hover:blur-sm transition-all duration-300" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-light mb-3 group-hover:text-primary transition-colors duration-300">
                    Zırhlı araç Atış Mazgalı
                  </h3>
                  <p className="text-secondary-light group-hover:text-secondary-light/80 transition-colors duration-300">
                    İsteklerinize uygun üretim
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
