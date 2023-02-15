import * as React from "react";
import "../../index.css";
import { cookieText, cookiesUrl } from "../../../sites-global/global"
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";

// const Footer = ( props: any) => { 
// 	let NewVAr : any = props.label;
// 	console.log(props.label,"Props");
// 	const linkDoms = NewVAr.map((link:any) => (
// 	  <div className="grid place-items-center"> 
// 	  <a className="navbar-item" href={link.link} >   
// 		 <span> {link.label}</span>
// 		  <img src={link.icon?.url} className="h-10 w-10"/><br/>          
// 		</a>
// 		</div>      
  
// 	));
// 	const Services = props?._site?.c_digitalBusiness?.links?.map((link: any) => (
// 		<a className="navbar-item" href={link.link} >
// 		  <span>{link.label}</span><br />
// 		</a>
// 	  ));
const Footer = (props: any) => {
	const {label,images,_site}=props;
	console.log(props)
	React.useEffect(() => {
	  document.body.setAttribute("id", "body");
	})
	// const toggle = () => {
	//   (document.getElementById("body") as HTMLInputElement).classList.toggle('');
	// };
	const Industries = props?._site?.c_industries?.map((link: any) => (
	  <a className="navbar-item" href={link.link} >
		<span>{link.label}</span><br />
	  </a>
	));

	const Tcsservices = props?._site?.c_tcsservices?.map((link: any) => (
		<a className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	  const ProductsPlatforms = props?._site?.c_productsPlatforms?.map((link: any) => (
		<a className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	  const Insights = props?._site?.c_insights?.map((link: any) => (
		<a className="navbar-item" href={link.link} >
		  <span>{link.label}</span><br />
		</a>
	  ));

	  const Icons = props?._site?.c_icons?.map((link: any) => (
		<div className=""> 
          <a className="navbar-item" href={link.link} >   
                 {/* <span className="text-xl  "> {link.label}</span> */}
                <img src={link.icons?.url} className="flex space-x-2 h-6 w-6"/><br/>          
         </a>
       </div>      
	  ));

	//   const services = c_servicesIn?.map((link: any) => (
	// 	<a className="navbar-item" href={link.link} >
	// 	  <span>{link.label}</span><br />
	// 	</a>
	//   ));

	return (
		<>
			<footer className="site-footer inline-block w-full pt-6" style={{paddingTop:"250px"}}>
							 		  					  					  
				    
				<div style={{backgroundColor:"gray"}} >
					
				<div  className="container px-6 pt-6" style={{height:"300px"}}>
					<div className="store-locator">					   
		              <h2 style={{ color: "black" }}>Industries</h2> 
                           <div className="text-xl pt-6 ">
		                       {props._site?.c_industries?.headingName}
                               <ul style={{ color: "white" }} className="menu_footer">
                               <li><a >{Industries}</a></li>
                               </ul>
                           </div>
			          					  					  					 
				    </div>
					<div className="store-locator">					   
		                 <h2 style={{ color: "black" }}>TCS Services</h2>
                           <div className=" text-xl pt-6">
		                       {props._site?.c_tcsservices?.headingName}
                               <ul style={{ color: "white" }} className="menu_footer  ">
                               <li><a >{Tcsservices}</a></li>
                               </ul>
                           </div>
			          					  					  					 
				    </div>
					<div className="store-locator">					   
		               <h2 style={{ color: "black" }}>ProductsPlatforms</h2>
                           <div className="text-xl  pt-6">
		                       {props._site?.c_productsPlatforms?.headingName}
                               <ul style={{ color: "white" }} className="menu_footer ">
                               <li><a >{ProductsPlatforms}</a><br /></li>
                               </ul>
                           </div>
			         					  					  					 
				    </div>
					<div className="store-locator">					   
		                <h2 style={{ color: "black" }}>Insights</h2>
                           <div className="text-xl  pt-6">
		                       {props._site?.c_insights?.headingName}
                               <ul style={{ color: "white" }} className="menu_footer ">
                               <li><a >{Insights}</a></li>
                               </ul>
                           </div>
			          					  					  					 
				    </div>
					{/* <div className="store-locator">	
					<h2>SOCIAL MEDIA</h2>				   
                           <div className="flex grid grid-cols-4 gap-4 pt-6">
		                       {props._site?.c_icons?.headingName}
								 {Icons} 
								<div className="w-56"> <img src={_site?.c_logo?.url} alt="" className="h-16"/>  
								</div>                                        
                           </div>
			          </div> */}
					<div>
            {/* <div style={{fontSize:"Oswald" ,backgroundColor:"",height:"70px"}} className="flex gap-x-10">
               <img src={_site.c_footerlogo?.url} style={{height:"70px",width:"100px"}}/>
                  <div style={{padding:"20px"}} className="flex gap-x-10 text-2xl">
                     {_site.c_footerDescription}
                  </div>
            </div> */}
         </div>
		</div>	
	</div>		                                                                         
			</footer>
			<div className="flex" style={{backgroundColor:"black"}}>
				<div>
					<a className="navbar-item" href={_site?.c_tcslogo?.link} >   
				    <img style={{height:"80px",width:"130px"}} src={_site?.c_tcslogo?.icons?.url} />       
                    </a>
				 </div>
				 <div className="flex space-x-4 pt-6" style={{marginTop:"20px",marginLeft:"50px"}}>
		                       {props._site?.c_icons?.headingName}
								 {Icons} 
                                </div>
				 <p className="" style={{marginTop:"30px",marginLeft:"80px",color:"white"}}>©2023 TATA Consultancy Services Limited</p>
			 </div>
			
			<CookieConsent
				buttonText={"Accept"}
				buttonStyle={{
					marginLeft: "100px",
				}}
			>
				<p>
					{cookieText}
					<a className="text-cookies-link" href={cookiesUrl}>
						{StaticData.cookie}
					</a>
					
				</p>
			</CookieConsent>
		</>
	);
};

export default Footer;
// function handleMediaQueryChange(mediaQuery: MediaQueryList) {
// 	throw new Error("Function not implemented.");
// }

