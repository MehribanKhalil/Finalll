import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import SectionHeading from '../../components/Common/SectionHeading'
import { BasketContext } from '../../context/BasketContex'
import BasketCard from './BasketCard'

const Basket = () => {
  const {basket}=useContext(BasketContext)

  const subtotal=basket.reduce((basketTotal,BasketItem)=>basketTotal+(BasketItem.count*BasketItem.price),0)

  return (
    <div className=' page section pt-48 pb-16'>
         <Helmet>
        <title>Basket</title>
      </Helmet>
      <SectionHeading title="Basket Products" />


      {
        basket.length===0 ? "" : 
        <p className=' text-xl font-semibold'>Subtotal : ${subtotal}</p>
      }

      <div className=" grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12  pt-10">

        {
          basket.length===0 ? <p className=' text-xl font-semibold'>Your Basket is empth :/</p> :
          basket && basket.map(course => (
            <div key={course._id}>
              <BasketCard {...course} product={course} />

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default Basket
