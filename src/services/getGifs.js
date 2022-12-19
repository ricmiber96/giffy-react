
export default function getGifs ({ limit = 25, keyword = 'rick', page = 0 } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`
  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response
      const gifs = data.map(image => {
        const { images, title, id } = image
        const url = images.downsized_medium.url
        return { title, id, url }
      })
      return gifs
    })
}
