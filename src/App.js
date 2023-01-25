import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import CreatePost from './Components/CreatePost'
import Home from './Components/Home'
import Login from './Components/Login'
import './App.css'
function App() {
  return (
    <div>
   <Router>
    <nav>
      <Link to="/">Home</Link>  
      <Link to="/createpost">CreatePost</Link>
      <Link to="/login">Login</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/createpost" element={<CreatePost/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
   </Router>
    </div>
  )
}

export default App
