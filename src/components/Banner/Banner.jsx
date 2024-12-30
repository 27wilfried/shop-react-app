import React from 'react'
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi'; 
import Products from './../Products/Products';

const Banner = () => {
  return (
    <div className='min-h-[500px] flex justify-center items-center py-12 sm:py-0'>
          <div className='container'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center '>
                  {/*image section*/}
                  <div data-aos="zoom-in">
                       <img className='max-w-[400px] 
                h-[350px] w-full
                mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                object-cover' src={BannerImg} alt="" />  
                  </div>
                  {/*text detail section*/}     
                  <div className='flex flex-col justify-center gap-6 sm:pt-6'>
                       <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>winter Sale uptp 50% off</h1>
                      <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, rem blanditiis, vel nobis iste quidem omnis sunt exercitationem ducimus ea nostrum, optio quasi aut autem laborum tenetur illo modi inventore!</p>
                      <div className='flex flex-col gap-4'>
                          <div data-aos="fade-up"
                              className='flex items-center gap-4'>
                              <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                              <p>Quality Products</p>
                          </div>
                          <div data-aos="fade-up"
                              className='flex items-center gap-4'>
                              <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 
                              rounded-full bg-orange-100 dark:bg-orange-400' />
                              <p>Fast Delivery</p>
                          </div>
                          <div data-aos="fade-up" className='flex items-center gap-4'>
                              <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 
                            rounded-full bg-green-100 dark:bg-green-400'/>
                              <p>Easy Payment methode</p>
                          </div>
                          <div data-aos="fade-up" className='flex items-center gap-4'>
                              <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 
                            rounded-full bg-yellow-100 dark:bg-yellow-400'/>
                              <p>Get Offers</p>
                          </div>
                      </div>
                  </div>
              </div>
        </div> 
    </div>
  )
}

export default Banner
