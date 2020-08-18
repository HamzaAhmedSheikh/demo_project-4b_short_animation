import React from 'react'
import './style.css'

import useWebAnimations from "@wellyshen/use-web-animations";

import PictureOne from './images/pic-1.png'
import PictureTwo from './images/pic-2.png'
import PictureThree from './images/pic-3.png'
import PictureFour from './images/pic-4.png'
import PictureFive from './images/pic-5.png'
import PictureSix from './images/pic-6.png'

import ImageOne from './images/img-1.png'
import ImageTwo from './images/img-2.png'
import ImageThree from './images/img-3.png'
import ImageFour from './images/img-4.png'
import ImageFive from './images/img-5.png'

import 'animate.css' // for animation


export const Animation = () => {
  

  const { ref } = useWebAnimations({          
      keyframes: {
          transform: ["translate(50px)"],             
      },

      timing: {
        delay: 400, 
        duration: 1000, 
        iterations: Infinity,
        direction: "alternate", 
        easing: "ease-in-out", 
      }
 
  })


    return (    
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
           <a className="navbar-brand" href="http://short_animation.surge.sh/" ref={ref}> Project 4B </a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active animate__animated animate__swing animate__delay-1s">
                <a className="nav-link" href="http://short_animation.surge.sh/"> Home </a>
             </li>
             <li className="nav-item animate__animated animate__swing animate__delay-2s">
                <a className="nav-link" href="http://short_animation.surge.sh/"> About us </a>
             </li>
             <li className="nav-item animate__animated animate__swing animate__delay-3s">
                <a className="nav-link" href="http://short_animation.surge.sh/"> Portfolio </a>
             </li>  
             <li className="nav-item animate__animated animate__swing animate__delay-4s">
                <a className="nav-link" href="http://short_animation.surge.sh/"> Services </a>
             </li> 
             <li className="nav-item animate__animated animate__swing animate__delay-5s">
                <a className="nav-link" href="http://short_animation.surge.sh/"> Contact us </a>
             </li>     
         </ul>
        </div>               
       </div>
     </nav>

      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="7000">          
       <div className="carousel-inner">

        <div className="carousel-item active slide-one">
          <div className="container">
           <div className="row">
             <div className="col-md-6">
               <h1 className="animate__animated animate__fadeInLeft animate__delay-1s" > Build A Mobile App </h1>  
               <p className="animate__animated animate__lightSpeedInLeft animate__delay-2s">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
                Curabitur mollis, ante in mollis mollis, nisl ante venenatis orci, eget dignissim tortor ex vel nisi.
                Nunc nec risus quis tellus lobortis tempus. Praesent ac ligula ex. Quisque sagittis elementum bibendum.
                Etiam eu porttitor dolor. Cras sodales odio eu lacus vulputate imperdiet. In eleifend quis metus eleifend.
                  <br /> <br />
                <button type="button" className="animate__animated animate__jackInTheBox animate__delay-5s"> Read More </button>    
               </p>
             </div>
             <div className="col-md-6">
               <div className="img-box">
                  <img src={PictureOne}
                       className='pic-one animate__animated animate__zoomIn animate__delay-1s'
                       alt='pic-1'
                  />
                  <img src={PictureTwo}
                       className='pic-two animate__animated animate__fadeInLeft animate__delay-4s'
                       alt='pic-2' 
                   />
                  <img src={PictureThree}
                       className='pic-three animate__animated animate__fadeInUp animate__delay-3s'
                       alt='pic-3'
                   />
                  <img src={PictureFour}
                       className='pic-four animate__animated animate__fadeInDown animate__delay-3s'
                       alt='pic-4'
                   />
                  <img src={PictureFive}
                       className='pic-five animate__animated animate__fadeInRight animate__delay-4s'
                       alt='pic-5'
                   />
                  <img src={PictureSix}
                       className='pic-six animate__animated animate__jackInTheBox animate__delay-5s'
                       alt='pic-6'
                   />
               </div>  
             </div>
           </div>
          </div>            
        </div>

        <div className="carousel-item slide-two">
        <div className="container">
           <div className="row">
             <div className="col-md-6">
               <h1 className="animate__animated animate__fadeInLeft animate__delay-1s"> Learn Graphics Design </h1>  
               <p className="animate__animated animate__lightSpeedInLeft animate__delay-2s">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur mollis, ante in mollis mollis, nisl ante venenatis orci, eget dignissim tortor ex vel nisi.
                Nunc nec risus quis tellus lobortis tempus. Praesent ac ligula ex. Quisque sagittis elementum bibendum.
                Etiam eu porttitor dolor. Cras sodales odio eu lacus vulputate imperdiet. In eleifend quis metus eleifend.
                  <br /> <br />
                <button type="button" className="animate__animated animate__jackInTheBox animate__delay-5s"> Read More </button>    
               </p>
             </div>
             <div className="col-md-6">
               <div className="img-box">
                  <img src={ImageOne}
                       className='img-one animate__animated animate__zoomIn animate__delay-1s'
                       alt='img-1'
                    />
                  <img src={ImageTwo} 
                       className='img-two animate__animated animate__fadeInLeft animate__delay-4s'
                       alt='img-2'
                    />
                  <img src={ImageThree}
                       className='img-three animate__animated animate__zoomIn animate__delay-3s'
                       alt='img-3'
                    />
                  <img src={ImageFour}
                       className='img-four animate__animated animate__fadeInDown animate__delay-3s'
                       alt='img-4'
                    />
                  <img src={ImageFive}
                       className='img-five animate__animated animate__fadeInRight animate__delay-4s'
                       alt='img-5'
                    />
               </div>  
             </div>
           </div>
          </div>            
        </div>
        
      </div>

      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
     </a>

     <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="sr-only">Next</span>
     </a>
    </div>       
  </div>  
 )
}


export default Animation;
