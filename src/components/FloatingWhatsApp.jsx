import React from "react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/918384818914?text=Hi%20Saurav,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project.%20Here%20are%20some%20brief%20details:"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-6 h-6"
      >
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.2 32l8.3-2.2c2.3 1.2 4.8 1.9 7.5 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.6c-2.4 0-4.7-.6-6.8-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2.1-1.9-4.5-1.9-6.9C3 9 9 3 16 3s13 6 13 13-6 13-13 13zm7.2-9.6c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2s-1 1.2-1.2 1.4c-.2.2-.5.3-.9.1-2.6-1.3-4.3-2.4-6-5.4-.4-.6.4-.6 1.2-2 .1-.2 0-.5-.1-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .4s-1.3 1.3-1.3 3.2 1.4 3.7 1.6 3.9c.2.2 2.7 4.2 6.6 5.9.9.4 1.6.7 2.2.9.9.3 1.7.3 2.3.2.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;