
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './component/LoginPage';
import SignupPage from './component/SignupPage';


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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
