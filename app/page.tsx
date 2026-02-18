"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
      <header className="w-full py-4 sm:py-6 sticky-safe bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm">
        <div className="container-safe flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
            <span className="text-lg sm:text-xl font-bold text-armenian">Թումանյան</span>
          </motion.div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container-safe py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 px-2 sm:px-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-fluid-3xl sm:text-fluid-4xl md:text-fluid-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-armenian leading-tight"
            >
              Հովհաննես Թումանյանի
              <br className="hidden sm:block" />
              <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0">ո՞ր հերոսն ես</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-fluid-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-armenian px-2 sm:px-0"
            >
              Բացահայտիր քո անձնային համապատասխանությունը Թումանյանի
              անմահ հերոսների հետ: Պատասխանիր 14 հոգեբանական հարցի և գտիր, թե որ
              կերպարն է արտացոլում քո բնավորությունը:
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-2 sm:pt-4 px-2 sm:px-0"
            >
              <Link href="/quiz" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto touch-target group"
                >
                  Սկսել հարցաշարը
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto touch-target"
                >
                  <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  Իմացիր ավելին
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 px-2 sm:px-0"
          >
            {[
              {
                icon: Sparkles,
                title: "14 հարց",
                description: "Հոգեբանորեն նշանակալի հարցեր",
              },
              {
                icon: BookOpen,
                title: "9 հերոս",
                description: "Թումանյանի իրական կերպարներ",
              },
              {
                icon: ArrowRight,
                title: "Արագ արդյունք",
                description: "Պատասխանիր և ստացիր արդյունքը",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="p-5 sm:p-6 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-border shadow-lg prevent-shift"
              >
                <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4 mx-auto" />
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-armenian">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground text-armenian">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Decorative elements - hidden on very small screens, reduced on mobile */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="hidden sm:block absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 sm:opacity-20 animate-blob"></div>
        <div className="hidden sm:block absolute top-40 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 sm:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="hidden md:block absolute -bottom-8 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 sm:opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}
