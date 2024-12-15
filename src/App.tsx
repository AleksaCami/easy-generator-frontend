import './App.css';

import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Application from './pages/Application';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { RootState } from './store';

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.session.isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          element={<PrivateRoute isAllowed={isLoggedIn} redirectTo="/" />}
        >
          <Route path="/application" element={<Application />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
