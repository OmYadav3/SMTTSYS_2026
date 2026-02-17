import React from 'react'

const Navbar = ({children}) => {
  return (
    <div className='bg-component p-8 font-bold text pl-18'>
      {children}
    </div>
  )
}

export default Navbar
