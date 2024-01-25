import React, { useContext } from 'react'
import { IoHeartDislike } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { WihslistContext } from '../../../context/WishlistContex';
import { BasketContext } from '../../../context/BasketContex';
import { RiShoppingCart2Fill } from "react-icons/ri";



const WishlistCard = ({image,title,info,authorImage,authorName,authorPosition,_id,product,price}) => {
  const {handleWishlist}=useContext(WihslistContext)
  const {addToBasket}=useContext(BasketContext)

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
        <div className=' flex justify-center pb-4 gap-2 '>
            <button onClick={()=>handleWishlist(product)} >
            <IoHeartDislike size={23} />
                </button>
                <button onClick={()=>addToBasket(product)}>
                <RiShoppingCart2Fill size={23} />
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

export default WishlistCard