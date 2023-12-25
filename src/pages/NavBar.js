import React,{useState} from "react";
import '../styles.css';
import Data from "../Data.json";
import searchIcon from "../images/—Pngtree—vector search icon_4139928.png";
import { Link } from "react-router-dom";
import imgs from "../images/menu8.png";

<style>
@import url('https://fonts.googleapis.com/css2?family=Eczar&family=Work+Sans&display=swap');
</style>



  
const NavBar = () => {
    const [state, setState] = useState("");
    
  


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

  
 
  
 
  return (
    

    
<div>
  

    <div className="main">
  
    
    <span id="image90" alt="img" onClick={openmenu}>&#9776;</span>
 

      <div className="header">

      <Link id="link1" className="link1" to="/" onClick={closeAll}>Home</Link>
         <Link id="link2"  className="link2"  to="/about" onClick={closeAll}>About</Link>
         <Link id="link10" className="link10" to="/contactus" onClick={closeAll}>Contact Us</Link>
         <Link id="link3" className="link3" to="/services" onClick={closeAll} onMouseOver={dropdown1} onMouseLeave={dropdownHide1}>Services &#11163;</Link>
         <Link id="link4" to="/Products" className="link4" onClick={closeAll} onMouseOver={dropdown} onMouseLeave={dropdownHide}>Products &#11163;</Link>
         
      
         
        <h2 id="heading" onMouseDown={closeAll}>ULTRAA TECH ENGINEERS</h2>
       
        <input  id="inputField" type="text"placeholder="Search Here..." onClick={openSearch} onChange={e => {setState(e.target.value)}}/>
        <img className="images" id="search" src={searchIcon} alt="search" height="40px" width="35px" onClick={closeAll}/>
        
      </div>
      
      
    <div id="searchData">
         {
   Data.filter((val) => {
    if(state === "") {
      return val;
    }
    else if(val.name.toLocaleLowerCase().includes(state.toLowerCase())){
      return val;
    }
   }).map((val,key) => {
     return (
     <div>
      <Link id="link" to={val.link} onClick={closeAll}>{val.name}</Link>
      </div> 
     )
   })
 }
          </div>
          <br></br>
          <div id="link5" onMouseOver={dropdown} className="DropDownHide" onMouseLeave={dropdownHide}>
          <Link to="/Heating Spares" onClick={closeAll} className="link6">Heating Spares</Link>
          <Link to="/ESP spares" onClick={closeAll} className="link6">ESP Spares</Link>
          <Link to="/Oil and chemical" onClick={closeAll} className="link6">Oil and chemical</Link>
          <Link to="/Water treatment product spares" onClick={closeAll} className="link6">Water treatment product spares</Link>
          <Link to="/Bag filter spares" onClick={closeAll} className="link6">Bag Filter Spares </Link>
          </div>

          <div id="link7" onClick={closeAll} onMouseOver={dropdown1} className="DropDownHide1" onMouseLeave={dropdownHide1}>
          <Link to="pr1" onClick={closeAll} className="link8">Broad experienced team for Turnkey Projects Erection, Piping, Ducting, Plant Distribution designing etc. of Conversion of Fuel Change Over, IBR & NON IBR Boilers, Thermic Fluid Heaters, Hot Water Generators of all type fuels OIL, GAS & SOLID</Link>
          <Link to="pr2" onClick={closeAll} className="link8">Fabricate/supply Self Supported/Wall Supported/ Guy Rope Chimney As per IS 6533 & General Engineering Practise Design  & All type of Fabricated Storage/Service Tanks in MS & SS Vertical/Horizonal/Cylindrical</Link>
          <Link to="pr3" onClick={closeAll} className="link8">Supply & Erection of Fuel Handling System Crusher, Vibrator, Elevator etc.</Link>
          <Link to="pr4"  onClick={closeAll} className="link8">Supply & Erection of Refractory of Solid Fuel Units</Link>
          <Link to="pr5"  onClick={closeAll} className="link8">Insulation work of Steam Line, Thermic Fluid Line, Air Line, Water Line, Fluegas Ducting </Link>
          <Link to="pr6"  onClick={closeAll} className="link8">Provide Services in Form of Annual Service Contract ASC & Emergency Breakdown Service, Faster & more competitively priced supply of Recommended/Consumable spares for any of above Heating Products</Link>
          <Link to="pr7"  onClick={closeAll} className="link8">Audit of Existing/New Steam Lines & Thermic Fluid circuits</Link>
          <Link to="pr8" onClick={closeAll} className="link8">Automation Draft Control/Pr. Control/Level Control etc. of all Heating Products & Heat User Process</Link>
          </div>

      <div id="mySidenav" class="noside">
      <p id="close" onClick={closemenu}>&#10060;</p>
        <Link id="sides" className="side" to="/" onClick={closeAll}>Home</Link>
         <Link id="sides" className="side" to="/about" onClick={closeAll}>About</Link>
         <Link id="sides" className="side" to="/contactus" onClick={closeAll}>Contact Us</Link>
         <Link id="sides" className="side" to="/services" onClick={closeAll} onMouseOver={dropdown1} onMouseLeave={dropdownHide1}>Services &#11163;</Link>
         <Link id="sides" className="side" to="/Products" onClick={closeAll} onMouseOver={dropdown} onMouseLeave={dropdownHide}>Products &#11163;</Link>
    </div>

           </div>
      
           </div>
  )
}

export default NavBar;
