import * as React from "react";
import Cta from "../commons/cta";
import logo from "../../images/logo copy.png";
import "../../index.css";

const Header = ( props : any) => {
  const {label,images,_site}=props;
  
  let NewVAr : any = props.label;
  // console.log(props.label,"Props");
  const linkDoms = props?._site?.c_headerLinks?.map((link:any) => (
    <a className="navbar-item" href={link.link} >
        <span className="text-blue-600">{link.label}</span>
      </a>
  ));

  // const TCSLogo = props?._site?.c_tATALogo?.icon?.map((link:any) => (
  //   <img style={{height:"80px",width:"130px"}} src={link?.url} />
  // ));

  return (
    <>
         <div style={{backgroundColor:"black"}}>
            <div style={{fontSize:"20px",height:"80px"}} className="flex gap-x-16 font-semibold">
                 <img style={{height:"80px",width:"130px"}} src={_site?.c_tcslogo?.icons?.url} />
                  <div style={{padding:"20px",marginLeft:"10px",color:"white"}} className="flex gap-x-8 text-2xl ">
                     {linkDoms}
                     {/* <a href="#">
                       <div className=""> {<Cta
                          buttonText="Download"
                          url="#"
                          style="bg-[#FF0000] text-orange  shadow-xl"
                          ></Cta>  }
                       </div> </a> */}
                  </div>  
                  <img style={{height:"80px",width:"130px",marginLeft:"150px"}} src={_site?.c_tATALogo?.icons?.url} />
           </div>
        </div>         
    </>
  );
};

export default Header;