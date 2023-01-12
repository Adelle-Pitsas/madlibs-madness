
export const fetchData = async () => {
  const response = await fetch('http://localhost:3001/madlibs')
  if(response.status > 400) {
    throw response
  }
  return response.json()
}

export const postData = async (madLib) => {
  const response = await fetch('http://localhost:3001/madlibs/favorites',
    {
      method: 'POST',
      body: JSON.stringify({madLib: madLib}),
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
  const response = await fetch('http://localhost:3001/madlibs/favorites')
  if(response > 400) {
    throw response
  }
  return response.json()
}