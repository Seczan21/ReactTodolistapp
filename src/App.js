import TodoContainer from './container/todoContainer';
import '../src/index.css';
import {  Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Navbar/Nav';
import Home from './components/Pages/Home';
import About from './components/Pages/About';

function App() {
  return (
    <>  
      <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        <ul className='nav-links'>
          <li><Link to='/' className='home'>Home</Link></li>
          <li><Link to='/about' className='home'>About</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path='/' element={<TodoContainer/>} ></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
   
    </>
  );
}

export default App;
