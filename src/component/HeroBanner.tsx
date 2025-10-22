'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'Latest Exclusive Summer Collection',
    subtitle: '30% off sale',
    image:
      'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/banner/11.jpg',
  },
  {
    id: 2,
    title: 'Latest Exclusive Summer Collection',
    subtitle: '30% off sale',
    image:
      'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/6.jpg',
  },
  {
    id: 3,
    title: 'Latest Exclusive Summer Collection',
    subtitle: '30% off sale',
    image:
      'https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/5.jpg',
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative my-10">
      {/* 🔧 ঘূর্ণায়মান Settings আইকন */}
      <motion.div
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'linear',
        }}
      >
        <button className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 text-white shadow-md">
          <Settings className="h-5 w-5" />
        </button>
      </motion.div>

      {/* 🎞️ স্লাইডার */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl container mx-auto">
        <AnimatePresence mode="wait">
          {slides.map(
            (slide, index) =>
              index === current && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  {/* ব্যাকগ্রাউন্ড ইমেজ */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* টেক্সট */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                    className="relative z-20 flex flex-col justify-center h-full px-6 md:px-16 max-w-lg text-white"
                  >
                    <p className="text-green-400 text-lg mb-2">{slide.subtitle}</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <Link
                      href="#"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300"
                    >
                      Shop Now &raquo;
                    </Link>
                  </motion.div>
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* ◀️ পূর্ববর্তী বাটন */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-30 bg-white/70 hover:bg-white text-black rounded-full p-3 shadow-md transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* ▶️ পরবর্তী বাটন */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 z-30 bg-white/70 hover:bg-white text-black rounded-full p-3 shadow-md transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* ⚪ স্লাইড ডট */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                idx === current ? 'bg-white' : 'bg-white/40'
              }`}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
