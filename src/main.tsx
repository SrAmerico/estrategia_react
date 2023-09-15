import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
// import { Route, Routes, BrowserRouter } from "react-router-dom"
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
// import App from './App.tsx'

import './index.css'

import Estrategia from './pages/Estrategia/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <MenuLateral />
    <Estrategia/>
    
  </React.StrictMode>
)
