import React from 'react'
import "../pages/rough.css"
import img from "../images/Discription img 1.webp"
import logo from "../images/Screenshot 2023-06-20 082831.jpg";
const Pr1 = () => {
  function closeAll() {
    document.getElementById("searchData").style.display="none";
  }
  return (
    <div onMouseDown={closeAll}>    
      <div id='body'>
      <h1 id='h1'>Broad experienced team for Turnkey Projects (Erection, Piping, Ducting, Plant Distribution designing etc.) of Conversion of Fuel Change Over, IBR & NON IBR Boilers, Thermic Fluid Heaters, Hot Water Generators of all type fuels (OIL, GAS & SOLID)</h1>
      <img id='img' src={img}/>
    </div>

    <div id='body2'>
        <img src={logo} alt='logo' id='logo'/>
        <h2 id='h2'>Send us an E-Mail for Inquiry and "Latest QUOTE"</h2>
        <div id='p'>
        <p id='p1'>Any Questions For The Services We Provide ?</p>
        <p id='p1'>Unsure Whethere We Provide Service, Which You Want ?</p>
        <p id='p1'>Want To Know About The Availability Of Spare Parts ?</p>
        <p id='p1'>Want To Know QUOTE ?</p>
        <p id='p1'>Send us an Email, To Let Us Know About Your Questions.</p>
      </div>
      <button onClick={() => window.location = 'mailto:saunak3000@gmail.com'} id='button'>Send E-mail</button>
      </div>
    </div>

  )
}

export default Pr1
