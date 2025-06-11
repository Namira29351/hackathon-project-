import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Finished from './components/Finished';
import Unfinished from './components/Unfinished';
import AddBook from './components/AddBook';
import About from './components/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/finished" element={<Finished />}/>
        <Route path="/unfinished" element={<Unfinished />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/about" element={<About />} />
        <Route path="/unfinished" element={<Unfinished />} />
      </Routes>
    </Router>
  );
}

export default App;
