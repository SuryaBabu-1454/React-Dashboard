import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NestedExample() {
  return (
    <>
    <div className="container">
    <nav>
   <Link to='feed'>Feed</Link>
   <Link to='setting'>Setting</Link>
   <Link to='profile'>Profile</Link>
    </nav>

  <Outlet />
  </div> 

    </>
       
  )
}

export default NestedExample