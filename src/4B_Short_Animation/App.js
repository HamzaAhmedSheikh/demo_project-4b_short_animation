import React from 'react'
import './style.css'

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


export const Animation = () => {
    return (    
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">          
       <div className="carousel-inner">

        <div className="carousel-item active slide-one">
          <div className="container">
           <div className="row">
             <div className="col-md-6">
               <h1> Build A Mobile App </h1>  
               <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur mollis, ante in mollis mollis, nisl ante venenatis orci, eget dignissim tortor ex vel nisi.
                Nunc nec risus quis tellus lobortis tempus. Praesent ac ligula ex. Quisque sagittis elementum bibendum.
                Etiam eu porttitor dolor. Cras sodales odio eu lacus vulputate imperdiet. In eleifend quis metus eleifend.
                  <br /> <br />
                <button type="button"> Read More </button>    
               </p>
             </div>
             <div className="col-md-6">
               <div className="img-box">
                  <img src={PictureOne} className='pic-one' alt='pic-1' />
                  <img src={PictureTwo} className='pic-two' alt='pic-2' />
                  <img src={PictureThree} className='pic-three' alt='pic-3' />
                  <img src={PictureFour} className='pic-four' alt='pic-4' />
                  <img src={PictureFive} className='pic-five' alt='pic-5' />
                  <img src={PictureSix} className='pic-six' alt='pic-6' />
               </div>  
             </div>
           </div>
          </div>            
        </div>

        <div className="carousel-item slide-two">
        <div className="container">
           <div className="row">
             <div className="col-md-6">
               <h1> Learn Graphics Design </h1>  
               <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur mollis, ante in mollis mollis, nisl ante venenatis orci, eget dignissim tortor ex vel nisi.
                Nunc nec risus quis tellus lobortis tempus. Praesent ac ligula ex. Quisque sagittis elementum bibendum.
                Etiam eu porttitor dolor. Cras sodales odio eu lacus vulputate imperdiet. In eleifend quis metus eleifend.
                  <br /> <br />
                <button type="button"> Read More </button>    
               </p>
             </div>
             <div className="col-md-6">
               <div className="img-box">
                  <img src={ImageOne} className='img-one' alt='img-1' />
                  <img src={ImageTwo} className='img-two' alt='img-2' />
                  <img src={ImageThree} className='img-three' alt='img-3' />
                  <img src={ImageFour} className='img-four' alt='img-4' />
                  <img src={ImageFive} className='img-five' alt='img-5' />
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
      
    )
}


export default Animation;
