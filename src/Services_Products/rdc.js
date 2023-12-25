import React from 'react'
import "../pages/rough.css"
import img from "../images/RELAY DRIVER CARD.jpg"
import logo from "../images/Screenshot 2023-06-20 082831.jpg";
import rcd from './rcd';
const rdc = () => {
  function closeAll() {
    document.getElementById("searchData").style.display="none";
  }

  return (
    <div onMouseDown={closeAll}>    
      <div id='body'>
      <h1 id='h1'>RELAY DRIVER CARD</h1>
      <img id='img4' src={img}/>
    </div>

    <div id='body2'>
        <img src={logo} alt='logo' id='logo'/>
        <h2 id='h2'>Send us an E-Mail for Inquiry and "Latest QUOTE"</h2>
        <div id='p'>
        <p id='p1'>Any Query Regarding Services We Provide ?</p>
        <p id='p1'>Unsure Whethere We Provide Service, Which You Want Or Not ?</p>
        <p id='p1'>Want To Know About The Availability Of Spare Parts ?</p>
        <p id='p1'>Want To Know QUOTE ?</p>
        <p id='p1'>Just, Send us an Email</p>
      </div>
      <button onClick={() => window.location = 'mailto:saunak3000@gmail.com'} id='button'>Send E-mail</button>
      </div>
    </div>

  )
}

export default rdc