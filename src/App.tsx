import { useState } from 'react'
import logo from './assets/logo.svg'
import { TheHeader } from './components/TheHeader'
import { TheToDoManager } from './components/TheToDoManager'

function App() {
  return (
    <div id="App" className="flex flex-col space-y-4 max-w-lg mx-auto h-screen py-12 px-8">
      <TheHeader />
      <TheToDoManager />
    </div>
  )
}

export default App
