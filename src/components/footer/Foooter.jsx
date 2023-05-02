import React ,{useEffect} from 'react'
import './Footer.css'
import './Footer.scss'
import video2 from './../media/ocean-65560.mp4'
import {FiSend} from 'react-icons/fi'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillYoutube} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Foooter = () => {
 //scrol animation//
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
  <section  className='footer'>
    <div className='videoDiv'>
      <video src={video2} loop autoPlay muted type='video/mp4'></video>
    </div>
    <div  data-aos='fade-up ' className="secContent container ">
      <div  className="contentDiv flex"> 
        <div  className="text">
          <small>KEEP IN TOUCH </small>
          <h3>TRAVEL WITH US </h3>
        </div>
        <div  className="inputDiv flex">
          <input placeholder='Enter Email Adress' type='text/'/>
          <button className='btn flex' type='submit'>
          SEND   <FiSend className='icon'/>
          </button>
        </div>
      </div>

      <div  className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a className='logo flex' href='##'>
            < SiYourtraveldottv className='icon'/> <h5>Yalla</h5><p>Excursion</p>
            </a>
          </div>
          <div className="footerParagraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eligendi odit at dicta repudiandae placeat maxime voluptatem voluptatum facilis. Accusamus aut quam impedit eveniet modi id quo doloremque ducimus pariatur!
          </div>
          <div className="footerSoicals flex">
            <AiFillYoutube className='icon' />
            <AiOutlineTwitter className='icon'/>
            <FaTripadvisor className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>
        </div>

         <div className="footerLinks grid">
          {/* Group one */}
          <div data-aos='fade-right ' className="linkGroup">
            <span className='groupTitel'>OUR AGENCY</span>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Service
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Insurance
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Agency
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Tourism
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Payment
            </li>
          </div>
          {/*Group two*/}
          <div data-aos='fade-left ' className="linkGroup">
            <span className='groupTitel'>PARTNERS</span>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
             Bookings
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Rentcars
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Trivago
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              TripAdvisor
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
             HostelWorld
            </li>
          </div>
          {/*Group three*/}
          <div  data-aos='fade-right 'className="linkGroup">
            <span className='groupTitel'>LAST MINUTE</span>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Italy 
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Egypt 
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
             Tailand
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Dubai 
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
             Hawai 
            </li>
          </div>
         </div>
         <div className="footerDiv flex">
          <small>BEST VACATIONS WITH US  </small>
          <small> COPYRIGHTS RESERVED - ISREATECH 2022 </small>
         </div>
      </div>
    </div>
  </section>
  )
}

export default Foooter