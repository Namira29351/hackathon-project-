import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Finished from './Finished';
import Unfinished from './Unfinished';
import AddBook from './AddBook';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/finished" element={<Finished />}/>
        <Route path="/unfinished" element={<Unfinished />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
