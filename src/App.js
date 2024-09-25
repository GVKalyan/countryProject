import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Table from './components/Table';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/country/:id' element={<Table/>} />
      </Routes>

    </div>
  );
}

export default App;
