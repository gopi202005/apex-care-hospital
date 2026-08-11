import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { PatientTestimonial } from '../types';

interface TestimonialsCarouselProps {
  testimonials: PatientTestimonial[];
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const active = testimonials[currentIndex];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center mx-auto border border-brand-400/30">
          <Quote className="w-6 h-6" />
        </div>

        <div className="flex items-center justify-center gap-1 text-amber-400">
          {[...Array(active.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400" />
          ))}
        </div>

        <p className="text-sm sm:text-lg font-medium text-slate-200 leading-relaxed italic">
          "{active.comment}"
        </p>

        <div className="pt-4 flex flex-col items-center justify-center gap-2">
          <img
            src={active.avatar}
            alt={active.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-brand-500 shadow-md"
          />

          <div>
            <h4 className="font-bold text-base text-white">{active.name}</h4>
            <p className="text-xs text-brand-300 font-medium">
              {active.treatment} • {active.department} Department ({active.location})
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Patient Review • Attended by {active.doctorName}</span>
            </p>
          </div>
        </div>

        {/* Slide navigation controls */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-6 bg-brand-400' : 'w-2 bg-slate-700'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
