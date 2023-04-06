import React from 'react';
import { useNavigate } from "react-router-dom";

function HomePrtTwo() {
  const navigate = useNavigate();
  return (
    <div className='m-2 mb-6'>
      <div className='mb-9 mt-28 text-center'>
        <h1 className='px-3 text-2xl mt-6 font-medium text-slate-500'>WHAT ARE YOU LOOKING FOR?</h1>
      </div>
      <div className=' grid-cols-2 flex gap-1 px-10 lg:px-52' >
        <div className='h-[270px]  w-full flex object-cover transition-scale opacity-50'>
          <img
            src='https://static.wixstatic.com/media/82fcd3_48d7bda4accf4beea4cad4e58588a4c6~mv2_d_3000_2002_s_2.jpg/v1/fill/w_611,h_559,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/82fcd3_48d7bda4accf4beea4cad4e58588a4c6~mv2_d_3000_2002_s_2.jpg'
            className='h-[270px]  w-full object-cover transition-scale opacity-60 bg-black relative overflow-hidden text-center justify-center'
            alt='' />
          <p className='text-blue-600 flex absolute font-bold  text-5xl cursor-pointer hover:text-red-600 p-24'
          onClick={() => navigate(`/category/sale`)}>
            Buy
          </p>
        </div>
        <div className='h-[270px] w-full object-cover flex transition-scale opacity-75'>
          <img
            src='https://demo12.houzez.co/wp-content/uploads/2017/11/200.jpg'
            className='h-[270px]  w-full object-cover transition-scale opacity-75 bg-black relative overflow-hidden text-center justify-center'
            alt='' />
             <p className='text-white flex absolute font-bold  text-5xl cursor-pointer hover:text-red-600 p-24'
             onClick={() => navigate(`/category/rent`)}>
            Rent
          </p>
        </div>

      </div>
    </div>
  )
}

export default HomePrtTwo