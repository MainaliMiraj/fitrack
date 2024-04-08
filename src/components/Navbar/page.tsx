import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-green-600'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link href='/'>Logo</Link>
            </div>
              <Link href='/exercise'>Exercises</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
