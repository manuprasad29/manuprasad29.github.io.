import React from 'react'
import { Link } from 'react-router-dom'
import {BsCartCheck} from 'react-icons/bs'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to='/'>Shopp</Link>
        </div>

            <div className='links'>
            <Link to='/cart'><BsCartCheck/></Link>
        </div>
    </div>
  )
}

export default Navbar