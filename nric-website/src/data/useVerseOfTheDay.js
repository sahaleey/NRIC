import { useState } from "react";

// --- Quran Verses (30 total) ---
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
  { text: "Indeed, with hardship [will be] ease.", surah: "Ash-Sharh, 94:6" },
  { text: "And He found you lost and guided [you].", surah: "Ad-Duhaa, 93:7" },
  {
    text: "Indeed, Allah does not burden a soul beyond that it can bear.",
    surah: "Al-Baqarah, 2:286",
  },
  {
    text: "And We have certainly made the Quran easy to remember, so is there any who will remember?",
    surah: "Al-Qamar, 54:17",
  },
  {
    text: "And your Lord is going to give you, and you will be satisfied.",
    surah: "Ad-Duhaa, 93:5",
  },
  { text: "So remember Me; I will remember you.", surah: "Al-Baqarah, 2:152" },
  {
    text: "And He gives you of all that you ask of Him.",
    surah: "Ibrahim, 14:34",
  },
  {
    text: "And whoever puts their trust in Allah – then He is sufficient for them.",
    surah: "At-Talaq, 65:3",
  },
  {
    text: "And do not lose hope in the mercy of Allah.",
    surah: "Az-Zumar, 39:53",
  },
  {
    text: "Indeed, prayer prohibits immorality and wrongdoing.",
    surah: "Al-Ankabut, 29:45",
  },
  { text: "And Allah loves the doers of good.", surah: "Al-Baqarah, 2:195" },
  {
    text: "Verily, in the remembrance of Allah do hearts find rest.",
    surah: "Ar-Ra’d, 13:28",
  },
  {
    text: "So be patient. Indeed, the promise of Allah is truth.",
    surah: "Ar-Rum, 30:60",
  },
  { text: "Do good, as Allah has done good to you.", surah: "Al-Qasas, 28:77" },
  {
    text: "And whoever fears Allah – He will make for him a way out.",
    surah: "At-Talaq, 65:2",
  },
  {
    text: "Your ally is none but Allah and His Messenger.",
    surah: "Al-Ma’idah, 5:55",
  },
  { text: "And speak to people good words.", surah: "Al-Baqarah, 2:83" },
  {
    text: "Indeed, Allah is with those who fear Him and those who are doers of good.",
    surah: "An-Nahl, 16:128",
  },
  {
    text: "And whoever relies upon Allah – then He is sufficient for him.",
    surah: "At-Talaq, 65:3",
  },
  {
    text: "He created the night and the day, the sun and the moon.",
    surah: "Al-Anbiya, 21:33",
  },
  { text: "And Allah is the best of providers.", surah: "Al-Jumu'ah, 62:11" },
  {
    text: "And whoever is grateful, his gratitude is only for [the benefit of] himself.",
    surah: "Luqman, 31:12",
  },
  {
    text: "Indeed, Allah loves those who rely [upon Him].",
    surah: "Al-Imran, 3:159",
  },
  {
    text: "And He found you poor and made [you] self-sufficient.",
    surah: "Ad-Duhaa, 93:8",
  },
  { text: "And never give up hope of Allah’s mercy.", surah: "Yusuf, 12:87" },
  {
    text: "And We have certainly honored the children of Adam.",
    surah: "Al-Isra, 17:70",
  },
];

function getVerseForToday() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
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
