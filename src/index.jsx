import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import MyRouter from './components/MyRouter';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <MyRouter />
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  </React.StrictMode>,
  document.getElementById('root')
);


