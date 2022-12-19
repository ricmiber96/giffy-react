
import { React } from 'react'
import { useParams } from 'react-router-dom'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Loader from '../../components/Loader/Loader'
import { useGifs } from '../../hooks/useGifs'

export default function SearchResults () {
  const { keyword } = useParams()
  const { loading, gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <>
      {
        loading
          ? <Loader />
          : <div className='gifs-section-items'>
            <h3 className='app-title'>{keyword}</h3>
            <ListOfGifs gifs={gifs} />
            </div>
    }
      <button onClick={handleNextPage}>Get Next Page</button>
    </>
  )
}
