import './App.css'
import {Routes, Route} from 'react-router-dom'
// import NavBar from './components/NavBar'
import AllPlayers from './components/AllPlayers'
// import NewPlayerForm from './components/NewPlayerForm'
// import SinglePlayer from './components/NewPlayerForm'

export default function App() {

  return (
    <>
      <div id='container'>
        {/* <NavBar /> */}
        <div id='main-block'>
          <Routes>
            <Route path='/' element={<AllPlayers />} />
            {/* <Route path='/:name' element={<SinglePlayer />} /> */}
          </Routes>
        </div>
      </div>    
    </>
  )
}


