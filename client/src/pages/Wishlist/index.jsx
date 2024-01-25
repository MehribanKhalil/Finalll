import { Helmet } from 'react-helmet-async'
import SectionHeading from '../../components/Common/SectionHeading'
import { useContext } from 'react'
import { WihslistContext } from '../../context/WishlistContex'
import WishlistCard from './WishlistCard'
import { useNavigate } from 'react-router-dom'


const Wishlist = () => {

  const {wishlist}=useContext(WihslistContext)
  const nav=useNavigate()

  return (
    <div className=' page section pt-48 pb-16'>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <SectionHeading title="Wishist Products" />

      <div className=" grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12  pt-10">

        {
          wishlist.length===0 ? <p className=' text-xl font-semibold'>Your Wishlist is empth :/  <button onClick={()=>nav('/')}> Continue to Shopping  </button></p>  :
          wishlist && wishlist.map(course => (
            <div key={course._id}>
              <WishlistCard {...course} product={course} />

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default Wishlist
