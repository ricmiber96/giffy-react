import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Category from '../../components/Category/Category'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Loader from '../../components/Loader/Loader'
import { useGifs } from '../../hooks/useGifs'

export default function Home () {
  const POPULAR_GIFS = ['Silicon Valley', 'Matrix', 'Devs', 'Cats', 'Formula 1']
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const { loading, gifs } = useGifs()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${keyword}`)
  }
  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder='Search a gif here...' onChange={handleChange} type='text' value={keyword} />
      </form>
      <div className='app-content'>
        <div className='app-results'>
          <h3 className='app-title'>Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className='app-category'>
          <Category
            name='Categorias populares'
            options={POPULAR_GIFS}
          />
          <Category
            name='Mascotas'
            options={['Perros', 'Gatos', 'Hamster']}
          />
        </div>
      </div>
    </>
  )
}
