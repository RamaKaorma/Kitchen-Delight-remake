import React, { useState } from 'react'
import { Header, Navbar, Recipe } from './container';
import './App.scss'

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Recipe />
    </div>
  )
}

export default App
