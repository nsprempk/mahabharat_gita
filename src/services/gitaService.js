import api from "./api";

/*
 * Normalize chapter data
 */
function normalizeChapter(chapter) {
  if (!chapter) {
    return null;
  }

  return {
    ...chapter,

    number: chapter.number ?? chapter.chapterNumber,

    chapterNumber: chapter.chapterNumber ?? chapter.number,

    sanskritName: chapter.sanskritName ?? chapter.nameSanskrit ?? "",

    nameSanskrit: chapter.nameSanskrit ?? chapter.sanskritName ?? "",

    hindiName: chapter.hindiName ?? chapter.nameHindi ?? "",

    nameHindi: chapter.nameHindi ?? chapter.hindiName ?? "",

    englishName: chapter.englishName ?? chapter.nameEnglish ?? "",

    nameEnglish: chapter.nameEnglish ?? chapter.englishName ?? "",

    totalShlokas: chapter.totalShlokas ?? chapter.shlokaCount ?? 0,

    shlokaCount: chapter.shlokaCount ?? chapter.totalShlokas ?? 0,

    descriptionHindi: chapter.descriptionHindi ?? "",

    descriptionEnglish: chapter.descriptionEnglish ?? "",
  };
}

/*
 * Normalize shloka data
 */
function normalizeShloka(shloka) {
  if (!shloka) {
    return null;
  }

  return {
    ...shloka,

    verseNumber: shloka.verseNumber ?? shloka.number ?? shloka.verse,

    sanskrit: shloka.sanskrit ?? shloka.textSanskrit ?? "",

    hindiMeaning:
      shloka.hindiMeaning ?? shloka.hindi ?? shloka.meaningHindi ?? "",

    englishMeaning:
      shloka.englishMeaning ?? shloka.english ?? shloka.meaningEnglish ?? "",
  };
}

/*
 * Get all chapters
 */
export async function getChapters() {
  const response = await api.get("/chapters");

  const chapters = response.data?.data || response.data?.chapters || [];

  return chapters.map(normalizeChapter);
}

/*
 * Get one chapter
 */
export async function getChapter(chapterNumber) {
  const response = await api.get(`/chapters/${chapterNumber}`);

  const chapter =
    response.data?.data || response.data?.chapter || response.data;

  return normalizeChapter(chapter);
}

/*
 * Get all shlokas for a chapter
 */
export async function getShlokas(chapterNumber) {
  const response = await api.get(`/chapters/${chapterNumber}/shlokas`);

  const shlokas = response.data?.data || response.data?.shlokas || [];

  return Array.isArray(shlokas) ? shlokas.map(normalizeShloka) : [];
}

/*
 * Get one shloka
 */
export async function getShloka(chapterNumber, shlokaNumber) {
  const response = await api.get(
    `/chapters/${chapterNumber}/shlokas/${shlokaNumber}`,
  );

  const shloka = response.data?.data || response.data?.shloka || response.data;

  return normalizeShloka(shloka);
}

/*
 * Search Gita
 */
export async function searchGita(query) {
  const response = await api.get("/shlokas/search", {
    params: {
      q: query,
    },
  });

  const results = response.data?.data || response.data?.shlokas || [];

  return Array.isArray(results) ? results.map(normalizeShloka) : [];
}
