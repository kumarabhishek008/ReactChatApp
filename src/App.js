import './App.css';
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashboard';
import ContextProvider, { AuthContext } from './utils/ContextProvider';
import { useContext } from 'react';

function App() {
  const { userData } = useContext(AuthContext);
  return (
    <>
      <Router>
        <Routes>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
