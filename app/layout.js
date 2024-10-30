import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "VerseVibe - Unleashing Stories, One Verse at a Time",
  description:
    "VerseVibe is your destination for vibrant storytelling and insightful perspectives. Dive into curated articles, unique insights, and stories that resonate. Discover the rhythm of words with VerseVibe!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${outfit.className}`}>{children}</body>
    </html>
  );
}
