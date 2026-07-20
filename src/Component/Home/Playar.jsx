import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers';

const Playar = ({PlayerPromis}) => {
  const data = use(PlayerPromis);
  // console.log(data);
  
  return (
    <>
     <div className='container mx-auto flex justify-between py-3'>
      <p className='text-2xl font-bold'>Avalivale Player</p>
      <div>
        <button className="btn btn-soft btn-primary">Primary</button>
        <button className="btn btn-soft btn-primary">Primary</button>
      </div>
     </div>

    <AvailablePlayers data={data}></AvailablePlayers>
    
    </>
  );
};

export default Playar;