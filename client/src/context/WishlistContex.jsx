import { createContext } from "react";
import UseLocal from "../hooks/UseLocal";
import { toast } from "react-hot-toast";


export const WihslistContext=createContext()

export const WihslistProvider=({children})=>{

    const [wishlist, setwishlist] = UseLocal('wishlist')

    const handleWishlist=(product)=>{
        const index= wishlist.findIndex(item=>item._id === product._id)

        if (index=== -1) {
            setwishlist([...wishlist,{...product}])
            toast.success('Added to Wishlist!')

        } else{
            setwishlist(wishlist.filter(item=>item._id !==product._id))
            toast.success('Deleted from Wishlist!')
        }
    }

    return (
        <WihslistContext.Provider value={{wishlist,handleWishlist}}>
            {children}
        </WihslistContext.Provider>
    )
}