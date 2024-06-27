import React from 'react'
import "./Spost.css"

const Spost = () => {
  return (
    <>
    <div className='spost'>
        <div className="spost-wrapper">
          <img src="./jalbire.jpeg" alt="Jalbire_Jharana_Photo" 
          className='spost-img'/>
          <h1 className='spost-title'>
            Jalbire Jharana
            <div className='spost-edit'>
            <i className="spost-icon fa-solid fa-pen-to-square"></i>
            <i className="spost-icon fa-solid fa-trash"></i>            
            </div>
          </h1>

          <div className='spost-info'>
            <span className='spost-author'>
              Author: <b>Samin Thapa Kshtery</b>
            </span>
            <span className='spost-date'>
              1 hour ago
            </span>
            </div>
            <p className='spost-desc'>
Jalbire Jharana, nestled amidst the verdant hills of Bharatpur in Bagmati Province, Nepal, is a captivating waterfall that has enthralled visitors for generations. Its cascading waters, plunging down a series of rocky cliffs, create a mesmerizing spectacle that is both powerful and serene. The surrounding landscape, carpeted with lush greenery, adds to the idyllic charm of the place.
<br /><br />
The source of Jalbire Jharana can be traced to the pristine waters of the Mahabharat range. As these waters meander down the slopes, they gather momentum, eventually cascading down a vertical drop of approximately 50 meters. The force of the falling water creates a refreshing mist that hangs in the air, enveloping the area in a cool embrace. The sound of the gushing water, a symphony of nature's raw power, provides a sense of tranquility and escape from the hustle and bustle of everyday life.
<br /><br />
Jalbire Jharana is not just a scenic wonder; it also holds cultural significance for the local population. The indigenous communities revere the waterfall as a sacred site, believing it to be the abode of deities. Traditional festivals and rituals are often held near the waterfall, reflecting the deep connection between the people and this natural marvel.
<br /><br />
The increasing popularity of Jalbire Jharana has led to its development as a tourist destination. Visitors can take a refreshing dip in the pool formed at the base of the waterfall, or simply relax on the surrounding rocks and soak in the beauty of the surroundings. The trek leading up to the waterfall offers stunning views of the valley below, making it a favorite among nature enthusiasts.
<br /><br />
However, it is crucial to acknowledge the importance of responsible tourism practices when visiting Jalbire Jharana. Maintaining the ecological balance of the area is essential to preserve its pristine beauty. Visitors must dispose of waste properly and avoid any activities that could harm the delicate ecosystem.
<br /><br />
In conclusion, Jalbire Jharana is a captivating waterfall that embodies the natural splendor of Nepal. Its cascading waters, verdant surroundings, and cultural significance make it a must-visit destination for anyone seeking a refreshing escape into nature's embrace. By promoting responsible tourism practices, we can ensure that this natural wonder continues to enthrall visitors for generations to come.
            </p>
          
        </div>
    </div>
    </>
  )
}

export default Spost