import './App.css'
import Home from "./Components/Home/Home";
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import AqiComponent from './Components/AqiComponent/AqiComponent';
import { Dashboard } from './Components/Dashboard/Dashboard';
import Landing from './Components/Landing/Landing';
import Inputform from './Components/Inputform/Inputform';
import Header from './Components/Navbar/Header';

axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers = {
    'Content-Type': 'application/json'
}
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/calc" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/AqiComponent" element={<AqiComponent />} />
                <Route path="/getUserData" element={<Inputform />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    );
}

export default App
