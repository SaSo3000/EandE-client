import React from 'react'
import { Link } from 'react-router-dom';
import "../pages/rough.css"
import img from "../images/ring-main-system.png";
import img1 from "../images/FEED PUMP & ITS SPARES.jpg";
import img2 from "../images/Fuel pump.webp";
import img3 from "../images/thermic fluid pumps.webp";
import img4 from "../images/fuel nozzle.jpg";
import img5 from "../images/air nozzle.jpg";
import img6 from "../images/sequence controllers.webp";
import img7 from "../images/temp sensor.jpg";
import img8 from "../images/flame sensors.webp";
import img9 from "../images/IGNITION TRANSFORMERS & ELECTORDES.png";
import img10 from "../images/FIRE DOORS.webp";
import img11 from "../images/HOSE PIPES.jpg";
import img12 from "../images/All type of Burner Spares.jpeg";
import img13 from "../images/ECONOMISER.jpg";
import img14 from "../images/OPTIMISER.jpg";
import img15 from "../images/COIL (Non IBR Boiler-Thermopac-Hot Water Generator).webp";
import img16 from "../images/BLOWDOWN VALVE.jpg";
import img17 from "../images/PRESSURE GAUGES.jpg";
import img18 from "../images/PRESSURE SWITCHES.jpg";
import img19 from "../images/FIRE_GRATE BARS.jpg";
import img20 from "../images/REFRACTORY MATERIAL.jpg";
import img21 from "../images/SOLENOID VALVES (GAS_OIL).jpg";
import img22 from "../images/GAS PRV.jpg";
import img23 from "../images/GAS FILTER.webp";
import img24 from "../images/BURNER ROD.jpg";
import img25 from "../images/FD FAN.jpg";
import img26 from "../images/ID FAN.jpg";
import img27 from "../images/EXP. BELLOW.jpg";
import img28 from "../images/FUEL SCREW FEEDER.jpg";
import img29 from "../images/ROTARY FEEDER.jpg";
import img30 from "../images/MEMBRANE.jpg";
import img31 from "../images/INBED HEADER (IBR_NON-IBR).jpg";
import img32 from "../images/AIR PRE-HEATER (APH).jpg";
import img33 from "../images/WATER PRE-HEATER (WPH) And All Other Spares.jpg";

const Heating_Spares = () => {
  function closeAll() {
    document.getElementById("searchData").style.display="none";
  }

  return (
    <div onClick={closeAll} id='body3'>    
  <Link to="/rms">
    <div id='body4'>
   <img src={img} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>RING MAIN SYSTEM</p>
    </div>
    </Link>

<Link to="/fpis">
    <div id='body4'>
   <img src={img1} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>FEED PUMP & ITS SPARES</p>
    </div>
    </Link>

<Link to="/fp">
    <div id='body4'>
   <img src={img2} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>FUEL PUMP</p>
    </div>
    </Link>

<Link to="/tfp">
    <div id='body4'>
   <img src={img3} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>THERMIC FLUID PUMPS</p>
    </div>
</Link>

<Link to="/fn">
    <div id='body4'>
   <img src={img4} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>FUEL NOZZLE</p>
    </div>
    </Link>
    <Link to="/an">
    <div id='body4'>
   <img src={img5} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>AIR NOZZLE (Monarch/Danfoss/Bergonzo)</p>
    </div>
    </Link>
    <Link to="/sc2">
    <div id='body4'>
   <img src={img6} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>SEQUENCE CONTROLLERS</p>
    </div>
    </Link>
    <Link to="/ts2">
    <div id='body4'>
   <img src={img7} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>TEMP. SENSORS</p>
    </div>
    </Link>
<Link to="/fs">
    <div id='body4'>
   <img src={img8} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>FLAME SENSORS</p>
    </div>
    </Link>
    <Link to='/ite'>
    <div id='body4'>
   <img src={img9} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>IGNITION TRANSFORMERS & ELECTORDES</p>
    </div>
    </Link>
    <Link to="/fd">
    <div id='body4'>
   <img src={img10} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>FIRE DOORS</p>
    </div>
    </Link>
    <Link to="/hp">
    <div id='body4'>
   <img src={img11} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>HOSE PIPES</p>
    </div>
    </Link>
    <Link to="/atobs">
    <div id='body4'>
   <img src={img12} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>All type of Burner Spares</p>
    </div>
    </Link>
    <Link to="/e3">
    <div id='body4'>
   <img src={img13} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>ECONOMISER</p>
    </div>
    </Link>
    <Link to="/o">
    <div id='body4'>
   <img src={img14} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>OPTIMISER</p>
    </div>
    </Link>
    <Link to="/coil">
    <div id='body4'>
   <img src={img15} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>COIL (Non IBR Boiler-Thermopac-Hot Water Generator)</p>
    </div>
    </Link>
    <Link to="/bv">
    <div id='body4'>
   <img src={img16} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>BLOWDOWN VALVE</p>
    </div>
    </Link>
    <Link to="/pg">
    <div id='body4'>
   <img src={img17} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>PRESSURE GAUGES</p>
    </div>
    </Link>
<Link to="/ps2">
    <div id='body4'>
   <img src={img18} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>PRESSURE SWITCHES</p>
    </div>
    </Link>
    <Link to="/fgb">
    <div id='body4'>
   <img src={img19} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>FIRE/GRATE BARS</p>
    </div>
    </Link>
    <Link to="/rm">
    <div id='body4'>
   <img src={img20} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>REFRACTORY MATERIAL</p>
    </div>
    </Link>
    <Link to="/svgo">
    <div id='body4'>
   <img src={img21} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>SOLENOID VALVES (GAS/OIL)</p>
    </div>
    </Link>
    <Link to="/gp">
    <div id='body4'>
   <img src={img22} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>GAS PRV</p>
    </div>
    </Link>
    <Link to="/gf">
    <div id='body4'>
   <img src={img23} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>GAS FILTER</p>
    </div>
    </Link>
    <Link to="/br">
    <div id='body4'>
   <img src={img24} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>BURNER ROD</p>
    </div>
    </Link>
    <Link to="/ff">
    <div id='body4'>
   <img src={img25} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>FD FAN</p>
    </div>
    </Link>
    <Link to="/if2">
    <div id='body4'>
   <img src={img26} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>ID FAN</p>
    </div>
    </Link>
    <Link to="/eb">
    <div id='body4'>
   <img src={img27} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>EXP. BELLOW</p>
    </div>
    </Link>

    <Link to="/fsf">
    <div id='body4'>
   <img src={img28} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>FUEL SCREW FEEDER</p>
    </div>
    </Link>
    <Link to="/rf">
    <div id='body4'>
   <img src={img29} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>ROTARY FEEDER</p>
    </div>
    </Link>
    <Link to="/mp">
    <div id='body4'>
   <img src={img30} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>MEMBRANE PANEL (IBR)</p>
    </div>
    </Link>
    <Link to="/ih">
    <div id='body4'>
   <img src={img31} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>INBED HEADER (IBR/NON-IBR)</p>
    </div>
    </Link>
    <Link to="/apha">
    <div id='body4'>
   <img src={img32} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>AIR PRE-HEATER (APH)</p>
    </div>
    </Link>
    <Link to="/water">
    <div id='body4'>
   <img src={img33} alt='img' id='FilterBagsImg'/>
   <p id='FilterBagsP'>WATER PRE-HEATER (WPH) And All Other Spares</p>
    </div>
    </Link>
    </div>

  )
}

export default Heating_Spares