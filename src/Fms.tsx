import React from 'react'
import FmsScreen from './components/FmsScreen'

const FMS: React.FC = () => {
  
  return (
    <>
      <div
        className='w-screen h-screen bg-black flex justify-center items-center'
      >
        {/*componente, retro monitor...*/}
        <FmsScreen />
      </div>
    </>
  )
}

export default FMS
