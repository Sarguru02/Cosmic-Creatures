import './App.css'
import Home from './Components/Home'
import Chatbot from './Components/Chatbot'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers = {
  'Content-Type': 'application/json'
}
function App() {
  return (
    <div>
      <Home/>
      <Chatbot/>
    </div>
  );
}

export default App
