import './App.css';
import Home from './Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route exact path="/" element={<Home />}/>

      </Routes>
          
    </div>
  );
}

export default App;
