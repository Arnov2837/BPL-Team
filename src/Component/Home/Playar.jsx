import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelictedPlayer from './SelictedPlayer';

const Playar = ({PlayerPromis}) => {
  const data = use(PlayerPromis);
  // console.log(data);
  const [selected,setSelected]= useState("avalivale");
  
  return (
    <>
     <div className='container mx-auto flex justify-between py-3'>


      { selected === "avalivale" ? <p className='text-2xl font-bold'>Avalivale Player</p> :<p className='text-2xl font-bold'>SelictedPlayer(2/6)</p> }

      <div>
        <button onClick={() =>setSelected("avalivale")}
        className={`btn ${selected === "avalivale" ? "bg-green-500" : ""} btn-soft btn-primary`}>Avalivale
        </button>
        <button onClick={() => setSelected ("selected")}
         className={`btn ${selected === "selected" ? "bg-green-500" : ""} btn-soft btn-primary`}>selected (0)
         </button>
      </div>
     </div>

     {
       selected === "avalivale" ? <AvailablePlayers data={data}></AvailablePlayers> : <SelictedPlayer></SelictedPlayer>
     }

    
    
    
    </>
  );
};

export default Playar;