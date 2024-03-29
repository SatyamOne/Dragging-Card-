import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
import Card from './Components/Card'

const App = () => {
  
  return (
    <div className='relative top-[5%] w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
      <Card />
      </div>

    
  )
}

export default App
