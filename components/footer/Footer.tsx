import React from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-secondary/20 backdrop-blur-sm text-secondary-light py-4 px-4 sm:py-6 shadow-lg mt-8 border-t border-secondary/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <IoHome className="text-xl text-primary-light" />
            <p className="text-secondary-light hover:text-primary-light transition-colors">
              Serhat Mah. 1452. Sk. No:9, İvedik OSB/Ankara
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-center gap-2">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl text-primary-light" />
            <p className="text-secondary-light hover:text-primary-light transition-colors">
              +90 312 394 56 77
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IoIosTime className="text-xl text-primary-light" />
            <p className="text-secondary-light hover:text-primary-light transition-colors">
              Pzt-Cmt: 08:30 - 18:30
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-6">
          <a
            href="#"
            className="text-primary-light hover:text-primary transition-colors duration-300"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="#"
            className="text-primary-light hover:text-primary transition-colors duration-300"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="#"
            className="text-primary-light hover:text-primary transition-colors duration-300"
          >
            <FaFacebookSquare className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="text-center mt-4 text-sm text-secondary-light/80">
        © 2025 URAS TASARIM VE MÜHENDİSLİK. Tüm hakları saklıdır.
      </div>
    </div>
  );
};

export default Footer;
