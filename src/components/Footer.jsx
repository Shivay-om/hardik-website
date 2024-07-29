import React from 'react'
import logo from '../assets/images/Logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="contact" className=''>
            <div className='p-5'>
                <div className='hidden md:flex justify-between mb-8 px-4'>
                    <div className='flex justify-center items-center'>
                        <img className='w-10' src={logo} alt="" />
                        <p className='text-[2rem] text-white px-2 '>
                            <span className='text-[#01d293]'>H</span>ardik <span className='text-[#01d293]'>W</span>orks
                        </p>
                    </div>
                    <div className='md:hidden flex gap-2'>
                        <FaLinkedin className='' size={20} />
                        <FaInstagramSquare size={20} />
                        <FaFacebook size={20} />
                    </div>
                </div>
                <div className='md:flex justify-between items-center md:w-[90%] mx-auto'>
                    <h1 className='md:hidden text-center text-white text-2xl font-semibold p-4'>Connect with me</h1>
                    <div className='flex flex-col gap-4'>
                        <p className='text-xl text-[#01d293] font-bold py-2'>Contact us:</p>
                        <p>Email: hardikpednekar123@gmail.com</p>
                        <p>Phone: +91 9702955335</p>
                        <p>Address: Malad west Mumbai-400064</p>
                        <div className='hidden gap-2'>
                        <FaLinkedin className='' size={25} />
                        <FaInstagramSquare size={25} />
                        <FaFacebook size={25} />
                    </div>
                    </div>
                    <div className='hidden w-2/5 md:flex flex-col justify-center items-center gap-4 mt-4 mx-auto md:p-4 rounded-md md:mr-8'>
                        <input class="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white" type="email" name="email" placeholder="Your Email" required="" autocomplete="off" fdprocessedid="2fcxqh"></input>
                        <textarea class="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white" name="message" placeholder="Your Message" required="" rows="4" autocomplete="off"></textarea>
                        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" fdprocessedid="1jr15s">Send</button>
                    </div>
                </div>
                <hr className='h-1 w-full my-4' />
                <div className='mt-4 text-sm md:text-base md:px-4'>
                    © Copyright 2024 - Developed by Hardik Works. All right reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
