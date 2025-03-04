import React from 'react'

import footerLogo from "../../assets/logo.png";
import Banner from  "../../assets/website/footer-pattern.jpg";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,  // ✅ Utilise FaMobileAlt à la place
} from "react-icons/fa";


const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const FooterLinks = [
    {
        title: 'Home',
        link: "/#",
    },
     {
        title: 'About',
        link: "/#about",
    },
       {
        title: 'Contact',
        link: "/#contact",
    },
          {
        title: 'Blog',
        link: "/#blog ",
    },
]

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white mb-20'>
        <div className='container'>
              <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-50 pt-5'>
                   {/*Company details*/}
                    <div className='py-8 px-4'>
                      <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                          <img src={footerLogo} className='max-w-[50px]' alt="" /> Shoppsy
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi
                            quibusdam ducimus! Vero vel omnis eum nihil id natus!</p>
                    </div>
                  {/*Footer Link*/}
                  <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pt-10'>
                      <div>
                          <div className='py-8 px-4'>
                              <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>
                                  Important Links
                              </h1>
                              <ul className='flex flex-col gap-3'>
                                  {FooterLinks.map((Link) => (
                                      <li className='cursor-pointer : hover:text-primary hover:translate-x-1 duration-100 text-gray-200'  key={Link.title}>
                                          <span>{Link.title}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                       <div>
                          <div className='py-8 px-4'>
                              <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>
                                     Links
                              </h1>
                              <ul className='flex flex-col gap-3'>
                                  {FooterLinks.map((Link) => (
                                      <li className='cursor-pointer : hover:text-primary hover:translate-x-1 duration-100 text-gray-200'  key={Link.title}>
                                          <span>{Link.title}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                      {/*Social Link*/}
                      <div>
                          <div className='flex items-center gap-3'>
                              <a href="#">
                                  <FaInstagram className='text-3xl' />
                              </a>
                               <a href="#">
                                  <FaFacebook className='text-3xl' />
                              </a>
                               <a href="#">
                                  <FaLinkedin className='text-3xl' />
                              </a>
                          </div>
                          <div  className='mt-6'>
                              <div className='flex items-center gap-3'>
                                  <FaLocationArrow />
                                  <p>Noaida, Ultra Pradesh</p>
                              </div>
                               <div className='flex items-center gap-3'>
                                  <FaMobileAlt />
                                  <p>+91 12345689</p>
                              </div>
                          </div>
                      </div>
                  </div>
             </div>
        </div>
    </div>
  )
}

export default Footer
