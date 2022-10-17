import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import JobList from './pages/JobList';
import JobId from './pages/JobId';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<JobList />}/>
          <Route path='/:id' element={<JobId />}/>
        </Routes>
      </Router>
    </>

  )
}

export default App
