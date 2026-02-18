import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Էջը չի գտնվել</h2>
        <p className="text-muted-foreground mb-8">
          Ներողություն, այս էջը գոյություն չունի կամ տեղափոխվել է:
        </p>
        <Link href="/">
          <Button size="lg">Վերադառնալ գլխավոր էջ</Button>
        </Link>
      </div>
    </div>
  );
}
