import React, { useContext } from 'react'
import { WihslistContext } from '../../../context/WishlistContex'
import { BasketContext } from '../../../context/BasketContex'
import { Link } from 'react-router-dom'
import { GoHeart } from "react-icons/go";
import { MdRemoveShoppingCart } from "react-icons/md";

import { GoHeartFill } from "react-icons/go";
import { RiShoppingCart2Fill } from "react-icons/ri";
const BasketCard = ({image,title,info,authorImage,authorName,authorPosition,_id,product,count,price}) => {
  const {wishlist,handleWishlist}=useContext(WihslistContext)
  const {incCount,decCount,deleteBasket}=useContext(BasketContext)

  return (
    <div className=" course-card mb-5">
    <div>
        <img src={image} alt="" />
    </div>
    <div className=" bg-[#F8F9FB]">
        <div className=" py-10 px-4 text-center">
            <Link to={`/course/${_id}`}>
            <h3 className=" cursor-pointer hover:text-gray-500 duration-300 text-xl font-semibold">{title}</h3>
            
            </Link>
            <p className=" font-semibold text-gray-400">{info}</p>
        </div>
        
        <div className=' flex justify-center  pb-4 gap-4 items-center'>
            <button onClick={()=>decCount(product)} className='  border border-main-color w-8 h-8 flex justify-center items-center text-3xl' >-</button>
            <span className=' text-xl'>{count}</span>
            <button  onClick={()=>incCount(product)} className='  border border-main-color w-8 h-8 flex justify-center items-center text-3xl' >+</button>
        </div>

        <div className=' flex justify-center pb-4 gap-2'>
        <button onClick={()=>handleWishlist(product)} >
                {
                    wishlist.some(item=>item._id === _id) ?  <GoHeartFill size={23}  /> :<GoHeart size={23} />
                    
                }
                
                </button>
                <button onClick={()=>deleteBasket(_id)}>
                <MdRemoveShoppingCart  size={23} />
                </button>
        </div>

        
        <div className=" flex justify-between bg-gray-300">
           <div className=" flex gap-3 items-center px-4">
           <img className=" rounded-full" src={authorImage} alt="" />
           <p>{authorName} <span>{authorPosition}</span></p>
           </div>
           
            <div className=" bg-main-color flex justify-center items-center px-4 py-4">
                <p className=" text-white font-bold "> ${price}</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default BasketCard