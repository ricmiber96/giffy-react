import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs ({ keyword } = { keyword: null }) {
  // const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    setLoading(true)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    getGifs({ keyword: keywordToUse })
      .then((gifs) => {
        setGifs(gifs)
        localStorage.setItem('lastKeyword', keyword)
      })
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [keyword, setGifs])

  return { loading, gifs }
}
