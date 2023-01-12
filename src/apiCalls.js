import { cleanData } from './util'

export const fetchData = async () => {
  const response = await fetch('http://localhost:3001/madlibs')
  if(response.status > 400) {
    throw response
  }
  return response.json()
}