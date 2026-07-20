import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers';

const Playar = ({PlayerPromis}) => {
  const data = use(PlayerPromis);
  // console.log(data);
  
  return (
    <>
    <AvailablePlayers data={data}></AvailablePlayers>
    
    </>
  );
};

export default Playar;