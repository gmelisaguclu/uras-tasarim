"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const images = [
  "/image/homeimg.jpg",
  "/image/homeimg2.jpg",
  "/image/homeimg3.jpg",
];

export const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div ref={ref} className="relative w-full h-[600px] -my-8">
      <div className="relative w-full h-full">
        <Image
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          fill
          className={`object-cover transition-all duration-1000 brightness-75 ${
            inView ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
          priority
        />
      </div>
      <div
        className={`absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-center justify-center transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center transform transition-all duration-1000">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 text-white transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            URAS TASARIM VE{" "}
            <span
              className={`text-primary-light transition-all duration-1000 ${
                inView ? "opacity-100" : "opacity-0"
              }`}
            >
              MÜHENDİSLİK
            </span>
          </h1>
          <p
            className={`text-xl md:text-2xl text-secondary-light transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Kalite ve Güvenilirlik Bizim İşimiz
          </p>
        </div>
      </div>

      <div
        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "400ms" }}
      >
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              currentImage === idx ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentImage(idx)}
          />
        ))}
      </div>
    </div>
  );
};
