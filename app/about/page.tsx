"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Users, Heart } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { characters } from "@/data/characters";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden pb-safe-bottom">
      {/* Header */}
      <header className="w-full py-3 sm:py-4 mb-4 sm:mb-6 sticky-safe bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm border-b border-border/50">
        <div className="container-safe flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Button variant="ghost" className="gap-2 touch-target px-2 sm:px-4">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="hidden sm:inline text-armenian">Վերադառնալ</span>
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="container-safe py-8 sm:py-12 max-w-5xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-16 px-2 sm:px-0"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4 sm:mb-6"
          >
            <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto" />
          </motion.div>
          <h1 className="text-fluid-3xl sm:text-fluid-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-armenian">
            Հովհաննես Թումանյան
          </h1>
          <p className="text-fluid-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-armenian">
            Ամենայն հայոց բանաստեղծը (1869–1923) — ծնվել է Լոռու Դսեղ գյուղում, սովորել
            Ներսիսյան դպրոցում։ Պատմվածքներ, հեքիաթներ և պոեմներ են թողել, որոնց հերոսները
            մինչ օրս ապրում են մեր սրտերում։
          </p>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10 sm:mb-16 px-2 sm:px-0"
        >
          <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-2 shadow-xl">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-2xl sm:text-3xl mb-2 sm:mb-4 text-armenian">Կենսագրություն</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed p-4 sm:p-6 pt-0 text-armenian">
              <p>
                Հովհաննես Թադևոսի Թումանյանը ծնվել է 1869 թ. փետրվարի 19-ին Լոռվա Դսեղ գյուղում,
                հոգևորականի ընտանիքում։ Սովորել է Թիֆլիսի Ներսիսյան դպրոցում, ակտիվ
                հասարակական գործիչ էր, զբաղվել է նաև որբախնամ գործունեությամբ։
              </p>
              <p>
                Նա գրել է բանաստեղծություններ, պոեմներ, պատմվածքներ ու հեքիաթներ։
                Ստեղծագործությունները բնութագրվում են խոր զգացմունքայնությամբ,
                ժողովրդական իմաստությամբ և մարդկային արժեքների նկատմամբ անկեղծ նվիրվածությամբ։
              </p>
              <p>
                Մահացել է 1923 թ. մարտի 23-ին Մոսկվայում։ Նրա հերոսները — Գիքորը, Անուշը,
                Քաջ Նազարը, Կիկոսը, Փանոսը, Տերն ու Ծառան, Հուռին, Մարոն — դարձել են
                հայ գրականության անմահ կերպարներ։
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Characters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10 sm:mb-16 px-2 sm:px-0"
        >
          <h2 className="text-fluid-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-armenian">
            Հերոսներ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {characters.map((character, index) => (
              <motion.div
                key={character.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-2 shadow-lg h-full hover:shadow-xl transition-shadow prevent-shift">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-xl sm:text-2xl text-armenian">{character.name}</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-armenian">
                      {character.workTitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-sm sm:text-base text-muted-foreground line-clamp-4 text-armenian">
                      {character.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center px-2 sm:px-0"
        >
          <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-2 shadow-xl">
            <CardContent className="p-6 sm:p-12">
              <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-armenian">
                Պատրաստ ե՞ս բացահայտել քո հերոսին
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-armenian">
                Սկսիր հարցաշարը և գտիր, թե որ կերպարն է արտացոլում քո բնավորությունը:
              </p>
              <Link href="/quiz" className="inline-block">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto touch-target w-full sm:w-auto">
                  <span className="text-armenian">Սկսել հարցաշարը</span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
