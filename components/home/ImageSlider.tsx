"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/image/homeimg.jpg",
  "/image/homeimg2.jpg",
  "/image/homeimg3.jpg",
];

export const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          fill
          className="object-cover transition-all duration-1000"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            URAS TASARIM VE MÜHENDİSLİK
          </h1>
          <p className="text-xl md:text-2xl">
            Kalite ve Güvenilirlik Bizim İşimiz
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
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
