"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Confetti() {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"];
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
    }));
    setConfetti(newConfetti);

    const timer = setTimeout(() => {
      setConfetti([]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full"
          style={{
            left: `${item.x}%`,
            backgroundColor:
              ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"][
                item.id % 5
              ],
          }}
          initial={{ y: item.y, x: 0, rotate: 0, opacity: 1 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 100 : 1000,
            x: (Math.random() - 0.5) * 200,
            rotate: 360,
            opacity: 0,
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
