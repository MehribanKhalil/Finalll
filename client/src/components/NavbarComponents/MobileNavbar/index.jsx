import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileNavbar = ({isOpen}) => {
    return (
        <nav className={` ${isOpen ? ' h-[300px]' : "h-0"} duration-300 lg:hidden   overflow-hidden absolute top-16 left-0 w-full`}>

            <div className='flex items-center   flex-col bg-white p-6  gap-4 font-semibold'>
                <NavLink className='nav-item' to={'/'}>HOME</NavLink>
                <NavLink className='nav-item' to={'/COURSES'}>COURSES</NavLink>
                <NavLink className='nav-item' to={'/ELEMENTS'}>ELEMENTS</NavLink>
                <NavLink className='nav-item' to={'/admin'}>ADMIN</NavLink>
                <NavLink className='nav-item' to={'/wishlist'}>WISHLIST </NavLink>
                <NavLink className='nav-item' to={'/basket'}>BASKET</NavLink>
            </div>
        </nav>
    )
}

export default MobileNavbar