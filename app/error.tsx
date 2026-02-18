"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">500</h1>
        <h2 className="text-2xl font-semibold mb-4">Սխալ է տեղի ունեցել</h2>
        <p className="text-muted-foreground mb-8">
          Ներողություն, ինչ-որ բան սխալ է գնացել: Խնդրում ենք փորձել ավելի ուշ:
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} size="lg">
            Կրկին փորձել
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg">
              Գլխավոր էջ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
