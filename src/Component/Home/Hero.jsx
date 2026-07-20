import React from 'react';
import image from '../../assets/banner-main.png';
import imagee from "../../assets/bg-shadow.png"


const Hero = () => {
  return (
    <>
    <div
  className="hero min-h-screen container mx-auto">
  
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md"
    
     style={{
        backgroundImage: `{imagee}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    
    >
      <img className='m-auto'  src={image} alt=''></img>
      <h1 className="mb-5 text-2xl m-1 font-bold">Assemble Your Dream 11 Cricket Team</h1>
      <p className="mb-5">
        Beyond Boundaries Beyond Limits
      </p>
      <button className="btn btn-secondary">Claim Free Credit</button>
    </div>
  </div>
</div>
    
    
    
    
    </>
  );
};

export default Hero;