import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getGifs from '../services/getGifs'
import Gif from './Gif'
import Loader from './Loader'

export default function ListOfGifs () {
  const [gifs, setGifs] = useState([])
  const { keyword } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword })
      .then((gifs) => {
        setGifs(gifs)
      })
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [keyword])

  return (
    <>
      {
        loading
          ? (
            <Loader />
            )
          : (
              gifs.map((gif) => (
                <Gif key={gif.id} title={gif.title} url={gif.url} id={gif.id} />
              ))
            )
    }
    </>
  )
}
