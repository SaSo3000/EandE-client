import "./rough.css";
import React from "react";
import { Link } from "react-router-dom";
function Products() {
   
   function closeAll() {
      
      document.getElementById("searchData").style.display="none";
   
    }

   return(
 <div id="body">
              <Link to="/Heating Spares" onClick={closeAll} className="link6">Heating Spares</Link>
          <Link to="/ESP spares" onClick={closeAll} className="link6">ESP Spares</Link>
          <Link to="/Oil and chemical" onClick={closeAll} className="link6">Oil and chemical</Link>
          <Link to="/Water treatment product spares" onClick={closeAll} className="link6">Water treatment product spares</Link>
          <Link to="/Bag filter spares" onClick={closeAll} className="link6">Bag Filter Spares </Link>
 </div>       
    )
}
export default Products;