import { useEffect, useState } from 'react'
import ListOfGifs from './components/ListOfGifs'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

function App () {
  // const DIFFERENT_GIFS = [
  //   'https://media4.giphy.com/media/RhrAmVUHxjTQvEPBWi/giphy.gif?cid=ecf05e47vs44jr9ufm6rmt65r79v8du3hzv2cezo6e4zlgdz&rid=giphy.gif&ct=g',
  //   'https://media1.giphy.com/media/CjmvTCZf2U3p09Cn0h/200.gif?cid=ecf05e47vs44jr9ufm6rmt65r79v8du3hzv2cezo6e4zlgdz&rid=200.gif&ct=g'
  // ]

  return (
    <Router>
      <section className='container' as='container'>
        <h1>Giffy</h1>
        <div>
          <Link to='/gif/f1'>Gifs Formula 1</Link>
          <Link to='/gif/soccer'>Gifs Football</Link>
          <Link to='/gif/cats'>Gifs Cats</Link>
        </div>
        <Routes>
          <Route path='/gif/:keyword' element={<ListOfGifs />} />
        </Routes>
      </section>
    </Router>
  )
}

export default App
