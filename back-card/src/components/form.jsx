import React from 'react'
import "./form.css"
const Form = () =>{
    return(
        <div className='right-side'>
        <form>
          <div className='form'>
            <label>CardHolder Name</label>
            <input type="text" 
                    name="cardholder_name"
                    id='cardholder_name'
                    placeholder='eg. Jane Appleased'
                    required
             />
  
            <label>Card Number</label>
            <input type="number" 
                    name="card_number"
                    id='card_number'
                    placeholder='eg. 1234 5678 9123 0000'
                    maxLength={19}
                    required
             />
            <label>EXP. Date(MM/YY)</label>
          
            <div className='exp-date'>
            <input type="month" 
                    name="expiry_date"
                    id="expiry_date"
                    placeholder='MM'
                    required
             />
  
            <input type="month" 
                    name="expiry_date"
                    id="expiry_date"
                    placeholder='YY'
                    required
             />
             <div className='cvc'>
             <label >CVC</label>
              <input type="number" 
                    name="cvc"
                    id='cvc'
                    placeholder='eg. 123'
                    maxLength={3}
                    required
             />
             </div>
            
            </div>
            <button>Confirm</button>
          </div>
            
        </form>
        </div>
    )
   
}

export default Form;