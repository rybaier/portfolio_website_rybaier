import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>

    </div>
  );
}

export default App;
