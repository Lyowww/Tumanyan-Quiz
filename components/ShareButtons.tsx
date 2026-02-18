"use client";

import { Button } from "@/components/ui/button";
import { Share2, Facebook, Twitter, Link2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ShareButtonsProps {
  characterName: string;
  workTitle?: string;
  percentage: number;
}

export function ShareButtons({ characterName, workTitle, percentage }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareText = workTitle
    ? `Ես ${characterName} եմ (${workTitle}) — ${percentage}% համապատասխանություն։ Ո՞ր Թումանյանի հերոսն ես դու։`
    : `Ես ${characterName} եմ ${percentage}% համապատասխանությամբ։ Հովհաննես Թումանյանի ո՞ր հերոսն ես։`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Հովհաննես Թումանյանի ո՞ր հերոսն ես",
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    }
  };

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  const hasNativeShare = typeof navigator !== "undefined" && navigator.share;

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-2">
      {hasNativeShare && (
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto"
        >
          <Button 
            onClick={handleShare} 
            variant="outline" 
            className="gap-2 touch-target w-full sm:w-auto text-sm sm:text-base px-3 sm:px-4"
          >
            <Share2 className="h-4 w-4 flex-shrink-0" />
            <span className="text-armenian">Կիսվել</span>
          </Button>
        </motion.div>
      )}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto"
      >
        <Button
          onClick={handleCopy}
          variant="outline"
          className="gap-2 touch-target w-full sm:w-auto text-sm sm:text-base px-3 sm:px-4"
        >
          <Link2 className="h-4 w-4 flex-shrink-0" />
          <span className="text-armenian">{copied ? "Պատճենված է!" : "Պատճենել հղումը"}</span>
        </Button>
      </motion.div>
    </div>
  );
}
