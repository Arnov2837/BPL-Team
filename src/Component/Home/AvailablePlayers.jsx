import React, { use } from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosFlag } from "react-icons/io";

const AvailablePlayers = ({data}) => {
  // const dataa = use(data);
  
  // console.log(AvailablePlayers);
  
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser/>fghj</h2>
    <div className='flex'>
      <p className='flex'><IoIosFlag />fghj</p>
      <p>alrounder</p>
    </div>
    <hr></hr>
    <p>Rating</p>
    <div className='flex'>
      <p>bat style</p>
      <p>bol style</p>
    </div>
    <div className="card-actions flex">
      <p>Price: $1500000</p>
      <button className="btn btn-sm">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default AvailablePlayers;