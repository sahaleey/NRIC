import { useState, useEffect } from "react";

// --- Our list of verses ---
// In a real app, this could come from a JSON file or an API
const verses = [
  {
    text: "Read! In the name of your Lord who created.",
    surah: "Al-'Alaq, 96:1",
  },
  {
    text: "And He taught Adam the names - all of them.",
    surah: "Al-Baqarah, 2:31",
  },
  {
    text: "Are those who know equal to those who do not know?",
    surah: "Az-Zumar, 39:9",
  },
  {
    text: "So whoever does an atom's weight of good will see it.",
    surah: "Az-Zalzalah, 99:7",
  },
];

export function useVerseOfTheDay() {
  const [verse, setVerse] = useState(null);

  useEffect(() => {
    // Get day of the year (0-365)
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Use modulo to pick a verse for the day
    const verseIndex = dayOfYear % verses.length;
    setVerse(verses[verseIndex]);
  }, []);

  return verse;
}
