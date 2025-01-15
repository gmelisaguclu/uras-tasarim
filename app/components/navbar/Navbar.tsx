import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-white px-4 py-2 bg-zinc-800 h-20 rounded-lg my-4">
      <div className="text-left font-bold">URAS TASARIM VE MÜHENDİSLİK</div>

      <div className="flex gap-6 ">
        <Link href="/home" className="hover:text-zinc-500 hover:underline">
          Anasayfa
        </Link>
        <Link href="/about" className="hover:text-zinc-500 hover:underline">
          Hakkımızda
        </Link>
        <Link href="/services" className="hover:text-zinc-500 hover:underline">
          Hizmetlerimiz
        </Link>
        <Link href="/machines" className="hover:text-zinc-500 hover:underline">
          Makinelerimiz
        </Link>
        <Link href="/photos" className="hover:text-zinc-500 hover:underline">
          Galeri
        </Link>
        <Link
          href="/communication"
          className="hover:text-zinc-500 hover:underline"
        >
          İletişim
        </Link>
      </div>
    </div>
  );
};
