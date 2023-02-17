import React from "react";
import './card.css'
import bgmobile from '../images/bg-main-mobile.png'
import bgdesktop from '../images/bg-main-desktop.png'



const Card = () => {
    return(
        <div className='left-side'>
      <picture>
        <source media = "(min-width: 1024px)" srcSet={bgdesktop}/>
        <img  src={bgmobile} alt=''/>
      </picture>

      <div className="card">
        <article className="front-card"></article>
        <article className="back-card"></article>
      </div>
      </div>
    )
}

export default Card