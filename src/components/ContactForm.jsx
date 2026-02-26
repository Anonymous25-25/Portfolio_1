import React, { useEffect } from "react";
import gsap from "gsap";

const ContactForm = () => {

  useEffect(() => {
    const btn = document.querySelector(".magnetic-btn");
    if (!btn) return;

    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    });
  }, []);

  return (
    <form className="space-y-6">

      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 outline-none"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 outline-none"
      />

      <textarea
        rows="5"
        placeholder="Your Message"
        className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 outline-none"
      ></textarea>

      <button
        type="submit"
        className="magnetic-btn relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]"
      >
        <span className="relative z-10">Send Message</span>
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-300"></span>
      </button>

    </form>
  );
};

export default ContactForm;