export const cleanData = (data) => {
  const randomIndex = getRandomIndex(data.madlibs.length)
  return data.madlibs[randomIndex]
}

const getRandomIndex = (length) => {
  return Math.floor(Math.random() * length)
}


// ,
//     {
//       "id": 2,
//       "quote": "'In the end, it's not the years in your life that count. It's the life in your years.' -Abraham Lincoln",
//       "parsedQuote": "In the end, its not the pluralNoun1, in your life but the noun in your pluralNoun2",
//       "wordsNeeded": ["pluralNoun1", "noun", "pluralNoun2"],
//     " partsOfSpeech": ["Plural noun", "Noun", "Plural Noun"]
//     },
//     {
//       "id": 3,
//       "quote": "'Never let the fear of striking out keep you from playing the game.' -Babe Ruth",
//       "parsedQuote": "Never let the fear of ingVerb1 keep you from ingVerb2 the noun - Babe Ruth",
//       "wordsNeeded": ["ingVerb1", "ingVerb2", "noun"],
//       "partsOfSpeech": ["Verb ending in '-ing'", "Verb ending in '-ing'", "Noun"]
//     }