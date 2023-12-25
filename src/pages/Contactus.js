    import "../Services_Products/contact.css";
      import React from 'react'
      import Logo from "../images/Screenshot 2023-06-20 082831.jpg";
      import img5 from "../images/call.gif";
      import img4 from "../images/email1.gif";
      import img3 from "../images/location1.gif";
      
      export default function Contactus() {

       
        function closeAll() {
          document.getElementById("mySidenav").style.display="none";
          document.getElementById("searchData").style.display="none";
          document.getElementById("mySidenav").className = "noside";
        }
       

        return (
          <div onClick={closeAll}>
            <div className="contact">
            <div id="call">
            <img src={img5} alt="img" className="img"/>
            <p className="callp">+91 9978619042</p>
            </div>

            <div id="email">
            <img src={img4} alt="img" className="img1"/>
            <p className="callp1">saunak3000@gmail.com</p>
            </div>

            <div id="Address">
            <img src={img3} alt="img" className="img2"/>
            <p className="callp2">E-826, Ganesh Glory 11, Near Jagatpur Village,<br></br>Sarkhej Gandhinagar Highway,<br></br>Ahmedabad - 382470<br></br>Gujarat - INDIA</p>
            </div>

            </div>

            <div id='mainbody3'>
        <img src={Logo} alt='logo' id='logo3'/>
        <h2 id='h23'>Send us an E-Mail for Inquiry and "Latest QUOTE"</h2>
        <div id='p3'>
        <p id='p13'>Any Query Regarding Services We Provide ?</p>
        <p id='p13'>Unsure Whethere We Provide Service, Which You Want Or Not ?</p>
        <p id='p13'>Want To Know About The Availability Of Spare Parts ?</p>
        <p id='p13'>Want To Know QUOTE ?</p>
        <p id='p13'>Just, Send us an Email</p>
      </div>
      <button onClick={() => window.location = 'mailto:saunak3000@gmail.com'} id='button3'>Send E-mail</button>
      </div>
          </div>
        )
      }
      