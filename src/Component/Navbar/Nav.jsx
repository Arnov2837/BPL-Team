import React from 'react';
import image from '../../assets/logo.png';

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex justify-between container mx-auto ">
      <div className="">
          <img src={image} alt=''></img>
      </div>
      <div>
        <ul className='flex gap-7 font-bold text-1xl '>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
            
          
        </ul>
      </div>
     <div className="">
        <button className='font-bold'>0 Coin</button>
     </div>
     </div>
    </div>
  );
};

export default Nav;