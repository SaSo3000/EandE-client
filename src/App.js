import React from "react";
import {Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import './styles.css';
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Pr1 from "./Services_Products/Pr1";
import Pr2 from "./Services_Products/Pr2";
import Pr3 from "./Services_Products/Pr3";
import Pr4 from "./Services_Products/Pr4";
import Pr5 from "./Services_Products/Pr5";
import Pr6 from "./Services_Products/Pr6";
import Pr7 from "./Services_Products/Pr7";
import Pr8 from "./Services_Products/Pr8";
import Pr9 from "./Services_Products/Pr9";
import Pr10 from "./Services_Products/Pr10";
import Pr11 from "./Services_Products/Pr11";
import Pr12 from "./Services_Products/Pr12";
import Pr13 from "./Services_Products/Pr13";
import Pr14 from "./Services_Products/Pr14";
import Heating_Spares from "./Services_Products/Heating_Spares";
import ESP_Spares from "./Services_Products/ESP_spares";
import Oil_and_chemical from "./Services_Products/Oil_and_chemical";
import Water_treatment_product_spares from "./Services_Products/Water_Treatment_Product_Spares";
import Bag_filter_spares from "./Services_Products/Bag_Filter_Spares";
import ZSS from "./Services_Products/ZSS";
import V from "./Services_Products/Venturiespneumatic";
import TS from "./Services_Products/TS";
import TIC from "./Services_Products/TIC";
import SG from "./Services_Products/SG";
import SC from "./Services_Products/SC";
import SA from "./Services_Products/SA";
import RTD from "./Services_Products/RTD";
import RHC from "./Services_Products/RHC";
import RAV from "./Services_Products/RAV";
import PSV from "./Services_Products/PSV";
import Pressureswitch from "./Services_Products/Pressureswitch";
import NR from "./Services_Products/NR";
import M from "./Services_Products/M";
import LS from "./Services_Products/LS";
import HLS from "./Services_Products/HLS";
import HHP from "./Services_Products/HHP";
import GHHP from "./Services_Products/GHHP";
import FilterBags from "./Services_Products/FilterBags";
import Filtercages from "./Services_Products/Filtercages";
import Electromagneticviberator from "./Services_Products/Electromagneticviberator"
import DPS from "./Services_Products/DPS";
import AFR from "./Services_Products/AFR";
import PS from "./Services_Products/PS";
import Mv from "./Services_Products/mv";
import Cd from "./Services_Products/cd";
import Bfv from "./Services_Products/bfv";
import E from "./Services_Products/e";
import Pp from "./Services_Products/pp";
import Cp from "./Services_Products/cp";
import M2 from "./Services_Products/m2";
import Faaos from "./Services_Products/faaos";
import Rcl from "./Services_Products/rcl";
import Hbt from "./Services_Products/hbt";
import Tcr from "./Services_Products/tcr";
import Cfh from "./Services_Products/cfh";
import Fde from "./Services_Products/fde";
import Cee from "./Services_Products/cee";
import Smps from "./Services_Products/smps";
import Hls2 from "./Services_Products/hls2";
import Rdc from "./Services_Products/rdc";
import Gds from "./Services_Products/gds";
import Gaor from "./Services_Products/gaor";
import Affb from "./Services_Products/affb";
import Rav2 from "./Services_Products/rav2";
import Rcd from "./Services_Products/rcd";
import H_LS from "./Services_Products/H_LS";
import Ccd from "./Services_Products/ccd";
import Zss1 from "./Services_Products/zss1";
import Dcr from "./Services_Products/dcr";
import Tsh from "./Services_Products/tsh";
import Pfm from "./Services_Products/pfm";
import Evr from "./Services_Products/evr";
import Pab from "./Services_Products/pab";
import Pv from "./Services_Products/pv";
import Bds from "./Services_Products/bds";
import Dis from "./Services_Products/dis";
import Ejm from "./Services_Products/ejm";
import Multi from "./Services_Products/multi";
import Pcr from "./Services_Products/pcr";
import Rms from "./Services_Products/Rms";
import Fpis from "./Services_Products/Fpis";
import Fp from "./Services_Products/Fp";
import Tfp from "./Services_Products/Tfp";
import Fn from "./Services_Products/Fn";
import An from "./Services_Products/An";
import Sc2 from "./Services_Products/Sc2";
import Ts2 from "./Services_Products/Ts2";
import Fs from "./Services_Products/Fs";
import Ite from "./Services_Products/Ite";
import Fd from "./Services_Products/Fd";
import Hp from "./Services_Products/Hp";
import Atobs from "./Services_Products/Atobs";
import E3 from "./Services_Products/E2";
import O from "./Services_Products/O";
import Coil from "./Services_Products/Coil";
import Bv from "./Services_Products/Bv";
import Pg from "./Services_Products/Pg";
import Ps2 from "./Services_Products/Ps2";
import Fgb from "./Services_Products/Fgb";
import Rm from "./Services_Products/Rm";
import Svgo from "./Services_Products/Svgo";
import Gp from "./Services_Products/Gp";
import Gf from "./Services_Products/Gf";
import Br from "./Services_Products/Br";
import Ff from "./Services_Products/Ff";
import If2 from "./Services_Products/If";
import Eb from "./Services_Products/Eb";
import Fsf from "./Services_Products/Fsf";
import Rf from "./Services_Products/Rf";
import Mp from "./Services_Products/Mp";
import Ih from "./Services_Products/Ih";
import Apha from "./Services_Products/Apha";
import Water from "./Services_Products/Water";  
import Bfwt from "./Services_Products/bfwt";
import Ro from "./Services_Products/ro";
import Fo from "./Services_Products/fo";
import Contactus from "./pages/Contactus";


function App() {

  function openSearch() {
    document.getElementById("searchData").style.display="block";
  }
  function closeAll() {
    document.getElementById("searchData").style.display="none";
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


          <NavBar />
         
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/EandE/" element={<Home />}/>
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />}/>
              <Route path="/services" element={<Services />}/>
              <Route path="/pr1" element={<Pr1 />} />
              <Route path="/pr2" element={<Pr2 />} />
              <Route path="/pr3" element={<Pr3 />} />
              <Route path="/pr4" element={<Pr4 />} />
              <Route path="/pr5" element={<Pr5 />} />
              <Route path="/pr6" element={<Pr6 />} />
              <Route path="/pr7" element={<Pr7 />} />
              <Route path="/pr8" element={<Pr8 />} />
              <Route path="/pr9" element={<Pr9 />} />
              <Route path="/pr10" element={<Pr10 />} />
              <Route path="/pr11" element={<Pr11 />} />
              <Route path="/pr12" element={<Pr12 />} />
              <Route path="/pr13" element={<Pr13 />} />
              <Route path="/pr14" element={<Pr14 />} />
              <Route path="/Heating Spares" element={<Heating_Spares/>} />
              <Route path="/ESP Spares" element={<ESP_Spares/>} />
              <Route path="/Oil and chemical" element={<Oil_and_chemical/>} />
              <Route path="/Water treatment product spares" element={<Water_treatment_product_spares/>} />
              <Route path="/Bag filter spares" element={<Bag_filter_spares/>} />
              <Route path="/AFR" element={<AFR/>} />
              <Route path="/dps" element={<DPS/>} />
              <Route path="/emv" element={<Electromagneticviberator/>} />
              <Route path="/fb" element={<FilterBags/>} />
              <Route path="/GHHP" element={<GHHP/>} />
              <Route path="/HHP" element={<HHP/>} />
              <Route path="/HLS" element={<HLS/>} />
              <Route path="/LS" element={<LS/>} />
              <Route path="/m" element={<M/>} />
              <Route path="/NR" element={<NR/>} />
              <Route path="/PSV" element={<PSV/>} />
              <Route path="/RAV" element={<RAV/>} />
              <Route path="/RHC" element={<RHC/>} />
              <Route path="/RTD" element={<RTD/>} />
              <Route path="/SA" element={<SA/>} />
              <Route path="/SC" element={<SC/>} />
              <Route path="/SG" element={<SG/>} />
              <Route path="/TIC" element={<TIC/>} />
              <Route path="/TS" element={<TS/>} />
              <Route path="/V" element={<V/>} />
              <Route path="/ZSS" element={<ZSS/>} />
              <Route path="/SC" element={<SC/>} />
              <Route path="/Pressureswitch" element={<Pressureswitch/>} />
              <Route path="/Filtercages" element={<Filtercages/>} />
              <Route path="/ps" element={<PS/>}/>
              <Route path="/mv" element={<Mv/>}/>
              <Route path="/cd" element={<Cd/>}/>
              <Route path="/bfv" element={<Bfv/>}/>
              <Route path="/e" element={<E/>}/>
              <Route path="/pp" element={<Pp/>}/>
              <Route path="/cp" element={<Cp/>}/>
              <Route path="/m2" element={<M2/>}/>
              <Route path="/rcl" element={<Rcl/>}/>
              <Route path="/hbt" element={<Hbt/>}/>
              <Route path="/tcr" element={<Tcr/>}/>
              <Route path="/cfh" element={<Cfh/>}/>
              <Route path="/fde" element={<Fde/>}/>
              <Route path="/cee" element={<Cee/>}/>
              <Route path="/smps" element={<Smps/>}/>
              <Route path="/hls2" element={<Hls2/>}/>
              <Route path="/rdc" element={<Rdc/>}/>
              <Route path="/gds" element={<Gds/>}/>
              <Route path="/gaor" element={<Gaor/>}/>
              <Route path="/affb" element={<Affb/>}/>
              <Route path="/rav2" element={<Rav2/>}/>
              <Route path="/rcd" element={<Rcd/>}/>
              <Route path="/H_LS" element={<H_LS/>}/>
              <Route path="/ccd" element={<Ccd/>}/>
              <Route path="/zss1" element={<Zss1/>}/>
              <Route path="/dcr" element={<Dcr/>}/>
              <Route path="/tsh" element={<Tsh/>}/>
              <Route path="/pfm" element={<Pfm/>}/>
              <Route path="/evr" element={<Evr/>}/>
              <Route path="/pab" element={<Pab/>}/>
              <Route path="/pv" element={<Pv/>}/>
              <Route path="/bds" element={<Bds/>}/>
              <Route path="/dis" element={<Dis/>}/>
              <Route path="/ejm" element={<Ejm/>}/>
              <Route path="/multi" element={<Multi/>}/>
              <Route path="/pcr" element={<Pcr/>}/>
              <Route path="/rms" element={<Rms/>}/>
              <Route path="/fpis" element={<Fpis/>}/>
              <Route path="/fp" element={<Fp/>}/>
              <Route path="/tfp" element={<Tfp/>}/>
              <Route path="/fn" element={<Fn/>}/>
              <Route path="/an" element={<An/>}/>
              <Route path="/sc2" element={<Sc2/>}/>
              <Route path="/ts2" element={<Ts2/>}/>
              <Route path="/fs" element={<Fs/>}/>
              <Route path="/ite" element={<Ite/>}/>
              <Route path="/fd" element={<Fd/>}/>
              <Route path="/hp" element={<Hp/>}/>
              <Route path="/atobs" element={<Atobs/>}/>
              <Route path="/e3" element={<E3/>}/>
              <Route path="/o" element={<O/>}/>
              <Route path="/coil" element={<Coil/>}/>
              <Route path="/bv" element={<Bv/>}/>
              <Route path="/pg" element={<Pg/>}/>
              <Route path="/ps2" element={<Ps2/>}/>
              <Route path="/fgb" element={<Fgb/>}/>
              <Route path="/rm" element={<Rm/>}/>
              <Route path="/svgo" element={<Svgo/>}/>
              <Route path="/gp" element={<Gp/>}/>
              <Route path="/gf" element={<Gf/>}/>
              <Route path="/br" element={<Br/>}/>
              <Route path="/ff" element={<Ff/>}/>
              <Route path="/if2" element={<If2/>}/>
              <Route path="/eb" element={<Eb/>}/>
              <Route path="/fsf" element={<Fsf/>}/>
              <Route path="/rf" element={<Rf/>}/>
              <Route path="/mp" element={<Mp/>}/>
              <Route path="/ih" element={<Ih/>}/>
              <Route path="/apha" element={<Apha/>}/>
              <Route path="/water" element={<Water/>}/>
              <Route path="/bfwt" element={<Bfwt/>}/>
              <Route path="/ro" element={<Ro/>}/>
              <Route path="/fo" element={<Fo/>}/>
              <Route path="/contactus" element={<Contactus/>} />
              <Route path="/faaos" element={<Faaos />} />
              </Routes>

         </div>
  );
}

export default App;
