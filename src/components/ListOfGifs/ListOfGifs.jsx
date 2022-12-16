import { React } from 'react'
import Gif from '../Gif/Gif'
import './listofgifs-style.css'
export default function ListOfGifs ({ gifs }) {
  return (
    <>
      <div className='gifs-section'>
        {

      gifs.map((gif) => (
        <Gif key={gif.id} title={gif.title} url={gif.url} id={gif.id} />
      ))

    }
      </div>
    </>
  )
}
