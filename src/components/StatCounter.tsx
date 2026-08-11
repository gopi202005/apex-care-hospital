import React, { useState, useEffect, useRef } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

interface StatCounterProps {
  stats: Stat[];
}

export const StatCounter: React.FC<StatCounterProps> = ({ stats }) => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const duration = 1500;
            const steps = 30;
            const stepTime = duration / steps;
            const increment = stat.value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.floor(current);
                return next;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [stats, hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50"
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="text-center p-3 sm:p-4 rounded-2xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
        >
          <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-gradient">
            {counts[idx]}
            {stat.suffix}
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
