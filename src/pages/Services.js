import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
function Services() {

   function closeAll() {
      document.getElementById("searchData").style.display="none";
      
    }

   return(
<div>
<Link to="/pr1" onClick={closeAll} className="link8">Broad experienced team for Turnkey Projects Erection, Piping, Ducting, Plant Distribution designing etc. of Conversion of Fuel Change Over, IBR & NON IBR Boilers, Thermic Fluid Heaters, Hot Water Generators of all type fuels OIL, GAS & SOLID</Link>
          <Link to="/pr2" onClick={closeAll} className="link8">Fabricate/supply Self Supported/Wall Supported/ Guy Rope Chimney As per IS 6533 & General Engineering Practise Design  & All type of Fabricated Storage/Service Tanks in MS & SS Vertical/Horizonal/Cylindrical</Link>
          <Link to="/pr3" onClick={closeAll} className="link8">Supply & Erection of Fuel Handling System Crusher, Vibrator, Elevator etc.</Link>
          <Link to="/pr4"  onClick={closeAll} className="link8">Supply & Erection of Refractory of Solid Fuel Units</Link>
          <Link to="/pr5"  onClick={closeAll} className="link8">Insulation work of Steam Line, Thermic Fluid Line, Air Line, Water Line, Fluegas Ducting </Link>
          <Link to="/pr6"  onClick={closeAll} className="link8">Provide Services in Form of Annual Service Contract ASC & Emergency Breakdown Service, Faster & more competitively priced supply of Recommended/Consumable spares for any of above Heating Products</Link>
          <Link to="/pr7"  onClick={closeAll} className="link8">Audit of Existing/New Steam Lines & Thermic Fluid circuits</Link>
          <Link to="/pr8" onClick={closeAll} className="link8">Automation Draft Control/Pr. Control/Level Control etc. of all Heating Products & Heat User Process</Link>
</div>       
   )
}
export default Services;