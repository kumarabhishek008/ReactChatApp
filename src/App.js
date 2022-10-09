import './App.css';
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashboard';
import ContextProvider from './utils/ContextProvider';

function App() {
  return (
    <>
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ContextProvider>
    </>
  );
}

export default App;
