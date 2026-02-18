"use client";

import { Question, AnswerOption } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: string;
  onAnswerSelect: (answerId: string) => void;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect,
}: QuestionCardProps) {
  const [hoveredAnswer, setHoveredAnswer] = useState<string | null>(null);
  const [pressedAnswer, setPressedAnswer] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="prevent-shift"
    >
      <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-2 shadow-xl">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <h2 className="text-fluid-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center text-foreground text-armenian leading-tight">
            {question.text}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {question.options.map((option, index) => (
              <motion.button
                key={option.id}
                onClick={() => onAnswerSelect(option.id)}
                onMouseEnter={() => setHoveredAnswer(option.id)}
                onMouseLeave={() => {
                  setHoveredAnswer(null);
                  setPressedAnswer(null);
                }}
                onTouchStart={() => setPressedAnswer(option.id)}
                onTouchEnd={() => setPressedAnswer(null)}
                className={cn(
                  "w-full text-left p-4 sm:p-5 rounded-lg border-2 transition-all duration-200 touch-target",
                  "active:scale-[0.98] active:shadow-md",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  selectedAnswer === option.id
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : pressedAnswer === option.id || hoveredAnswer === option.id
                    ? "bg-accent border-accent shadow-sm"
                    : "bg-background border-border"
                )}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                aria-pressed={selectedAnswer === option.id}
                aria-label={`Պատասխանել՝ ${option.text}`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={cn(
                      "w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5",
                      selectedAnswer === option.id
                        ? "border-primary-foreground bg-primary-foreground/20"
                        : "border-current"
                    )}
                  >
                    {selectedAnswer === option.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-primary-foreground"
                      />
                    )}
                  </div>
                  <span className="text-base sm:text-lg font-medium text-armenian flex-1 leading-relaxed">
                    {option.text}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
