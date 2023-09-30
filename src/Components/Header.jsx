import React,{useState} from "react"
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
const Header = () => {

  const [ nav,setNav] = useState(false);


  const handle = () =>{
    setNav(!nav);
  }
  return (
    <div className='flex justify-between items-center h-15 max-w-[1110px]  text-white  mx-auto  px-4 md:px-0'>
        <h1 className="w-full text-3xl font-bold text-[#ffffff] ">Digital<span className='text-blue-700'>Mart.</span></h1>
        <ul className="hidden md:flex ">
          <li className="p-4"><a href="#home">Home</a></li>
          <li className="p-4"><a href="#Newslatter">Newslatter</a></li>
          <li className="p-4"><a href="#prices">prices</a></li>
          <li className="p-4"><a href="#contact">contact</a></li>
          <li className="p-4"><a href="#analystic">Analystic</a></li>
        </ul>
        
        <div onClick={handle} className="block md:hidden ">
         
         {nav ? <AiOutlineClose size={22} /> :  <AiOutlineMenu size={22}/>}
        
        <div className={nav ? " mt-12 fixed text-left right-1 top-0 w-[35%]   bg-[#325570] ease-in-out duration-700 rounded-lg " : 'fixed right-[-100%] ' }>
          <ul className="p-4 uppercase ">
          <li className="p-4 border-b border-blue-300">Home</li>
          <li className="p-4 border-b border-blue-300">Contact</li>
          <li className="p-4 border-b border-blue-300">About</li>
          <li className="p-4 border-b border-blue-300">Programs</li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Header