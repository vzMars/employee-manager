import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components
import RequireGuest from './components/RequireGuest';
import RequireAuth from './components/RequireAuth';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddEmployee from './pages/AddEmployee';
import EmployeeDetails from './pages/EmployeeDetails';
import NotFound from './pages/NotFound';

// Layout
import Layout from './layouts/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<RequireGuest />}>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route index element={<Home />} />
            <Route path='add' element={<AddEmployee />} />
            <Route path='employee/:id' element={<EmployeeDetails />} />
          </Route>

          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='404' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
