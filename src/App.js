
import './App.css';
import './index.css'
import { useState } from 'react';
import {React} from 'react'


function App()
{
  const [rating, setRating] = useState();

  function GetRadio(radio)
  {
    setRating(radio.target.value);
  }

  return (
    <div className="App">

      <div className='background'>
        <header className="experince-rating">
          <h1 className='heading'>Tell us about your experince</h1>

          <p className='paragraph'>We value your input! Please tell us how your experince was</p>

          <ul id='rating'>

             
            <li>
              <input type='radio' name='rating' value={1} onChange={GetRadio} id="1" />
              <label for='1' className='rating-label'>1</label>
              
            </li>

            <li>
              <input type='radio' name='rating' value={2} onChange={GetRadio} id="2" />
              <label for='2' className='rating-label'>2</label>
            </li>
            <li>
              <input type='radio' name='rating' value={3} onChange={GetRadio} id="3" />
              <label for='3' className='rating-label'>3</label> 
            </li>

            <li>
              <input type='radio' name='rating' value={4} onChange={GetRadio} id="4" />
              <label for='4' className='rating-label'>4</label>
            </li>
            
            <li>
              <input type='radio' name='rating' value={5} onChange={GetRadio} id="5" />
              <label for='5' className='rating-label'>5</label>
              
            </li>

          </ul>
            <button className='submit-button' type='submit' >
              submit
            </button>
        </header>
      </div>
    </div>
  );
}

export default App();