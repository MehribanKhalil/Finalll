import React from 'react'
import { GoHeart } from "react-icons/go";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import './index.scss'
// #A5A5A5

const Footer = () => {
  return (
    <footer className=' bg-[#1A1A1A] section  '>
            <div className="footer-top py-16 text-[#A5A5A5]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b border-t border-gray-200">
                <div>
                    <div className=' flex items-center pb-7'>
                        <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" /> <span className=' font-bold  text-3xl text-white '>COURSE</span>
                    </div>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
                </div>

                <div>
                    <h3>Menu</h3>
                    <ul className='space-y-3'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Courses</li>
                        <li>News</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3>Usefull Links</h3>
                    <ul className='space-y-3'>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                        <li>Community</li>
                        <li>News</li>
                        <li>Tuitions</li>
                    </ul>
                </div>

                <div className=' '>
                    <h3>Contact</h3>
                    <ul className='space-y-3'>
                        <li className=' flex gap-1 items-center'>
                           <img src="https://preview.colorlib.com/theme/course/images/placeholder.svg" alt="" />
                           <span> Blvd Libertad, 34 m05200 Arévalo</span>
                        </li>

                        <li className=' flex gap-1 items-center'>
                           <img src="https://preview.colorlib.com/theme/course/images/smartphone.svg" alt="" />
                           <span> 0034 37483 2445 322</span>
                        </li>

                        <li className=' flex gap-1 items-center'>
                           <img src="https://preview.colorlib.com/theme/course/images/envelope.svg" alt="" />
                           <span> hello@company.com</span>
                        </li>
                       
                    </ul>
                </div>
            </div>
            <div className="footer-bottom  py-4 text-[#A5A5A5] flex  flex-col md:flex-row justify-center items-center gap-4 md:justify-between">
                <p className='  inline-flex flex-col md:flex-row  text-center md:text-start  items-center gap-1 '>Copyright ©2024 All rights reserved | This template is made with  <span><GoHeart /></span> by <span className=' text-blue-500  cursor-pointer'> Colorlib</span></p>

                <div className=' flex  gap-5 text-white'>
                    <button><FaPinterestP /></button>
                    <button><FaLinkedinIn /></button>
                    <button><FaInstagram /></button>
                    <button><FaFacebookF /></button>
                    <button><FaTwitter /></button>
                </div>  
            </div>
    </footer>
  )
}

export default Footer