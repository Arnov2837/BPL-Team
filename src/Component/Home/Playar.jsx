import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';

const Playar = ({PlayerPromis}) => {
  const data = use(PlayerPromis);
  // console.log(data);
  const [selected,setSelected]= useState("avalivale");
  
  return (
    <>
     <div className='container mx-auto flex justify-between py-3'>
      <p className='text-2xl font-bold'>Avalivale Player</p>
      <div>
        <button onClick={() =>setSelected("avalivale")}
        className={`btn ${selected === "avalivale" ? "bg-green-500" : ""} btn-soft btn-primary`}>Avalivale
        </button>
        <button onClick={() => setSelected ("selected")}
         className={`btn ${selected === "selected" ? "bg-green-500" : ""} btn-soft btn-primary`}>selected (0)
         </button>
      </div>
     </div>

    <AvailablePlayers data={data}></AvailablePlayers>
    
    </>
  );
};

export default Playar;