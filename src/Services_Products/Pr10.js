import React from 'react'
import "../pages/rough.css"
import img from "../images/Discription img1-2.jpg"
import logo from "../images/Screenshot 2023-06-20 082831.jpg";
const Pr11 = () => {
  function closeAll() {
    document.getElementById("searchData").style.display="none";
  }
  return (
    <div onMouseDown={closeAll}>    
      <div id='body'>
      <h1 id='h1'>Provide Services in Form of Annual Service Contract & Emergency Breakdown Services</h1>
      <img id='img1' src={img}/>
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

export default Pr11
