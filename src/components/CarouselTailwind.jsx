// src/components/CarouselTailwind.jsx
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 📸 Replace these imports with your own image paths
import Img1 from "../assets/gaming-laptop.jpg";
import Img2 from "../assets/business-laptop.webp";
import Img3 from "../assets/student laptops.avif";   // keep the space if your file is named that way

/* --------------------------------------------------
   Slide data – tweak titles, subtitles, or add more
-------------------------------------------------- */
const slides = [
  { src: Img1, title: "Gaming Laptops 2025",  subtitle: "New Arrival" },
  { src: Img2, title: "Business Laptops",     subtitle: "New Arrival" },
  { src: Img3, title: "Laptop for Students",  subtitle: "New Arrival" },
];

/* --------------------------------------------------
   Carousel component
-------------------------------------------------- */
export default function CarouselTailwind({
  autoSlide        = true,   // turn off by passing autoSlide={false}
  autoSlideInterval = 5000,  // ms between slides
}) {
  const [curr, setCurr] = useState(0);
  const timer = useRef();

  /* ---------- navigation helpers ---------- */
  const next = () => setCurr((i) => (i === slides.length - 1 ? 0 : i + 1));
  const prev = () => setCurr((i) => (i === 0 ? slides.length - 1 : i - 1));

  /* ---------- autoplay logic ---------- */
  useEffect(() => {
    if (!autoSlide) return;
    timer.current = setTimeout(next, autoSlideInterval);
    return () => clearTimeout(timer.current);
  }, [curr, autoSlide, autoSlideInterval]);

  /* ---------- markup ---------- */
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg group">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map(({ src, title, subtitle }) => (
          <div
            key={title}
            className="shrink-0 w-full h-[500px] md:h-[600px] relative"
          >
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover"
              draggable="false"
            />

            {/* Caption */}
            <div className="absolute inset-0 bg-black/35 md:bg-black/40 flex flex-col justify-end px-6 pb-14">
              <h5 className="text-3xl md:text-5xl font-light text-white">
                {title}
              </h5>
              <p className="text-xl md:text-2xl font-semibold text-indigo-100">
                {subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 -translate-y-1/2 left-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 md:opacity-100 transition"
      >
        <ChevronLeft size={28} />
        <span className="sr-only">Previous slide</span>
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 -translate-y-1/2 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 md:opacity-100 transition"
      >
        <ChevronRight size={28} />
        <span className="sr-only">Next slide</span>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurr(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              curr === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

