import React from 'react'
import Router from './routes'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import { GlobalStyle } from "./styles/Global";
import ContextProvider from './context/useDonationContext'

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
      <div className="site-content">
        <Navbar />
        <Router/> 
      </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
