import React from 'react'

import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Card = () => {
  return (
    <div id="prices" className='w-full py-[10rem] px-4 bg-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
                <h2 className='text2xl font-bold text-center py-8'>Single user</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div  className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 Storage</p >
                    <p className='py-2 border-b mx-8'>1 gruented User</p >
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-blue-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Start Trial</button>
            </div>
            <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4  md:my-0 my-8  rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent bg-white' src={Double} alt="" />
                <h2 className='text2xl font-bold text-center py-8'>Double user</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div  className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 Storage</p >
                    <p className='py-2 border-b mx-8'>1 gruented User</p >
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-blue-700'>Start Trial</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="" />
                <h2 className='text2xl font-bold text-center py-8'>Triple user</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div  className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 Storage</p >
                    <p className='py-2 border-b mx-8'>1 gruented User</p >
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-blue-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Start Trial</button>
            </div>
        </div>

    </div>
  )
}

export default Card