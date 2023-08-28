
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import NavPage from './components/NavPage';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<LoginPage />} />
             <Route path="sign_up" element={<Outlet />}>
              <Route index element={<SignupPage />} />
            </Route>
            <Route path="/:contactNumber" element={<Outlet />}>
              <Route index element={<NavPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
