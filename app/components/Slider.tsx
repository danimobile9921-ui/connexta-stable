"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  text: string;
}

const slides: Slide[] = [
  { src: "/images/sliderlove.jpg", text: "Chat and meet your dream partner." },
  { src: "/images/sliderfriends.jpg", text: "Discover and make new friends around the world." },
  { src: "/images/sliderads.jpg", text: "Check out ads, sales, and marketing opportunities." },
  { src: "/images/slidergames.jpg", text: "Play exciting games with friends." },
  { src: "/images/slidertravel.jpg", text: "Find your perfect travel destination." },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // menja sliku svakih 5 sekundi
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.text}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold">{slide.text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
