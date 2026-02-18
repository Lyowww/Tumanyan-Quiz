"use client";

import { Character } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";
import Image from "next/image";

function getGradientColors(gradient: string): { from: string; to: string } {
  const gradientMap: { [key: string]: { from: string; to: string } } = {
    "from-amber-600 to-orange-700": { from: "#d97706", to: "#c2410c" },
    "from-amber-500 to-yellow-600": { from: "#f59e0b", to: "#ca8a04" },
    "from-blue-600 to-indigo-700": { from: "#2563eb", to: "#4338ca" },
    "from-emerald-600 to-teal-700": { from: "#059669", to: "#0f766e" },
    "from-green-500 to-emerald-600": { from: "#22c55e", to: "#059669" },
    "from-orange-500 to-amber-600": { from: "#f97316", to: "#d97706" },
    "from-yellow-500 to-amber-500": { from: "#eab308", to: "#f59e0b" },
    "from-pink-600 to-rose-700": { from: "#db2777", to: "#be185d" },
    "from-violet-600 to-purple-700": { from: "#7c3aed", to: "#6d28d9" },
    "from-pink-500 to-rose-600": { from: "#ec4899", to: "#e11d48" },
    "from-green-400 to-emerald-500": { from: "#4ade80", to: "#10b981" },
    "from-blue-500 to-cyan-600": { from: "#3b82f6", to: "#0891b2" },
    "from-purple-500 to-indigo-600": { from: "#a855f7", to: "#4f46e5" },
  };
  return gradientMap[gradient] || { from: "#3b82f6", to: "#4f46e5" };
}

interface CharacterCardProps {
  character: Character;
  percentage: number;
  className?: string;
}

export function CharacterCard({
  character,
  percentage,
  className,
}: CharacterCardProps) {
  const colors = getGradientColors(character.gradient);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("w-full", className)}
    >
      <Card
        className={cn(
          "backdrop-blur-md bg-white/95 dark:bg-gray-900/95 border-2 shadow-2xl overflow-hidden",
          "ring-2 ring-offset-2 ring-offset-background dark:ring-offset-gray-900"
        )}
        style={{
          borderColor: character.color,
          boxShadow: `0 25px 50px -12px ${character.color}20, 0 0 0 1px ${character.color}15`,
        }}
      >
        <div
          className="h-1.5 bg-gradient-to-r"
          style={{
            background: `linear-gradient(to right, ${colors.from}, ${colors.to})`,
          }}
        />
        <CardHeader className="text-center pb-2 pt-4 sm:pt-6 px-4 sm:px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl flex items-center justify-center text-3xl sm:text-4xl font-bold text-white shadow-xl prevent-shift overflow-hidden"
            style={{
              background: character.image 
                ? undefined 
                : `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
            }}
          >
            {character.image ? (
              <Image
                src={character.image}
                alt={character.name}
                width={112}
                height={112}
                className="w-full h-full object-cover"
                priority
              />
            ) : (
              character.name.charAt(0)
            )}
          </motion.div>
          <CardTitle className="text-fluid-2xl sm:text-3xl md:text-4xl mb-1 text-armenian">
            {character.name}
          </CardTitle>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2 sm:mb-3 px-2">
            <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-armenian">{character.workTitle}</span>
          </div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 text-base sm:text-lg font-semibold text-armenian"
            style={{
              background: `linear-gradient(135deg, ${character.color}22, ${character.color}11)`,
              color: character.color,
            }}
          >
            {percentage}% համապատասխանություն
          </div>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 pt-2 px-4 sm:px-6">
          <p className="text-center text-sm sm:text-base leading-relaxed text-foreground/90 text-armenian">
            {character.explanation}
          </p>
          <p className="text-center text-xs sm:text-sm leading-relaxed text-muted-foreground text-armenian">
            {character.description}
          </p>

          <div className="border-t border-border pt-4 space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-base sm:text-lg text-armenian">Անձնային հատկանիշներ</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {character.personality.map((trait, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + index * 0.05 }}
                  className="flex items-start gap-2 text-sm sm:text-base text-armenian"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                    style={{ backgroundColor: character.color }}
                  />
                  <span>{trait}</span>
                </motion.li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-2 text-green-600 dark:text-green-400 text-armenian">
                  Ուժեղ կողմեր
                </h4>
                <ul className="space-y-1">
                  {character.strengths.map((s, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="flex items-start gap-2 text-xs sm:text-sm text-armenian"
                    >
                      <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                      <span>{s}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-2 text-amber-600 dark:text-amber-400 text-armenian">
                  Թույլ կողմեր
                </h4>
                <ul className="space-y-1">
                  {character.weaknesses.map((w, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      className="flex items-start gap-2 text-xs sm:text-sm text-armenian"
                    >
                      <span className="text-amber-500 flex-shrink-0 mt-0.5">○</span>
                      <span>{w}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
