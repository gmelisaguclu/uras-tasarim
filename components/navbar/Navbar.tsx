"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClassName = (path: string) => {
    const baseClass =
      "relative transition-all duration-300 hover:text-secondary-light";
    const activeClass = `${baseClass} text-primary-light after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-primary-light after:rounded-full`;
    return pathname === path ? activeClass : baseClass;
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-6 py-3 h-20 my-4">
        <div className="flex items-center gap-3">
          <div className="relative w-20 h-20">
            <Image
              src="/image/ret_logo-1-300x130.png"
              alt="Uras Tasarım Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-left font-bold md:text-base text-xl text-primary">
            URAS TASARIM VE MÜHENDİSLİK
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-primary hover:text-primary-light transition-colors duration-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/home" className={getLinkClassName("/home")}>
            Anasayfa
          </Link>
          <Link href="/about" className={getLinkClassName("/about")}>
            Hakkımızda
          </Link>
          <Link href="/services" className={getLinkClassName("/services")}>
            Hizmetlerimiz
          </Link>
          <Link href="/machines" className={getLinkClassName("/machines")}>
            Makinelerimiz
          </Link>
          <Link href="/photos" className={getLinkClassName("/photos")}>
            Galeri
          </Link>
          <Link
            href="/communication"
            className={`${getLinkClassName(
              "/communication"
            )} bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg transition-all duration-300`}
          >
            İletişim
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute z-50 right-0 top-[88px] w-64 bg-white text-primary rounded-xl shadow-lg md:hidden border border-secondary/20">
          <div className="flex flex-col py-4">
            {[
              { href: "/home", label: "Anasayfa" },
              { href: "/about", label: "Hakkımızda" },
              { href: "/services", label: "Hizmetlerimiz" },
              { href: "/machines", label: "Makinelerimiz" },
              { href: "/photos", label: "Galeri" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${getLinkClassName(
                  link.href
                )} px-6 py-3 hover:bg-secondary/10`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/communication"
              className="mx-6 mt-4 text-center bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg transition-all duration-300"
              onClick={toggleMenu}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
