import { useState } from "react";
// 💡 Improvement 1: Import verses from a data file for cleaner structure
import { verses } from "../data/quranVerses";

function getVerseForToday() {
  // 💡 Improvement 2: Use UTC date for consistent "day" across all users
  const now = new Date();

  // Calculate day of year based on UTC midnight
  const startOfYear = new Date(Date.UTC(now.getFullYear(), 0, 1));
  const todayUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

  const diff = todayUTC - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const verseIndex = dayOfYear % verses.length;
  return verses[verseIndex];
}

// --- Hook: Verse of the Day ---
export function useVerseOfTheDay() {
  const [verse] = useState(getVerseForToday);

  return verse;
}
