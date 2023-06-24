import { Route, Routes } from 'react-router-dom';
import './bootstrap.min (3).css'
import Login from './components/Login';
import Home from './components/Home';
import { ToastContainer } from 'react-bootstrap';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home/:id' element={<Home/>}></Route>
        <Route path='/tasks/:id' element={<Task/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
