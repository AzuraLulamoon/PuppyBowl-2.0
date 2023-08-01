import './App.css'
import {Routes, Route} from 'react-router-dom'
// import NavBar from './components/NavBar'
import AllPlayers from './components/AllPlayers'
// import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import Header from './components/Header'

export default function App() {

  return (
    <>
    <div id='header'>
      <Header />
        </div>
      <div id='container'>
        
        <div id='main-block'>
          <Routes>
            <Route path='/' element={<AllPlayers />} />
            <Route path='/:id' element={<SinglePlayer />} />
          </Routes>
        </div>
      </div>    
    </>
  )
}


