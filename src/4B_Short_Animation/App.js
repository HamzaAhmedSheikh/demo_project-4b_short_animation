import React from 'react'
import './style.css'

import PictureOne from './images/pic-1.png'

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
                  <img src={PictureOne} className='pic-one' alt='pic1' />
               </div>  
             </div>
           </div>
          </div>            
        </div>

        <div className="carousel-item">
          
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
