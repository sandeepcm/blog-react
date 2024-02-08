import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <main className="max-w-screen-xl mx-auto px-2 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
