import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa"
const Footer = () => {
  return (
    <div id="contact" className='max-w-[1249px] mx-auto py-16 px-5 grid lg:grid-cols-3 gap-8 text-white'>
        <div>

        
<h1 className="w-full text-3xl font-bold text-[#ffffff] ">Digital<span className='text-blue-700'>Mart.</span></h1>

    <p className='py-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequuntur nemo cupiditate dolores blanditiis, eaque at nesciunt eum accusantium officiis.</p>

    <div className=" flex justify-between md:w-[75%] my-6 ">
        <FaFacebookSquare size={30}/>
        <FaGithubSquare size={30}/>
        <FaTwitterSquare size={30}/>
        <FaInstagram size={30}/>
        <FaDribbbleSquare size={30}/>
    </div>

    </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h5 className='font:medium text-gray-500'>Our Solutions</h5>
            <ul>

                <li>Analytics</li>
                <li>Web design</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            
        </div>
        <div>
            <h5 className='font:medium text-gray-500'>Our Solutions</h5>
            <ul>

                <li>Analytics</li>
                <li>Web design</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            
        </div>
        <div>
            <h5 className='font:medium text-gray-500'>Our Solutions</h5>
            <ul>

                <li>Analytics</li>
                <li>Web design</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            
        </div>
        <div>
            <h5 className='font:medium text-gray-500'>Our Solutions</h5>
            <ul>

                <li>Analytics</li>
                <li>Web design</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            
        </div>

    </div>
    </div>
  )
}

export default Footer