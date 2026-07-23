import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosFlag } from "react-icons/io";


const Card = ({data}) => {
  // console.log(data, 'paici');

  const [isSelicted,setIsselicted] = useState([]);
  console.log(isSelicted, "paitaci");
  

  
  return (
    

     <div className='container mx-auto '>
     
             <div className=' grid grid-cols-3 gap-2'>
     
          {
            data.map(player=>{
             return<div key={player.id} className="card bg-base-100  shadow-sm  ">
          <figure>
         <img
           src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
           alt="Shoes" />
       </figure>
       <div className="card-body">
         <h2 className="card-title"><FaUser/>{player.playerName}</h2>
         <div className='flex'>
           <p className='flex'><IoIosFlag />{player.playerCountry}</p>
           <p>{player.playerTypeplaye}</p>
         </div>
         <hr></hr>
         <p className='font-bold'>rating({player.rating})</p>
         <div className='flex'>
           <p>{player.battingStyle}</p>
           <p>{player.bowlingStyle}</p>
         </div>
         <div className="card-actions flex">
           <p>Price:{player.price}</p>
             <div>
               <button onClick={() => {setIsselicted(prev => prev.includes(player.id) ? prev.filter(id => id !== player.id) : [...prev, player.id]);
                alert(`${player.playerName} Nea Nici`);
               }}
           className="btn btn-sm" 
           disabled={isSelicted.includes(player.id)}
           >
            {isSelicted.includes(player.id) ? "Selicted" : "Chouse player"}</button>

             </div>
           

         </div>
       </div>
           </div>
            })
     
          }
     
     
           
         </div>
     
        </div>



  );
};

export default Card;