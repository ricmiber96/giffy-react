import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults'
import StaticContext from './context/StaticContext'
import Detail from './pages/Detail/Detail'
import { GifsContextProvider } from './context/GifsContext'
import './App.css'

function App () {
  // const DIFFERENT_GIFS = [
  //   'https://media4.giphy.com/media/RhrAmVUHxjTQvEPBWi/giphy.gif?cid=ecf05e47vs44jr9ufm6rmt65r79v8du3hzv2cezo6e4zlgdz&rid=giphy.gif&ct=g',
  //   'https://media1.giphy.com/media/CjmvTCZf2U3p09Cn0h/200.gif?cid=ecf05e47vs44jr9ufm6rmt65r79v8du3hzv2cezo6e4zlgdz&rid=200.gif&ct=g'
  // ]

  return (
    <StaticContext.Provider value={{
      name: 'GiffyApp',
      premium: false
    }}
    >
      <Router>
        <div className='app-main'>
          <Link to='/'>
            <figure className='app-icon'>
              <img alt='Giffy logo' src='/icon.png' />
            </figure>
            <h2 className='app-title'>Giffy</h2>
          </Link>
          <GifsContextProvider>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/search/:keyword' element={<SearchResults />} />
              <Route path='/gif/:id' element={<Detail />} />
            </Routes>
          </GifsContextProvider>
        </div>
      </Router>
    </StaticContext.Provider>
  )
}

export default App
