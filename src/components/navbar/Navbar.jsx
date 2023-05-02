import React, {useState} from 'react'
import './Navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import './Navbar.scss'



const Navbar = () => {
  const [active , setActive]=useState('navBar')
  //func for toggel naveBar 
  const showNav = ()=>{
    setActive('navBar activeNavBar')
  }
  // func  removeNav 
  const removeNav = ()=>{
    setActive('navBar removeNav')
  }
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a className='logo flex'href='##'>
            <h1> < SiYourtraveldottv className='icon'/> Yalla <h5>Excursion</h5> </h1>
          </a>
        </div>
        <div className={active}>
          <ul className='navList flex'>
            <li className='navItem flex'>
              <a href='##' className='navLink'>HOME</a>
            </li>
            <li className='navItem'>
              <a href='##' className='navLink'>Packages</a>
            </li>
            <li className='navItem'>
              <a href='##' className='navLink'>Shop</a>
            </li>
            <li className='navItem'>
              <a href='##' className='navLink'>About</a>
            </li>
            <li className='navItem'>
              <a href='##' className='navLink'>Pages</a>
            </li>
            <li className='navItem'>
              <a href='##' className='navLink'>News</a>
            </li>
            <li className='navItem'>
              <a href='##' className='navLink'>Contact</a>
            </li>
            <button className='btn'><a href='##' >Book Now</a></button>
          </ul>
          <div onClick={removeNav} className='closeNavbar'>
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>
        <div onClick={showNav} className="toggelNavbar">
          <TbGridDots className='icon'/>
        </div>
      </header>
     
    </section>
  )
}

export default Navbar