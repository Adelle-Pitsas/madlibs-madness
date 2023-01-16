
export const fetchData = async () => {
  const response = await fetch('https://madlibs-84a7cm3v0-adelle-pitsas.vercel.app/madlibs')
  if(response.status > 400) {
    throw response
  }
  return response.json()
}

export const postData = async (madLib) => {
  const response = await fetch('https://madlibs-84a7cm3v0-adelle-pitsas.vercel.app/madlibs/favorites',
    {
      method: 'POST',
      body: JSON.stringify({quote: madLib.result, isFavorited: madLib.isFavorited}),
      headers: {
        'content-type': 'application/json'
      }
    })
    if(response.status > 400) {
      throw response
    }
    return response.json()
}

export const fetchFavorites = async () => {
  const response = await fetch('https://madlibs-84a7cm3v0-adelle-pitsas.vercel.app/madlibs/favorites')
  if(response > 400) {
    throw response
  }
  return response.json()
}

export const deleteFavorite = async (id) => {
  const response = await fetch(`https://madlibs-84a7cm3v0-adelle-pitsas.vercel.app/madlibs/favorites/${id}`,
  {
    method: 'DELETE'
  })
  if(response.status > 400) {
    throw response
  }
  return response.json()
}