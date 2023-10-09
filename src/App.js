import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import DataTable from './pages/DataTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/data' element={<DataTable/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
