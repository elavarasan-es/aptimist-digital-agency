import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  delay?: number; // delay before starting animation
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 0 }) => {
  const [visibleLetters, setVisibleLetters] = useState<boolean[]>([]);

  useEffect(() => {
    setVisibleLetters(new Array(text.length).fill(false));

    text.split('').forEach((_, i) => {
      setTimeout(() => {
        setVisibleLetters(prev => {
          const newVisible = [...prev];
          newVisible[i] = true;
          return newVisible;
        });
      }, delay + i * 50); // 50ms per letter delay
    });
  }, [text, delay]);

  return (
    <p className="text-lg md:text-[35px] w-full font-pacifico font-semibold flex flex-wrap">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-300 ease-out
            ${visibleLetters[i] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
          `}
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </p>
  );
};

const ParticlesContent = () => {
  const lines = [
    "You've come to the right place.",
    "How can we help your",
    "Bussiness grow?"
  ];

  return (
    <div className="relative z-10 flex flex-col items-start justify-center text-white text-left px-8 space-y2 md:space-y-4">
      {lines.map((line, idx) => (
        <AnimatedText key={idx} text={line} delay={idx * 1000} />
      ))}
    </div>
  );
};

export default ParticlesContent;
