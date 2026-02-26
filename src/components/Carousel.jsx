import { useState, useRef, useEffect } from "react";
import { slides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AUTO_PLAY_DELAY = 2000;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  // 🎬 Cinematic GSAP Animation
  useGSAP(() => {
    if (!trackRef.current) return;

    gsap.to(trackRef.current, {
      xPercent: -currentSlide * 100,
      duration: 1.2,
      ease: "power4.inOut", // Apple-style smooth curve
    });

    gsap.fromTo(
      ".slide-image",
      { scale: 1.1 },
      {
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );
  }, [currentSlide]);

  // ▶️ Auto Play
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(autoPlayRef.current);
  }, []);

  // ⏸ Pause on hover
  const handleMouseEnter = () => {
    clearInterval(autoPlayRef.current);
  };

  const handleMouseLeave = () => {
    autoPlayRef.current = setInterval(nextSlide, AUTO_PLAY_DELAY);
  };

  // 🖐 Drag / Swipe
  const handleDragStart = (e) => {
    isDragging.current = true;
    startX.current = e.type.includes("mouse")
      ? e.clientX
      : e.touches[0].clientX;
  };

  const handleDragEnd = (e) => {
    if (!isDragging.current) return;

    const endX = e.type.includes("mouse")
      ? e.clientX
      : e.changedTouches[0].clientX;

    const diff = startX.current - endX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slider Container */}
      <div
        className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {/* Slider Track */}
        <div ref={trackRef} className="flex">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-shrink-0 relative group"
            >
              {/* Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="slide-image w-full h-[60vh] object-cover transition duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Info Bar */}
              <div className="absolute bottom-0 left-0 w-full px-6 py-5 backdrop-blur-md bg-black/60 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm opacity-60">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-2xl font-semibold">
                      {slide.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden md:block text-cyan-400">
                      Preview
                    </span>
                    <img
                      src="/images/arrowupright.svg"
                      alt="arrow"
                      className="w-6 h-6 group-hover:translate-x-1 transition"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-end gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition active:scale-90"
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition active:scale-90"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;