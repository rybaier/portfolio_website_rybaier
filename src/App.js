import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Main from './components/Main';
import Education from './components/Education';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>

    </div>
  );
}

export default App;
