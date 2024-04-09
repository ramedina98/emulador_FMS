import React from 'react'
import FmsScreen from './components/FmsScreen'

const FMS: React.FC = () => {
  
  return (
    <>
      <div
        style={{
          minHeight: '100vh'
        }}
        className='w-screen bg-black flex justify-center items-center'
      >
        {/*componente, retro monitor...*/}
        <FmsScreen />
      </div>
    </>
  )
}

export default FMS
