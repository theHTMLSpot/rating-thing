import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation
} from "react-router-dom";


function App()
{
  return(
  <Router>
    <Routes>
        <Route exact path='/' element={<Rating />}/>
        <Route path='/thanks' element={<Thanks />}/>
    </Routes>
  </Router>
  );
}

function Rating(props) {

  const [rating, setRating] = useState(1);



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
          <Link to='/thanks' state={{rating}}>
            <button className='submit-button' type='submit' >
              submit
            </button>
          </Link>
        </header>
      </div>
    </div>
  );
  
}
function Thanks()
{

  const [averageRating, setResponse] = useState();

  useEffect( () => {
    const asyncFn = async ()=>{
      const responseHttp = await fetch("http://localhost:8000/average-rating");
      const response =  await responseHttp.text();
      console.log(response);
      setResponse(response);
    }
    asyncFn();
   
    
  }, [])
  

  let response = "";

  const { state } = useLocation();

  
  let rating = state.rating;

  if (rating<3)
    {
      response = `you gave us a ${rating} Awh thats too bad what can we do better`;
    }
  else if (rating >=3 && rating<5)
    {
      response = `you gave us a ${rating} Okay thats nice`;
    }
    else
    {
      response = `you gave us a ${rating} Thanks for the perfect rating`;
    }
  return(
      <div className="App">
  
        <div className='background'>
          <header className="experince-rating">
            <h1 className='heading'>Thanks for telling us about your experince</h1>
            
            <p className='paragraph'>{response}</p>
  
            <p className='paragraph'>{averageRating}</p>
          </header>
        </div>
      </div>
  );
}


export default App;