import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <Header />
      <main className="mt-8 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
