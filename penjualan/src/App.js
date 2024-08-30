import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Routers/CustomerRouter';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouter/>}></Route>
      </Routes>
      <div>
        
      </div>
    </div>
  );
}

export default App;
