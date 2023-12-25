import React from 'react'
import { Link } from 'react-router-dom';
import "../pages/rough.css"
import img from "../images/FILTER BAGS.jpg";
import img1 from "../images/PRESSURE SWITCH.jpg";
import img2 from "../images/FILTER CAGES.jpg";
import img3 from "../images/ELECTROMAGNETIC VIBRATOR.jpg";
import img4 from "../images/VENTURIES_PNEUMATIC VIBRATOR 2.jpg";
import img5 from "../images/ROTARY AIRLOCK VALVE.jpg";
import img6 from "../images/PULSE SOLENOID VALVE.jpg";
import img7 from "../images/HOPPER LEVEL SWITCH.jpg";
import img8 from "../images/SPARK ARRESTOR.webp";
import img9 from "../images/ZERO SPEED SWITCH.jpg";
import img10 from "../images/SLIDE GATE.jpg";
import img11 from "../images/TEMPERATURE SWITCH.jpg";
import img12 from "../images/TEMPERATURE INDICATING CONTROLLER.webp";
import img13 from "../images/HOPPER HEATER PAD.jpg";
import img14 from "../images/RUBBER HOSE & CLIP.jpg";
import img15 from "../images/SEQUENCE CONTROLLER.jpg";
import img16 from "../images/AIR FILTER REGULATOR.jpg";
import img17 from "../images/NEOPRENE RUBBER.jpg";
import img18 from "../images/GASKET HOPPER HEATER PAD.jpg";
import img19 from "../images/MANOMETER.jpg";
import img20 from "../images/RTD.jpg";
import img21 from "../images/LIMIT SWITCH.jpg";
import img22 from "../images/DIFFERENTIAL PRESSURE SWITCH.jpg";
const Bag_Filter_Spares = () => {
  function closeAll() {
    document.getElementById("searchData").style.display="none";
  }

  return (
    <div onClick={closeAll} id='body3'>    
  <Link to="/fb">
    <div id='body4'>
   <img src={img} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>FILTER BAGS</p>
    </div>
    </Link>

<Link to="/ps">
    <div id='body4'>
   <img src={img1} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>PRESSURE SWITCH</p>
    </div>
    </Link>

<Link to="/Filtercages">
    <div id='body4'>
   <img src={img2} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>FILTER CAGES</p>
    </div>
    </Link>

<Link to="/emv">
    <div id='body4'>
   <img src={img3} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>ELECTROMAGNETIC VIBRATOR</p>
    </div>
</Link>

<Link to="/V">
    <div id='body4'>
   <img src={img4} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>VENTURIES * PNEUMATIC VIBRATOR</p>
    </div>
    </Link>
    <Link to="/RAV">
    <div id='body4'>
   <img src={img5} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>ROTARY AIRLOCK VALVE</p>
    </div>
    </Link>
    <Link to="/PSV">
    <div id='body4'>
   <img src={img6} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>PULSE SOLENOID VALVE</p>
    </div>
    </Link>
    <Link to="/HLS">
    <div id='body4'>
   <img src={img7} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>HOPPER LEVEL SWITCH</p>
    </div>
    </Link>
<Link to="/SA">
    <div id='body4'>
   <img src={img8} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>SPARK ARRESTOR</p>
    </div>
    </Link>
    <Link to='/ZSS'>
    <div id='body4'>
   <img src={img9} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>ZERO SPEED SWITCH</p>
    </div>
    </Link>
    <Link to="/SG">
    <div id='body4'>
   <img src={img10} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>SLIDE GATE</p>
    </div>
    </Link>
    <Link to="/TS">
    <div id='body4'>
   <img src={img11} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>TEMPERATURE SWITCH</p>
    </div>
    </Link>
    <Link to="/TIC">
    <div id='body4'>
   <img src={img12} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>TEMPERATURE INDICATING CONTROLLER</p>
    </div>
    </Link>
    <Link to="/HHP">
    <div id='body4'>
   <img src={img13} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>HOPPER HEATER PAD</p>
    </div>
    </Link>
    <Link to="/RHC">
    <div id='body4'>
   <img src={img14} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>RUBBER HOSE & CLIP</p>
    </div>
    </Link>
    <Link to="/SC">
    <div id='body4'>
   <img src={img15} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>SEQUENCE CONTROLLER</p>
    </div>
    </Link>
    <Link to="/AFR">
    <div id='body4'>
   <img src={img16} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>AIR FILTER REGULATOR</p>
    </div>
    </Link>
    <Link to="/NR">
    <div id='body4'>
   <img src={img17} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>NEOPRENE RUBBER</p>
    </div>
    </Link>
<Link to="/GHHP">
    <div id='body4'>
   <img src={img18} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>GASKET HOPPER HEATER PAD</p>
    </div>
    </Link>
    <Link to="/m">
    <div id='body4'>
   <img src={img19} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>MANOMETER</p>
    </div>
    </Link>
    <Link to="/RTD">
    <div id='body4'>
   <img src={img20} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>RTD</p>
    </div>
    </Link>
    <Link to="/LS">
    <div id='body4'>
   <img src={img21} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>LIMIT SWITCH</p>
    </div>
    </Link>
    <Link to="/dps">
    <div id='body4'>
   <img src={img22} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>DIFFERENTIAL PRESSURE SWITCH</p>
    </div>
    </Link>
    </div>

  )
}

export default Bag_Filter_Spares
