import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import TVShows from './pages/TVShows'
import Movies from './pages/Movies'
import About from './pages/About'
import Header from './components/Header'
import Search from './components/Search'
import MovieDetails from './pages/MovieDetails'
import MoviePage from './pages/MoviePage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/tvshow' element={<TVShows/>} />
        <Route path='/about' element={<About />} />
        <Route path='/moviepage/:country/:language' element={<MoviePage />} />
        <Route path='/search/:searchTerm' element={<Search />} />
        <Route path='/movieinfo/:movieId' element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
