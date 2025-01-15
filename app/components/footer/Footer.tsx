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
    <div className="bg-zinc-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-3">
          <IoHome className="text-2xl" />
          <p>
            Serhat Mahallesi, 1452. Sk. No:9, 06378 İvedik
            Osb/Yenimahalle/Ankara
          </p>
        </div>

        <div className="flex flex-col items-center md:items-center gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl" />
            <p>+90 312 394 56 77</p>
          </div>
          <div className="flex items-center gap-2">
            <IoIosTime className="text-xl" />
            <p>Pzt-Cmt: 08:30 - 18:30</p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-6">
          <a href="#" className="hover:text-gray-400">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaFacebookSquare className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-400">
        © 2025 URAS TASARIM VE MÜHENDİSLİK. Tüm hakları saklıdır.
      </div>
    </div>
  );
};

export default Footer;
