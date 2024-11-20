import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Education from './Components/Education';
import Resume from './Components/Resume';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Education' element={<Education/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Resume' element={<Resume/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
