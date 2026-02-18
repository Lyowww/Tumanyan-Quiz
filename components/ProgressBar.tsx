"use client";

import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full space-y-1.5 sm:space-y-2 prevent-shift">
      <div className="flex justify-between text-xs sm:text-sm text-muted-foreground text-armenian">
        <span>Պրոգրես</span>
        <span>{progress}%</span>
      </div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Progress value={progress} className="h-1.5 sm:h-2" />
      </motion.div>
    </div>
  );
}
