export const cleanData = (data) => {
  const randomIndex = getRandomIndex(data.madlibs.length)
  return data.madlibs[17]
}

const getRandomIndex = (length) => {
  return Math.floor(Math.random() * length)
}


