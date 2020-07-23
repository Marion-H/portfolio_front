import React from "react";
import "./App.css";

import MyRouter from "./components/MyRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
