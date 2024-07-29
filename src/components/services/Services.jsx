import React from 'react'
import { ServiceList } from './ServiceList'
import { FaGamepad } from "react-icons/fa6";


const Services = () => {
  return (
    <div id="services">
      <div>
        <div className='p-4'>
          <div className='text-center md:flex justify-center items-center'>
            <h1 className='text-2xl font-bold text-[#01d293] p-2 px-4 mx-5'>Services :</h1>
            <p className='px-2'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
          </div>
          <hr className='h-1 w-full my-4' />
          <div className='md:w-4/5 mx-auto mt-5 p-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
              ServiceList.map((data, index) => {
                return (
                  <div className='p-5 flex justify-between items-center bg-[#171F38] border border-[#01d293] rounded-xl transform transition-transform duration-300 hover:scale-105' key={index}>
                    <div className='w-3/5 md:h-full flex flex-col justify-around'>
                      <h1 className='md:text-2xl text-white font-semibold mb-5'>{data.name}</h1>
                      <p className='text-xs md:text-base'>{data.desc}</p>
                    </div>
                    <div>
                      <img className='w-20 md:w-40' src={data.img} alt="" />
                    </div>
                  </div>
                )

              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
