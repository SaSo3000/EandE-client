import React from 'react'
import "../pages/rough.css"
import img from "../images/Discription img2 (1).jpg"
import logo from "../images/Screenshot 2023-06-20 082831.jpg";
const Pr2 = () => {
  function closeAll() {
    document.getElementById("searchData").style.display="none";
  }

  return (
    <div onMouseDown={closeAll}>    
      <div id='body'>
      <h1 id='h1'>Fabricate/supply Self Supported/Wall Supported/ Guy Rope Chimney (As per IS 6533 & General Engineering Practise Design)  & All type of Fabricated Storage/Service Tanks in MS & SS (Vertical/Horizonal/Cylindrical)</h1>
      <img id='img1' src={img}/>
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

export default Pr2
