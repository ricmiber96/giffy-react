
import { React, useContext } from 'react'
import { useParams } from 'react-router-dom'
import StaticContext from '../../context/StaticContext'
import GifsContext from '../../context/GifsContext'
import Gif from '../../components/Gif/Gif'

export default function Detail () {
  const { id } = useParams()
  // EJEMPLO DE CONTEXT PARA GUARDAR ESTADOS GLOBALES
  const context = useContext(StaticContext)
  console.log(context)

  const { gifs } = useContext(GifsContext)
  const gif = gifs.find(singleGif => singleGif.id === id)
  console.log(gif)

  return (
    <>
      <Gif {...gif} />
    </>
  )
}
