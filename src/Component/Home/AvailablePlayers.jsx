import React, { use } from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosFlag } from "react-icons/io";
import Card from './Card';

const AvailablePlayers = ({data}) => {
  // const dataa = use(data);
  
  // console.log(AvailablePlayers);
  
  return (
       

    <>
    <Card data={data}></Card>
    
    
    </>
   

  
  );
};

export default AvailablePlayers;