import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Application from './pages/Application';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/application" element={<Application />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;