import api from "./api";

/*
 * Normalize chapter data
 *
 * Supports different field names returned by the API.
 */
function normalizeChapter(chapter) {
  if (!chapter) {
    return null;
  }

  const number =
    chapter.number ??
    chapter.chapterNumber ??
    chapter.chapter ??
    chapter.chapterNo ??
    chapter.chapter_number ??
    "";

  return {
    ...chapter,

    number,
    chapterNumber: number,

    sanskritName:
      chapter.sanskritName ?? chapter.nameSanskrit ?? chapter.sanskrit ?? "",

    nameSanskrit:
      chapter.nameSanskrit ?? chapter.sanskritName ?? chapter.sanskrit ?? "",

    hindiName:
      chapter.hindiName ?? chapter.nameHindi ?? chapter.titleHindi ?? "",

    nameHindi:
      chapter.nameHindi ?? chapter.hindiName ?? chapter.titleHindi ?? "",

    englishName:
      chapter.englishName ?? chapter.nameEnglish ?? chapter.titleEnglish ?? "",

    nameEnglish:
      chapter.nameEnglish ?? chapter.englishName ?? chapter.titleEnglish ?? "",

    totalShlokas:
      chapter.totalShlokas ??
      chapter.shlokaCount ??
      chapter.totalVerses ??
      chapter.verses ??
      0,

    shlokaCount:
      chapter.shlokaCount ??
      chapter.totalShlokas ??
      chapter.totalVerses ??
      chapter.verses ??
      0,

    descriptionHindi:
      chapter.descriptionHindi ?? chapter.hindiDescription ?? "",

    descriptionEnglish:
      chapter.descriptionEnglish ?? chapter.englishDescription ?? "",
  };
}

/*
 * Normalize shloka data
 *
 * Supports different verse number field names.
 */
/*
 * Normalize shloka data
 */
function normalizeShloka(shloka) {
  if (!shloka) {
    return null;
  }

  const verseNumber =
    shloka.verseNumber ??
    shloka.number ??
    shloka.verse ??
    shloka.shlokaNumber ??
    shloka.verse_no ??
    null;

  return {
    ...shloka,

    // Always expose one reliable field to the frontend
    verseNumber: verseNumber,

    number: verseNumber,

    shlokaNumber: verseNumber,

    sanskrit: shloka.sanskrit ?? shloka.textSanskrit ?? shloka.text ?? "",

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

  const chapters =
    response.data?.data ?? response.data?.chapters ?? response.data ?? [];

  if (!Array.isArray(chapters)) {
    return [];
  }

  return chapters.map(normalizeChapter).filter(Boolean);
}

/*
 * Get one chapter
 */
export async function getChapter(chapterNumber) {
  const response = await api.get(`/chapters/${chapterNumber}`);

  const chapter =
    response.data?.data ?? response.data?.chapter ?? response.data;

  return normalizeChapter(chapter);
}

/*
 * Get all shlokas for a chapter
 */
export async function getShlokas(chapterNumber) {
  const response = await api.get(`/chapters/${chapterNumber}/shlokas`);

  const shlokas =
    response.data?.data ?? response.data?.shlokas ?? response.data ?? [];

  if (!Array.isArray(shlokas)) {
    return [];
  }

  return shlokas.map(normalizeShloka).filter(Boolean);
}

/*
 * Get one shloka
 */
export async function getShloka(chapterNumber, shlokaNumber) {
  const response = await api.get(
    `/chapters/${chapterNumber}/shlokas/${shlokaNumber}`,
  );

  const shloka = response.data?.data ?? response.data?.shloka ?? response.data;

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

  const results =
    response.data?.data ?? response.data?.shlokas ?? response.data ?? [];

  if (!Array.isArray(results)) {
    return [];
  }

  return results.map(normalizeShloka).filter(Boolean);
}
