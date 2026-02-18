"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { QuestionCard } from "@/components/QuestionCard";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import {
  getCurrentQuestion,
  getProgress,
  calculateScores,
  getResult,
  getTotalQuestions,
} from "@/lib/quiz-engine";
import { QuizState } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function QuizPage() {
  const router = useRouter();
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    scores: {},
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("quizState");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setQuizState(parsed);
      } catch (e) {
        console.error("Failed to load quiz state:", e);
      }
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("quizState", JSON.stringify(quizState));
  }, [quizState]);

  const currentQuestion = getCurrentQuestion(quizState.currentQuestionIndex);
  const progress = getProgress(quizState.currentQuestionIndex);
  const totalQuestions = getTotalQuestions();

  const handleAnswerSelect = (answerId: string) => {
    if (!currentQuestion) return;

    const newAnswers = {
      ...quizState.answers,
      [currentQuestion.id]: answerId,
    };

    const newScores = calculateScores(newAnswers);
    const currentIndex = quizState.currentQuestionIndex;

    setQuizState({
      ...quizState,
      answers: newAnswers,
      scores: newScores,
    });

    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentIndex < totalQuestions - 1) {
        setQuizState((prev) => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
        }));
      } else {
        // Quiz complete, navigate to result
        const result = getResult(newScores);
        router.push(`/result?character=${result.character.id}&score=${result.score}&percentage=${result.percentage}`);
      }
    }, 500);
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex < totalQuestions - 1) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }));
    }
  };

  const handleRestart = () => {
    if (confirm("Վստահ ե՞ս, որ ցանկանում ես վերագործարկել հարցաշարը:")) {
      localStorage.removeItem("quizState");
      setQuizState({
        currentQuestionIndex: 0,
        answers: {},
        scores: {},
      });
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Հարցաշարը ավարտված է</p>
          <Link href="/">
            <Button>Վերադառնալ գլխավոր էջ</Button>
          </Link>
        </div>
      </div>
    );
  }

  const selectedAnswer = quizState.answers[currentQuestion.id];
  const canGoNext = selectedAnswer !== undefined;
  const isLastQuestion = quizState.currentQuestionIndex === totalQuestions - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden pb-safe-bottom">
      {/* Sticky Header */}
      <header className="w-full py-3 sm:py-4 mb-4 sm:mb-6 sticky-safe bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm border-b border-border/50">
        <div className="container-safe flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Button variant="ghost" className="gap-2 touch-target px-2 sm:px-4">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="hidden sm:inline text-armenian">Վերադառնալ</span>
            </Button>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm text-muted-foreground text-armenian whitespace-nowrap">
              {quizState.currentQuestionIndex + 1} / {totalQuestions}
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container-safe max-w-3xl">
        {/* Sticky Progress Bar */}
        <div className="mb-4 sm:mb-6 sticky-safe-top bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm py-2 sm:py-3 -mx-4 px-4 sm:mx-0 sm:px-0 rounded-b-lg">
          <ProgressBar progress={progress} />
        </div>

        {/* Question Card */}
        <div className="mb-6 sm:mb-8">
          <AnimatePresence mode="wait">
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={handleAnswerSelect}
            />
          </AnimatePresence>
        </div>

        {/* Navigation - Sticky Bottom on Mobile */}
        <div className="sticky-bottom-safe bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm py-3 sm:py-4 -mx-4 px-4 sm:mx-0 sm:px-0 rounded-t-lg border-t border-border/50 sm:border-0 sm:static sm:bg-transparent sm:backdrop-blur-none sm:py-0">
          <div className="flex justify-between items-center gap-2 sm:gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={quizState.currentQuestionIndex === 0}
              className="gap-2 touch-target flex-1 sm:flex-initial text-sm sm:text-base px-3 sm:px-4"
            >
              <ArrowLeft className="h-4 w-4 flex-shrink-0" />
              <span className="text-armenian">Նախորդ</span>
            </Button>

            <Button
              variant="outline"
              onClick={handleRestart}
              className="text-muted-foreground touch-target text-xs sm:text-sm px-2 sm:px-4 text-armenian"
            >
              <span className="hidden sm:inline">Վերագործարկել</span>
              <span className="sm:hidden">Վերագործ.</span>
            </Button>

            {!isLastQuestion && (
              <Button
                onClick={handleNext}
                disabled={!canGoNext}
                className="gap-2 touch-target flex-1 sm:flex-initial text-sm sm:text-base px-3 sm:px-4"
              >
                <span className="text-armenian">Հաջորդ</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
