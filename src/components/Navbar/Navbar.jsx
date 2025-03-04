import React from 'react'
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import {FaCaretDown} from 'react-icons/fa'
import DarkMode from './../DarkMode/DarkMode';

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#"
  },
   {
    id: 2,
    name: "Top Rated",
    link: "/#service"
  },
    {
    id: 3,
    name: "Kids wear",
    link: "/#"
  },
     {
    id: 4,
    name: "Mens wear",
    link: "/#"
  },
       {
    id: 5,
    name: "Electronics",
    link: "/#"
  }
]

const DropDownLinks = [
   {
    id: 1,
    name: "Trends Product",
    link: "/#"
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#"
  },
   {
    id: 3,
    name: "Top Rated",
    link: "/#"
  },
]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white
      duration-200 relative z-40'>
        {/* upper navbar */}
        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={Logo} alt="logo" className='w-10 uppercase' />
                        shopsy
                    </a>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <div className='relative group hidden sm:block'>
                        <input
                            type="text"
                            placeholder='search'
                            className='w-[200px] sm:w-[200px]
                              group-hover:w-[300px] 
                              transition-all 
                              duration-300 rounded-full border
                              border-gray-300 px-2 py-1
                              focus:outline-none focus:border-1
                              focus:border-primary'
                        />
                        <IoMdSearch className='text-gray-500 
                         group-hover:primary
                         absolute top-1/2 -translate-y-1/2 right-3 '/>
                    </div>
            {/*order button*/}
            <button onClick={()=> handleOrderPopup()} className='bg-gradient-to-r 
            from-primary
            to-secondary
            transition-all
            duration-200
            text-white
            py-1 px-4 rounded-full flex
            items-center
            gap-3 group '>
            <span className='group-hover:block hidden transition-all
              duration-200'>Order</span>
            <FaCartShopping className='text-xl
               text-white
               drop-shadow-sm
               cursor-pointer'/>
            </button>
            {/* Darkmode Swicth*/}
            <div>
              <DarkMode />
            </div>
              </div>
            </div>
        </div>
      {/* lower navbar */}
      <div data-os="zoom-in" className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data) => (
              <li key={data.id}>
                <a className='inline-block px-4 hover:text-primary duration-200' href={data.link}>{data.name}</a>
              </li>
            ) )
          }
      {/* Simple Dropdown and links */}
          <li className='group relative cursor-pointer'>
            <a href="flex items-center gap-[2px] py-2">
              Tranding Items
              <span>
                <FaCaretDown
                className="translate-all duration-200 group-hover:rotate-180"/>
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-1[150px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
                {DropDownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                      {data.name}
                    </a>
                </li>
              ) )}
               </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
