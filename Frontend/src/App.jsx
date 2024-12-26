import { useState } from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import './App.css'
import Login from './Components/Login/Login'
import RepoScr from './Components/RepositoryScreen/RepoScr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/repository' element={<RepoScr/>}/>
      </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
