import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Olympiad from './pages/Olympiad';
function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/' element={<Home/>} ></Route>
        <Route path = '/olympiad2022' element={<Olympiad></Olympiad>}></Route>
        <Route path ='/privacy' element={<Privacy/>} ></Route>
        <Route path='/terms' element={<Terms/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
