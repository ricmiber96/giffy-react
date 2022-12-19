import { API_URL } from './settings'

export default function getTrendingTerms () {
  const apiUrl = `${API_URL}/trending/searches?api_key=${import.meta.env.VITE_API_KEY}&limit=25&offset=0&rating=g&lang=en`
  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response
      return data
    })
}
