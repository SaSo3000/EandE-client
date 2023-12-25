import React from "react";
import "./About.css";
import Logo from "../images/Screenshot 2023-06-20 082831.jpg";
function About() {

   function openSearch() {
      document.getElementById("searchData").style.display="block";
    }
    function closeAll() {
      document.getElementById("mySidenav").style.display="none";
      document.getElementById("searchData").style.display="none";
      document.getElementById("mySidenav").className = "noside";
    }
    function dropdown(){
      document.getElementById("link5").className = "DropDown";
    }
  
    function dropdownHide(){
      document.getElementById("link5").className = "DropDownHide";
    }
  
    function dropdown1(){
      document.getElementById("link7").className = "DropDown1";
    }
  
    function dropdownHide1(){
      document.getElementById("link7").className = "DropDownHide1";
    }
    function openmenu() {
      document.getElementById("mySidenav").className = "sidenav";
    }
    function closemenu() {
      document.getElementById("mySidenav").className = "noside";
    }

    return(
 <div id="main3" onClick={closeAll}>
    <div id="intro1">
                <h2 id="head1">INTRODUCTION</h2>
                <img src={Logo} alt="LOGO" id="Logo1"/>
                <p id="IntroPara1">We <span id="Name1"><b>ULTRAA TECH ENGINEERS.</b></span> are Ex. Thermax team of more than <span id="Experience1"><b>20 Years of experience</b></span> in Thermax Heating, Environment, Projects, 
                  Water Treatment & Chemical Treatment Products. We are very happy to inform you that we are providing spares / consumables, Turnkey Projects & Consultancy services. 
                  <br></br> We request to contact us for any of your requirements & give us an opportunity  by make us your registered vendor.</p>
            
            <div id="address1">
            <b>OFFICE ADDRESS : </b>

               ULTRAA TECH ENGINEERS
               E-826, GANESH GLORY-11
               NEAR MONEY PLANT
               SARKHEJ – GANDHINAGAR HIGHWAY
               JAGATPUR
               AHMEDABAD

            </div>
           

            </div>
            <div id="vision">
               <h2 id="v2">Vision</h2>
               <p id="v3">Implementing Engineering environment for turnkey project solution which extends the benefits to customers which increase efficiency at optimum cost with Right solution and Right quality.</p>
            </div>

            <div id="mision">
               <h2 id="m2">Mission</h2>
               <p id="m3">Guided by Relentless focus on most efficient solution with Quality Products and services, Application based solutions with most customer centric Approach.</p>
            </div>

            <div id="footer1">
      <div id='call'>
      
        <p id="f1"><span>&#9990;</span> +91 9978619042</p>
      
      </div>
      <div id='mail'>
      
      <p id="f1"><span>&#9993;</span> saunak3000@gmail.com</p>
      
      </div>
      <div id='location'>
      
        <p id="f2"><span>&#xf124;</span> <b> Location </b><br></br>
E-826, GANESH GLORY-11<br></br>
NEAR MONEY PLANT<br></br>
SARKHEJ – GANDHINAGAR HIGHWAY<br></br>
JAGATPUR<br></br>
AHMEDABAD<br></br>
</p>
      
      </div>
    </div>
      
            
 </div>       
    )
}

export default About;