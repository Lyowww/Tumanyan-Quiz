"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CharacterCard } from "@/components/CharacterCard";
import { ShareButtons } from "@/components/ShareButtons";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("@/components/Confetti").then(mod => ({ default: mod.Confetti })), {
  ssr: false,
  loading: () => null,
});
import { characters } from "@/data/characters";
import { ArrowLeft, RotateCcw } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(true);

  const characterId = searchParams.get("character");
  const score = parseInt(searchParams.get("score") || "0");
  const percentage = parseInt(searchParams.get("percentage") || "0");

  const character = characters.find((c) => c.id === characterId) || characters[0];

  useEffect(() => {
    // Clear quiz state from localStorage
    localStorage.removeItem("quizState");
  }, []);

  const handleRestart = () => {
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden pb-safe-bottom">
      {showConfetti && <Confetti />}

      {/* Header */}
      <header className="w-full py-3 sm:py-4 mb-4 sm:mb-6 sticky-safe bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm border-b border-border/50">
        <div className="container-safe flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Button variant="ghost" className="gap-2 touch-target px-2 sm:px-4">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="hidden sm:inline text-armenian">Գլխավոր էջ</span>
              <span className="sm:hidden text-armenian">Գլխավոր</span>
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <div className="container-safe max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 px-2 sm:px-0"
        >
          <h1 className="text-fluid-3xl sm:text-fluid-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-armenian">
            Քո արդյունքը
          </h1>
          <p className="text-fluid-base sm:text-lg text-muted-foreground text-armenian">
            Դու նման ես այս Թումանյանի հերոսին
          </p>
        </motion.div>

        {/* Character Card */}
        <div className="mb-6 sm:mb-8 px-2 sm:px-0">
          <CharacterCard
            character={character}
            percentage={percentage}
          />
        </div>

        {/* Actions */}
        <div className="space-y-4 px-2 sm:px-0">
          <ShareButtons
            characterName={character.name}
            workTitle={character.workTitle}
            percentage={percentage}
          />

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              onClick={handleRestart}
              size="lg"
              variant="outline"
              className="gap-2 touch-target w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6"
            >
              <RotateCcw className="h-4 w-4 flex-shrink-0" />
              <span className="text-armenian">Վերագործարկել հարցաշարը</span>
            </Button>
            <Link href="/about" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 touch-target w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6"
              >
                <span className="text-armenian">Իմացիր ավելին Թումանյանի մասին</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4" />
          <p className="text-xl text-muted-foreground">Բեռնվում է արդյունքը...</p>
        </div>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}
