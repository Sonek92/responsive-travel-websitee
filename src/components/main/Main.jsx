import React ,{useEffect} from 'react'
import './Main.css'
import './Main.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from './../media/marsa.jpg'
import img2 from './../media/aswan.jpg'
import img3 from './../media/dahab.jpg'
import img4 from './../media/hurgada.jpg'
import img5 from './../media/luxor.jpg'
import img6 from './../media/cairo.jpg'
import img7 from './../media/sahrm.jpg'
import img8 from './../media/marsa2.jpg'
import img9 from './../media/pexels-vincent-gerbouin-1174732.jpg'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BiCommentDetail} from 'react-icons/bi'


const data = [
  {
    id:1,
    imgSrc:img,
    destTitel:"MARSA ALAM",
    location:"EGYPT",
    grad:'CULTURARL RELAX',
    fees:"970$",
    descrption:'Marsa alam is the most beautful beach you can enjoyit by snorkling an dsafari and diving  beautful beach you can enjoyit by snorkling an dsafari and diving ',

  },
  {
    id:1,
    imgSrc:img2,
    destTitel:"Aswan",
    location:"EGYPT",
    grad:'CULTURARL RELAX',
    fees:"970$",
    descrption:'Marsa alam is the most beautful beach you can enjoyit by snorkling an dsafari and diving  beautful beach you can enjoyit by snorkling an dsafari and diving ',

  },
  {
    id:1,
    imgSrc:img3,
    destTitel:"Dahab",
    location:"EGYPT",
    grad:'CULTURARL RELAX',
    fees:"970$",
    descrption:'Marsa alam is the most beautful beach you can enjoyit by snorkling an dsafari and diving  beautful beach you can enjoyit by snorkling an dsafari and diving ',

  },
  {
    id:1,
    imgSrc:img4,
    destTitel:"Hurghada",
    location:"EGYPT",
    grad:'CULTURARL RELAX',
    fees:"970$",
    descrption:'Marsa alam is the most beautful beach you can enjoyit by snorkling an dsafari and diving  beautful beach you can enjoyit by snorkling an dsafari and diving ',

  },
  {
    id:1,
    imgSrc:img5,
    destTitel:"Luxor",
    location:"EGYPT",
    grad:'CULTURARL RELAX',
    fees:"970$",
    descrption:'Marsa alam is the most beautful beach you can enjoyit by snorkling an dsafari and diving  beautful beach you can enjoyit by snorkling an dsafari and diving ',

  },
  {
    id:1,
    imgSrc:img6,
    destTitel:"Cairo",
    location:"EGYPT",
    grad:'CULTURARL RELAX',
    fees:"970$",
    descrption:'Marsa alam is the most beautful beach you can enjoyit by snorkling an dsafari and diving  beautful beach you can enjoyit by snorkling an dsafari and diving ',

  },
  {
    id:1,
    imgSrc:img7,
    destTitel:"Sharm",
    location:"EGYPT",
    grad:'CULTURARL RELAX',
    fees:"970$",
    descrption:'Marsa alam is the most beautful beach you can enjoyit by snorkling an dsafari and diving  beautful beach you can enjoyit by snorkling an dsafari and diving ',

  },
  {
    id:1,
    imgSrc:img8,
    destTitel:"Safaga",
    location:"EGYPT",
    grad:'CULTURARL RELAX',
    fees:"970$",
    descrption:'Marsa alam is the most beautful beach you can enjoyit by snorkling an dsafari and diving  beautful beach you can enjoyit by snorkling an dsafari and diving ',

  },
  {
    id:1,
    imgSrc:img9,
    destTitel:"Hamata",
    location:"EGYPT",
    grad:'CULTURARL RELAX',
    fees:"970$",
    descrption:'Marsa alam is the most beautful beach you can enjoyit by snorkling an dsafari and diving  beautful beach you can enjoyit by snorkling an dsafari and diving ',

  }
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:1500})
  },[])
  
  return (
    <section className='main container section'>
      <div data-aos='fade-right' className='secTitle'>
        <h3 className='title'>Top Adventure Sights You Can't Miss </h3>
       </div>
       
       <div className='secContent grid'>
       {data.map(({id,imgSrc,destTitel,location,grad,fees,descrption})=>{
       return(
        <div data-aos='fade-up' key={id} className="singleDestination">
           <div className='imgDiv'>
          <img src={imgSrc} alt={destTitel}/>
           </div>
          <div className="cardInfo">
            <h4 className='destTitel'>{destTitel}</h4>
            <span className="continent flex">
              <HiOutlineLocationMarker className='icon'/>
              <span className='name'>{location }</span>
            </span>
            <div className="fees flex">
              <div className='grade'>
                <span>{grad}<small>+1 </small></span>
               </div>
              <div className="price">
                <h4>{fees}</h4>
               </div>
            </div>
            <div className="desc">
              <p>{descrption}</p>
            </div>
            <button className='btn flex'>
              DETAILS <BiCommentDetail className="icon"/>
            </button>
           </div>
        </div>
      )
    })}
      </div>
   
    </section>
 
  )
}

export default Main