import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Ո՞ր Հովհաննես Թումանյանի հերոսն ես դու",
  description:
    "Գտիր, թե որ հերոսն ես դու Հովհաննես Թումանյանի գրական ստեղծագործություններից: Խաղա մեր հարցաշարը և բացահայտիր քո անձնային համապատասխանությունը:",
  keywords: [
    "Թումանյան",
    "Հովհաննես Թումանյան",
    "հերոս",
    "քվիզ",
    "անձնային հարցաշար",
    "Գիկոր",
    "Անուշ",
    "Քաջ Նազար",
    "Կիկոս",
  ],
  authors: [{ name: "Tumanyan Quiz" }],
  openGraph: {
    title: "Ո՞ր Հովհաննես Թումանյանի հերոսն ես դու",
    description:
      "Գտիր, թե որ հերոսն ես դու Հովհաննես Թումանյանի գրական ստեղծագործություններից",
    type: "website",
    locale: "hy_AM",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ո՞ր Հովհաննես Թումանյանի հերոսն ես դու",
    description:
      "Գտիր, թե որ հերոսն ես դու Հովհաննես Թումանյանի գրական ստեղծագործություններից",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
  mobileWebApp: {
    capable: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hy" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
