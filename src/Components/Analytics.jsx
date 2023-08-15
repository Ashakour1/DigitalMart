import React from 'react';
import laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={laptop} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-blue-700 font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage data Analytics Centrally</h1>
                <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint similique exercitationem accusamus esse, porro aspernatur neque cupiditate magnam facilis consequuntur iste dignissimos eos obcaecati a tenetur consequatur ipsam sunt.</p>
                <button className='bg-blue-700 mx-auto w-[150px] rounded-md md:mx-0 py-2 '>Get started</button>
            </div>
           
        </div>

    </div>
  )
}

export default Analytics