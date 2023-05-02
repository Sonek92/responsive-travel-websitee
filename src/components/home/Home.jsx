import React , {useEffect} from 'react'
import './Home.css'
import video from './../media/beach-135860.mp4'
import './Home.scss'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaTripadvisor} from 'react-icons/fa'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {BsListTask} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
    
 useEffect(()=>{
   Aos.init({duration:2000})
 },[])

  return (
    <section className='home'>
       <div className='overlay'></div>
       <video src={video} muted autoPlay loop type='video/mp4'></video>
       <div className='homeContent contaier'>
        <div data-aos='fade-down' className='textDiv'>
          <span  className='smallText'> Our Packages</span>
          <h1  className='homeTitel'>Search Your Holiday</h1>
        </div>
       
        <div data-aos='fade-up' className="cardDiv grid">
          <div className='destinationInput'>
            <label htmlFor='city'>Search Your Hotel</label>
            <div className='input flex'>
            <input type="text" placeholder="Enter Name Here"/>
            <GrLocation className='icon'/>
            </div>

          </div>
          <div  className='dateInput'>
            <label htmlFor='date'>Search Your Hotel</label>
            <div className='input flex'>
            <input type="date" placeholder="Chose Your Date"/>
            </div>

          </div>
          <div className='priceInput'>
            <dive className='label_total flex'>
              <label htmlFor='price'>Max price:</label>
              <h3 className='total'>$5000</h3>
            </dive>
            <div className='input flex'>
              <input type='range' max='5000' min='1000'/>
            </div>
          </div>
          <div className="searchOption flex">
              <HiFilter className='icon'/>
              <span>MORE FILTER</span>
          </div>
        </div>
        <div data-aos='fade-up' className='homeFooterIcons flex'>
            <div className='rightIcons'>
             <FaFacebook className='icon'/>
             <BsInstagram className='icon'/>
             <FaTripadvisor className='icon'/>
            </div>
            <div className='leftIcons'>
            <BsListTask className='icon'/>
            <AiOutlineAppstoreAdd className='icon'/>
            </div>
          </div>
       </div>
    </section>
  )
}

export default Home