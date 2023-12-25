import React from 'react'
import { Link } from 'react-router-dom';
import "../pages/rough.css"
import img from "../images/MULTIPORT VALVE.jpg";
import img1 from "../images/CHEMICAL DOZER.jpg";
import img2 from "../images/BUTTER FLY VALVE.webp";
import img3 from "../images/EJECTOR.jpg";
import img4 from "../images/PRESSURE PUMPS.jpg";
import img5 from "../images/CIRCULATION PUMPS.jpg";
import img6 from "../images/MEMBRANE.jpg";
import img7 from "../images/FILTER And All Other Spares.jpg";


const Water_Treatment_Product_Spares = () => {
  function closeAll() {
    document.getElementById("searchData").style.display="none";
  }

  return (
    <div onClick={closeAll} id='body3'>    
  <Link to="/mv">
    <div id='body4'>
   <img src={img} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>MULTIPORT VALVE</p>
    </div>
    </Link>

<Link to="/cd">
    <div id='body4'>
   <img src={img1} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>CHEMICAL DOZER</p>
    </div>
    </Link>

<Link to="/bfv">
    <div id='body4'>
   <img src={img2} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>BUTTER FLY VALVE</p>
    </div>
    </Link>

<Link to="/e">
    <div id='body4'>
   <img src={img3} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>EJECTOR</p>
    </div>
</Link>

<Link to="/pp">
    <div id='body4'>
   <img src={img4} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>PRESSURE PUMPS</p>
    </div>
    </Link>
    <Link to="/cp">
    <div id='body4'>
   <img src={img5} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>CIRCULATION PUMPS</p>
    </div>
    </Link>
    <Link to="/m2">
    <div id='body4'>
   <img src={img6} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>MEMBRANE</p>
    </div>
    </Link>
    <Link to="/faaos">
    <div id='body4'>
   <img src={img7} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>FILTER And All Other Spares</p>
    </div>
    </Link>
    </div>

  )
}

export default Water_Treatment_Product_Spares
