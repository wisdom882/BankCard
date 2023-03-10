import React, { useState } from "react";
import "./form.css"

import './card.css'
import bgmobile from '../images/bg-main-mobile.png'
import bgdesktop from '../images/bg-main-desktop.png'
import logo from '../images/card-logo.svg'

const Form = () =>{

       const [cardName, setName] = useState("");
       const [cardNumber, setCardNumber] = useState("");
       const [date, setDate] = useState("");
       const [cvc, setCvc] = useState("")

      const handleCardNumber = (e) =>{
        if(e.target.value <= 9999999999999999999)
        {
          setCardNumber(e.target.value)
        }
      }

       return(
       
              <div className="container">
              <div className='left-side'>
              <picture>
                  <source media = "(min-width: 1024px)" srcSet={bgdesktop}/>
                  <img  src={bgmobile} alt=''/>
              </picture>
  
              
                  <article className="front-card">
                      <img src={logo} alt ="" className="logo"/>
                      <div className="details">
                      <h1 className="number">{cardNumber}</h1>
                      <div className="name-month">
                          <h3 className="card-name">{cardName}</h3>
                          <h3 className="month">{date}</h3>
                      </div>
                      </div>
                      
                     
                  </article>
                  <article className="back-card"><h3 className="cvc">{cvc}</h3></article>
              
        </div>




        <div className='right-side'>
        <form className="form-container">
          <div className='form'>
            <label>CardHolder Name</label>
            <input type="text" 
                    name="cardholder_name"
                    id='cardholder_name'
                    placeholder='eg. Jane Appleased'
                    required
                    value={cardName}
                    onChange={(e) => setName(e.target.value)}
             />
  
            <label>Card Number</label>
            <input type="number" 
                    name="card_number"
                    id='card_number'
                    placeholder='eg. 1234 5678 9123 0000'
                    maxLength={19}
                    required
                    value={cardNumber}
                    onChange = {handleCardNumber}
                   
             />
             <div className="cvc-exp">
             <label>EXP. Date(MM/YY)</label>
             <label className="cvc-label">CVC</label>
             </div>
            
          
            <div className='exp-date'>
            <input type="month" 
                    name="expiry_date"
                    id="expiry_date"
                    placeholder='MM'
                    required
                    value={date}
                    onChange={(e) => setCardNumber(e.target.value)}
             />
  
            <input type="month" 
                    name="expiry_date"
                    id="expiry_date"
                    placeholder='YY'
                    required
                    value={date}
                     onChange={(e) => setDate(e.target.value)}
             />
             
            
              <input type="number" 
                    name="cvc"
                    id='cvc'
                    placeholder='eg. 123'
                    maxLength={3}
                    required
                    value={cvc}
                     onChange={(e) => setCvc(e.target.value)}
             />
            
            
            </div>
            <button>Confirm</button>
          </div>
            
        </form>
        </div>
              </div>
       
    )
   
}

export default Form;