import React from "react";
import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-black-300/40 border-t border-white/10 py-14 px-5">

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">

        {/* Name & Positioning */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            BlackSide Security
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Youness Boussedari — Cybersecurity Engineer | Offensive Security Specialist
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl">
          {footerIconsList.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="opacity-70 hover:opacity-100 transition duration-300"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>

        {/* Direct Email */}
        <div>
          <a
            href="mailto:black1black234b@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition text-sm"
          >
            black1black234b@gmail.com
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          &copy; 2026 BlackSide Security · Youness Boussedari. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
