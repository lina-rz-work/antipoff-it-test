import { Routes, Route } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { UserPage } from './pages/UserPage'
import { Home } from './pages/Home'
import '../src/scss/style.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/:userId" element={<UserPage />} />
      </Routes>
    </>
  )
}

export default App
