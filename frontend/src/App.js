import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Share from './pages/Share'
import Profile from './pages/Profile'
import Leaderboard from './pages/Leaderboard'
import Impact from './pages/Impact'
import Chatbot1 from './pages/Chatbot1'
import Games from './pages/Games'
import Binit from './pages/Binit'
import Quizup from './pages/Quizup'
function App() {
  return (
    <>
      <Router>
        <div className='container'>
        {/* <div class="macbook-air-15"> */}
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/share' element={<Share />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/impact' element={<Impact />} />
            <Route path='/help' element={<Chatbot1 />} />
            <Route path='/games' element={<Games />} />
            <Route path='/binit' element={<Binit />} />
            <Route path='/quizup' element={<Quizup />} />
          </Routes>
        {/* </div> */}
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App

