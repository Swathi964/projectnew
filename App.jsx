import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Intro from './Components/Intro'

import Login from './Components/Login'
import Admin from './Components/Admin'
import Signin from './Components/Signin'
import Manage_jobs from './Admin/Manage_jobs'
import Adashboard from './Admin/Adashboard'
import Logout from './Admin/Logout'
import Applied_Jobs from './User/Applied_Jobs'
import Brows_job from './User/Brows_job'
import User_Dashboard from './User/User_Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={< Intro/>}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          

        </Routes>
        <Routes>
        <Route path='/m' element={<Manage_jobs/>}></Route>
          <Route path='/log' element={<Login />}></Route>
          <Route path='/db' element={<Adashboard/>}></Route>
        </Routes>
        <Routes>
          <Route path='/c' element={<Logout />}></Route>
          <Route path='/b' element={<Brows_job/>}></Route>
          <Route path='/ud' element={<User_Dashboard/>}></Route>
        </Routes>
        </div>
    </>
  )
}

export default App