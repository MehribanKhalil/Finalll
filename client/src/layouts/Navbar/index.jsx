import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdPhoneInTalk } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { RiShoppingCart2Fill } from "react-icons/ri";

import Hamburger from 'hamburger-react'
import MobileNavbar from '../../components/NavbarComponents/MobileNavbar';
import { WihslistContext } from '../../context/WishlistContex';
import { BasketContext } from '../../context/BasketContex';


const Navbar = () => {
    const {wishlist}=useContext(WihslistContext)
    const {basket}=useContext(BasketContext)

    const [isOpen, setOpen] = useState(false)
  return (
    <nav className=' fixed z-30 w-full top-10'>
        <div className=' flex  justify-between  py-6 lg:py-0 items-center max-w-[1000px] mx-auto bg-white shadow-xl'>
            <div className=' px-8' >
                <NavLink className='flex items-center'><img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" /> <span className='text-xl md:text-3xl font-bold'>COURSE</span></NavLink>
            </div>
            <div className=' hidden lg:flex items-center gap-4 text-sm font-semibold'>
                <NavLink className='nav-item' to={'/'}>HOME</NavLink>
                <NavLink className='nav-item' to={'/COURSES'}>COURSES</NavLink>
                <NavLink className='nav-item' to={'/ELEMENTS'}>ELEMENTS</NavLink>
                <NavLink className='nav-item' to={'/admin'}>ADMIN</NavLink>
                <NavLink className='nav-item' to={'/wishlist'}>
                    <button className=' relative'>
                        <GoHeart size={23} />
                        <span className='  bg-main-color w-4 h-4 text-center rounded-full  absolute  -top-2 -right-2 text-white flex justify-center items-center'>{wishlist.length}</span>
                    </button>
                </NavLink>
                <NavLink className='nav-item' to={'/basket'}>
                    <button className=' relative'><RiShoppingCart2Fill size={23} />
                    
                    <span className='  bg-main-color w-4 h-4 text-center rounded-full  absolute  -top-2 -right-2 text-white flex justify-center items-center'>{basket.length}</span></button>
                </NavLink>
            </div>
            <div className='  text-lg font-bold hidden lg:flex gap-2 items-center px-3 text-white bg-main-color py-6'>
            <MdPhoneInTalk  size={26} />
                <span>+43 4566 7788 2457</span>
            </div>

            <div className=' block lg:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} size={23} />

            </div>
        </div>

        <MobileNavbar isOpen={isOpen} />
    </nav>
  )
}

export default Navbar
