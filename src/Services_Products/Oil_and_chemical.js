
import React from 'react'
import { Link } from 'react-router-dom';
import "../pages/rough.css"
import img from "../images/Boiler Feed Water Treatment.jpg";
import img1 from "../images/RO.jpg";
import img2 from "../images/FUEL OIL.jpg";



const Oil_and_chemical = () => {
  function closeAll() {
    document.getElementById("searchData").style.display="none";
  }

  return (
    <div onClick={closeAll} id='body3'>    
  <Link to="/bfwt">
    <div id='body4'>
   <img src={img} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>Boiler Feed Water Treatment</p>
    </div>
    </Link>

<Link to="/ro">
    <div id='body4'>
   <img src={img1} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>RO</p>
    </div>
    </Link>

<Link to="/fo">
    <div id='body4'>
   <img src={img2} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>FUEL OIL</p>
    </div>
</Link>

    </div>

  )
}

export default Oil_and_chemical