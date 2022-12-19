import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import TrendingSearches from '../../components/TrendingSearches/LazyTrendingSearches'
import { useGifs } from '../../hooks/useGifs'
import SearchResults from '../SearchResults/SearchResults'

export default function Home () {
  const POPULAR_GIFS = ['Silicon Valley', 'Matrix', 'Devs', 'Cats', 'Formula 1']
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const { gifs } = useGifs()

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
      <div className='app-content flex flex-col lg:flex-row'>
        <div className='app-results'>
          <h3 className='app-title'>Última búsqueda</h3>
          <SearchResults gifs={gifs} />
        </div>
        <div className='app-category'>
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}
