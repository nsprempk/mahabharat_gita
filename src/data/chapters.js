const chapters = [
  {
    number: 1,
    nameSanskrit: "अर्जुनविषादयोग",
    nameHindi: "अर्जुन विषाद योग",
    nameEnglish: "Arjuna Vishada Yoga",
    descriptionHindi:
      "अर्जुन के विषाद और युद्धभूमि में उत्पन्न मानसिक संघर्ष का वर्णन।",
    descriptionEnglish:
      "Arjuna's sorrow, confusion, and emotional struggle on the battlefield.",
    verses: 47,
  },
  {
    number: 2,
    nameSanskrit: "साङ्ख्ययोग",
    nameHindi: "सांख्य योग",
    nameEnglish: "Sankhya Yoga",
    descriptionHindi: "आत्मा, कर्म और जीवन के वास्तविक स्वरूप का ज्ञान।",
    descriptionEnglish:
      "Knowledge of the self, duty, action, and the nature of life.",
    verses: 72,
  },
  {
    number: 3,
    nameSanskrit: "कर्मयोग",
    nameHindi: "कर्म योग",
    nameEnglish: "Karma Yoga",
    descriptionHindi: "निष्काम कर्म और अपने कर्तव्य को पूर्ण करने का मार्ग।",
    descriptionEnglish:
      "The path of selfless action and performing one's duty.",
    verses: 43,
  },
  {
    number: 4,
    nameSanskrit: "ज्ञानकर्मसंन्यासयोग",
    nameHindi: "ज्ञान कर्म संन्यास योग",
    nameEnglish: "Jnana Karma Sannyasa Yoga",
    descriptionHindi: "ज्ञान, कर्म और भगवान के अवतार के रहस्य का वर्णन।",
    descriptionEnglish:
      "The wisdom of knowledge, action, and the divine purpose of incarnation.",
    verses: 42,
  },
  {
    number: 5,
    nameSanskrit: "कर्मसंन्यासयोग",
    nameHindi: "कर्म संन्यास योग",
    nameEnglish: "Karma Sannyasa Yoga",
    descriptionHindi: "कर्मयोग और कर्मसंन्यास के बीच संबंध का ज्ञान।",
    descriptionEnglish: "Understanding renunciation and selfless action.",
    verses: 29,
  },
  {
    number: 6,
    nameSanskrit: "आत्मसंयमयोग",
    nameHindi: "आत्मसंयम योग",
    nameEnglish: "Dhyana Yoga",
    descriptionHindi: "ध्यान, मन पर नियंत्रण और आत्म-साक्षात्कार का मार्ग।",
    descriptionEnglish:
      "The practice of meditation, control of the mind, and self-realization.",
    verses: 47,
  },
  {
    number: 7,
    nameSanskrit: "ज्ञानविज्ञानयोग",
    nameHindi: "ज्ञान विज्ञान योग",
    nameEnglish: "Jnana Vijnana Yoga",
    descriptionHindi: "भगवान के स्वरूप और उनकी दिव्य शक्तियों का ज्ञान।",
    descriptionEnglish:
      "Understanding the divine nature and powers of the Supreme.",
    verses: 30,
  },
  {
    number: 8,
    nameSanskrit: "अक्षरब्रह्मयोग",
    nameHindi: "अक्षर ब्रह्म योग",
    nameEnglish: "Akshara Brahma Yoga",
    descriptionHindi: "ब्रह्म, आत्मा और मृत्यु के समय भगवान के स्मरण का ज्ञान।",
    descriptionEnglish:
      "Knowledge of Brahman, the self, and remembrance of the Divine at death.",
    verses: 28,
  },
  {
    number: 9,
    nameSanskrit: "राजविद्याराजगुह्ययोग",
    nameHindi: "राजविद्या राजगुह्य योग",
    nameEnglish: "Raja Vidya Raja Guhya Yoga",
    descriptionHindi: "सर्वोच्च ज्ञान और परम गोपनीय आध्यात्मिक रहस्य।",
    descriptionEnglish:
      "The supreme knowledge and the most confidential spiritual wisdom.",
    verses: 34,
  },
  {
    number: 10,
    nameSanskrit: "विभूतियोग",
    nameHindi: "विभूति योग",
    nameEnglish: "Vibhuti Yoga",
    descriptionHindi: "भगवान की दिव्य विभूतियों और ऐश्वर्य का वर्णन।",
    descriptionEnglish: "The divine manifestations and glories of the Supreme.",
    verses: 42,
  },
  {
    number: 11,
    nameSanskrit: "विश्वरूपदर्शनयोग",
    nameHindi: "विश्वरूप दर्शन योग",
    nameEnglish: "Vishvarupa Darshana Yoga",
    descriptionHindi: "अर्जुन को भगवान के विराट विश्वरूप का दर्शन।",
    descriptionEnglish: "Arjuna's vision of the universal form of the Divine.",
    verses: 55,
  },
  {
    number: 12,
    nameSanskrit: "भक्तियोग",
    nameHindi: "भक्ति योग",
    nameEnglish: "Bhakti Yoga",
    descriptionHindi:
      "भक्ति और भगवान को प्राप्त करने के सरल आध्यात्मिक मार्ग का वर्णन।",
    descriptionEnglish:
      "The path of devotion and loving surrender to the Divine.",
    verses: 20,
  },
  {
    number: 13,
    nameSanskrit: "क्षेत्रक्षेत्रज्ञविभागयोग",
    nameHindi: "क्षेत्र क्षेत्रज्ञ विभाग योग",
    nameEnglish: "Kshetra Kshetrajna Vibhaga Yoga",
    descriptionHindi: "शरीर, आत्मा और प्रकृति के वास्तविक स्वरूप का ज्ञान।",
    descriptionEnglish:
      "Understanding the body, the self, nature, and consciousness.",
    verses: 35,
  },
  {
    number: 14,
    nameSanskrit: "गुणत्रयविभागयोग",
    nameHindi: "गुणत्रय विभाग योग",
    nameEnglish: "Gunatraya Vibhaga Yoga",
    descriptionHindi: "सत्त्व, रज और तम तीनों गुणों का विस्तृत वर्णन।",
    descriptionEnglish:
      "Understanding the three modes of material nature: goodness, passion, and ignorance.",
    verses: 27,
  },
  {
    number: 15,
    nameSanskrit: "पुरुषोत्तमयोग",
    nameHindi: "पुरुषोत्तम योग",
    nameEnglish: "Purushottama Yoga",
    descriptionHindi: "परम पुरुष और संसार के वास्तविक स्वरूप का ज्ञान।",
    descriptionEnglish:
      "Understanding the Supreme Person and the nature of existence.",
    verses: 20,
  },
  {
    number: 16,
    nameSanskrit: "दैवासुरसम्पद्विभागयोग",
    nameHindi: "दैवासुर सम्पद्विभाग योग",
    nameEnglish: "Daivasura Sampad Vibhaga Yoga",
    descriptionHindi: "दैवी और आसुरी गुणों का वर्णन तथा उनके परिणाम।",
    descriptionEnglish:
      "The divine and demoniac qualities and their consequences.",
    verses: 24,
  },
  {
    number: 17,
    nameSanskrit: "श्रद्धात्रयविभागयोग",
    nameHindi: "श्रद्धात्रय विभाग योग",
    nameEnglish: "Shraddhatraya Vibhaga Yoga",
    descriptionHindi: "तीन प्रकार की श्रद्धा और उनके अनुसार जीवन का स्वरूप।",
    descriptionEnglish: "The three kinds of faith and how they influence life.",
    verses: 28,
  },
  {
    number: 18,
    nameSanskrit: "मोक्षसंन्यासयोग",
    nameHindi: "मोक्ष संन्यास योग",
    nameEnglish: "Moksha Sannyasa Yoga",
    descriptionHindi: "त्याग, कर्म, ज्ञान, भक्ति और मोक्ष का अंतिम उपदेश।",
    descriptionEnglish:
      "The final teaching on renunciation, duty, knowledge, devotion, and liberation.",
    verses: 78,
  },
];

export default chapters;
