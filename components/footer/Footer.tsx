import React from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaEnvelope,
} from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-secondary/20 backdrop-blur-sm text-secondary-light py-8 px-4 sm:py-12 shadow-lg mt-8 border-t border-secondary/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* İletişim Bilgileri */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-primary-light font-semibold text-lg mb-2">
              İletişim
            </h3>
            <div className="flex items-start gap-3 group">
              <IoHome className="text-xl text-primary-light mt-1 group-hover:text-primary transition-colors" />
              <p className="text-secondary-light group-hover:text-primary-light transition-colors">
                Serhat Mah. 1452. Sk. No:9,
                <br />
                İvedik OSB/Ankara
              </p>
            </div>
            <div className="flex items-center gap-3 group">
              <FaPhoneAlt className="text-xl text-primary-light group-hover:text-primary transition-colors" />
              <a
                href="tel:+903123945677"
                className="text-secondary-light group-hover:text-primary-light transition-colors"
              >
                +90 312 394 56 77
              </a>
            </div>
          </div>

          {/* Çalışma Saatleri */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-primary-light font-semibold text-lg mb-2">
              Çalışma Saatleri
            </h3>

            <div className="flex items-center gap-3 group">
              <IoIosTime className="text-xl text-primary-light group-hover:text-primary transition-colors" />
              <div className="text-secondary-light">
                <p className="group-hover:text-primary-light transition-colors">
                  Pazartesi - Cumartesi
                </p>
                <p className="text-sm text-secondary-light/80 group-hover:text-primary-light/80 transition-colors">
                  08:30 - 18:30
                </p>
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="text-primary-light font-semibold text-lg mb-2">
              Sosyal Medya
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="text-primary-light hover:text-primary transform hover:scale-110 transition-all duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-primary-light hover:text-primary transform hover:scale-110 transition-all duration-300"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-primary-light hover:text-primary transform hover:scale-110 transition-all duration-300"
              >
                <FaFacebookSquare className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/10 mt-8 pt-6">
          <div className="text-center text-sm text-secondary-light/80">
            <p className="mb-2">© 2025 URAS TASARIM VE MÜHENDİSLİK</p>
            <p className="text-xs">Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
