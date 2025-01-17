"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const Partners = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  const partners = [
    {
      name: "Cemer",
      logo: "/image/partner-logo/cemer-logo-ing.png",
    },
    {
      name: "Meteksan",
      logo: "/image/partner-logo/Meteksan_Savunma.png",
    },
    {
      name: "Havelsan",
      logo: "/image/partner-logo/havelsanlogo.jpg",
    },
    {
      name: "SDT",
      logo: "/image/partner-logo/sdt.jpg",
    },
    {
      name: "Nurol",
      logo: "/image/partner-logo/nurol.jpg",
    },
    {
      name: "Lamgöv",
      logo: "/image/partner-logo/lamgöv.jpg",
    },
    {
      name: "Vestel",
      logo: "/image/partner-logo/vestel_logo.jpg",
    },
    {
      name: "MHT",
      logo: "/image/partner-logo/mhtlogo.png",
    },
  ];

  return (
    <div ref={ref} className="py-16 relative overflow-hidden">
      {/* Arkaplan dekoratif elementler */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-secondary/10 to-secondary/5 -skew-y-3 z-0" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative z-10">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-primary mb-12 text-center transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          İş Ortaklarımız
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`group relative transform transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                willChange: "transform, opacity",
              }}
            >
              {/* Hover efekti için arka plan */}
              <div className="absolute inset-0 bg-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Parıltı efekti */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-light/10 to-transparent group-hover:translate-x-full duration-1000 transition-transform" />

              <div className="relative bg-secondary/5 backdrop-blur-sm p-6 rounded-lg border border-secondary/10 hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5">
                <div className="relative w-40 h-20 mx-auto transform transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
