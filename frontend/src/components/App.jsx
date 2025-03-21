// frontend/src/components/App.jsx
import React from 'react';
import '../App.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppRoutes from '../routes.js';

import 'react-toastify/dist/ReactToastify.css';
import ChatNavbar from './Navbar/ChatNavbar.jsx';

const App = () => (
  <div className="App">
    {/* Envolvemos las rutas con BrowserRouter */}
    <BrowserRouter>
      {/* Quitamos ChatNavbar para que no aparezca en login/signup */}
      <ToastContainer />

      {/* Tus rutas definidas en routes.js */}
      <ChatNavbar />
      <AppRoutes />
    </BrowserRouter>
  </div>
);

export default App;
