import Logo from "../images/Screenshot 2023-06-20 082831.jpg";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import "../Services_Products/temp.css";
const Home = () => {
  
  const [State1,setState1] = useState(false);
  const [State2,setState2] = useState(false);
  const [State3,setState3] = useState(false);
  

   
    
      function closeAll() {
        document.getElementById("mySidenav").style.display="none";
        document.getElementById("searchData").style.display="none";
        document.getElementById("mySidenav").className = "noside";
      }
      
       function changeValue1() {
        setState1(!State1)
        var x = document.getElementById("bt1");
        if(x.innerHTML === "+"){
          x.innerHTML = "-";
        }
        else{
          x.innerHTML = "+"
        }
      }

      function changeValue2() {
        setState2(!State2)
        var x = document.getElementById("bt2");
        if(x.innerHTML === "+"){
          x.innerHTML = "-";
        }
        else{
          x.innerHTML = "+"
        }
      }

      function changeValue3() {
        setState3(!State3)
        var x = document.getElementById("bt3");
        if(x.innerHTML === "+"){
          x.innerHTML = "-";
        }
        else{
          x.innerHTML = "+"
        }
      }
      
      
  return (
    <div className="body" onClick={closeAll}>
            <div id="intro">
                <h2 id="head">INTRODUCTION</h2>
                <img src={Logo} alt="LOGO" id="Logo"/>
                <p id="IntroPara">We <span id="Name"><b>ULTRAA TECH ENGINEERS.</b></span> are Ex. Thermax team of more than <span id="Experience"><b>20 Years of experience</b></span> in Thermax Heating, Environment, Projects, 
                  Water Treatment & Chemical Treatment Products. We are very happy to inform you that we are providing spares / consumables, Turnkey Projects & Consultancy services. 
                  <br></br> We request to contact us for any of your requirements & give us an opportunity  by make us your registered vendor.</p>
            </div>
            <div id="OurServices">
                <h2 id="OurServices1">Our Services &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#10239;</span></h2>
                <div id="OurServices2">
                  <ul id="ListServices">
                    <h4 id="mobServices">Our Services</h4>
                  <li><span>&#10547;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TECHNICAL LAYOUT</li><br></br>
                  <li><span>&#10547;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADVICE OF LOCATION & ELEVATION</li><br></br>
                  <li><span>&#10547;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATA SHEET PREPARATION</li><br></br>
                  <li><span>&#10547;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HEAT & MASS BALANCE WITH HEAT LOAD CALCULATION</li><br></br>
                  <li><span>&#10547;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DESIGN FOR SIZE OF VALVES, PIPING & EQUIPMENTS
BASIC ENGINEERING & DETAIL ENGINEERING IN</li><br></br>
                  </ul>
                </div>
            </div>
          
            <div id="OurProducts">
              
                <div id="OurProducts2">
                 
                <ul id="ListProducts">
                <h4 id="mobProducts">Our Products</h4>
                      <li id="li1">
                  <span>&#10547;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="bt" onClick={changeValue1}>HEATING  PRODUCTS – BURNER, IBR/NON IBR STEAM BOILER, THERMIC FLUID HEATER, HOT WATER GENERATOR <span id="bt1">+</span></button>
                
                  </li>
                  <div id="liitem1" className={State1 ? "WhenOn" : "WhenOff"}>
                          <ul>
                            <li id="id4"><Link to="pr1" id="id3">Broad experienced team for Turnkey Projects Erection, Piping, Ducting, Plant Distribution designing etc. of Conversion of Fuel Change Over, IBR & NON IBR Boilers, Thermic Fluid Heaters, Hot Water Generators of all type fuels OIL, GAS & SOLID</Link></li>
                            <li id="id4"><Link to="pr2" id="id3">Fabricate/supply Self Supported/Wall Supported/ Guy Rope Chimney As per IS 6533 & General Engineering Practise Design  & All type of Fabricated Storage/Service Tanks in MS & SS Vertical/Horizonal/Cylindrical</Link></li>
                            <li id="id4"><Link to="pr3" id="id3">Supply & Erection of Fuel Handling System Crusher, Vibrator, Elevator etc.</Link></li>
                            <li id="id4"><Link to="pr4" id="id3">Supply & Erection of Refractory of Solid Fuel Units</Link></li>
                            <li id="id4"><Link to="pr5" id="id3">Insulation work of Steam Line, Thermic Fluid Line, Air Line, Water Line, Fluegas Ducting </Link></li>
                            <li id="id4"><Link to="pr6" id="id3">Provide Services in Form of Annual Service Contract ASC & Emergency Breakdown Service, Faster & more competitively priced supply of Recommended/Consumable spares for any of above Heating Products</Link></li>
                            <li id="id4"><Link to="pr7" id="id3">Audit of Existing/New Steam Lines & Thermic Fluid circuits</Link></li>
                            <li id="id4"><Link to="pr8" id="id3">Automation Draft Control/Pr. Control/Level Control etc. of all Heating Products & Heat User Process</Link></li>
                          </ul>
                  </div>
                  
                  <br></br>
                  
                  <li id="li1">
                  <span>&#10547;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="bt" onClick={changeValue2}>ENVIRONMENT PRODUCTS – MDC, BAG FILTER, SCRUBBER, ESP <span id="bt2">+</span></button>
                  
                  </li>
                  <div id="liitem1" className={State2 ? "WhenOn" : "WhenOff"}>
                          <ul>
                            <li id="id4"><Link to="pr9" id="id3">Fabricate/Supply MDC, CYCLONE, BAG FILTER, SCRUBBER, ESP (Workshop & Site Fabrication Both) as per required GPCB Norms Fluegas Outlet</Link></li>
                            <li id="id4"><Link to="pr10" id="id3">Provide Services in Form of Annual Service Contract & Emergency Breakdown Services</Link></li>
                            <li id="id4"><Link to="pr11" id="id3">Faster & more competitively priced supply of Recommended/Consumable spares for any of above Environment Products</Link></li>
                            
                          </ul>
                  </div>
                  <br></br>
                  
                  <li id="li1">
                  <span>&#10547;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="bt" onClick={changeValue3}>WATER TREATMENT PRODUCTS <span id="bt3">+</span></button>
                  
                  </li>
                  <div id="liitem1" className={State3 ? "WhenOn" : "WhenOff"}>
                          <ul>
                            <li id="id4"><Link to="pr12" id="id3">Broad Experienced Team for Piping of Softner, RO, DM, ETP & STP</Link></li>
                            <li id="id4"><Link to="pr13" id="id3">-	Fabrication/Supply of Softner, RO, DM, ETP & STP </Link></li>
                            <li id="id4"><Link to="pr14" id="id3">-	Faster & more competitively priced supply of Recommended/Consumable spares for any of above All Water Treatment Products</Link></li>
                           
                          </ul>
                  </div>
                  <br></br>
                  </ul>
                </div>
                <h2 id="OurProducts1">Our Products &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#8668;</span></h2>

            </div>

            <div id='mainbody2'>
        <img src={Logo} alt='logo' id='logo2'/>
        <h2 id='h22'>Send us an E-Mail for Inquiry and "Latest QUOTE"</h2>
        <div id='p2'>
        <p id='p12'>Any Query Regarding Services We Provide ?</p>
        <p id='p12'>Unsure Whethere We Provide Service, Which You Want Or Not ?</p>
        <p id='p12'>Want To Know About The Availability Of Spare Parts ?</p>
        <p id='p12'>Want To Know QUOTE ?</p>
        <p id='p12'>Just, Send us an Email</p>
      </div>
      <button onClick={() => window.location = 'mailto:saunak3000@gmail.com'} id='button2'>Send E-mail</button>
      </div>

      <div id="footer">
      <div id='call'>
      
        <p id="f"><span>&#9990;</span> +91 9978619042</p>
      
      </div>
      <div id='mail'>
      
      <p id="f"><span>&#9993;</span> saunak3000@gmail.com</p>
      
      </div>
      <div id='location'>
      
        <p id="F"><span>&#xf3c5;</span> <b>Location</b> <br></br>
E-826, GANESH GLORY-11<br></br>
NEAR MONEY PLANT<br></br>
SARKHEJ – GANDHINAGAR HIGHWAY<br></br>
JAGATPUT<br></br>
AHMEDABAD<br></br>
 </p>
      
      </div>
    </div>
         </div>
  )
}

export default Home
