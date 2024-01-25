import React from 'react'
import './index.scss'


const RegisterSection = () => {
  return (
    <section className='register-section flex flex-col lg:flex-row' >
        <div  className='left-side w-full lg:w-1/2 bg-main-color p-10  md:p-24 text-center  '>
            <div  className=' flex flex-col  max-w-[500px] mx-auto space-y-8
            '>
            <h2  className=' text-3xl text-white font-semibold'>Register now and get a discount <span  className=' text-black'>50%</span> discount until 1 January</h2>
            <p  className=' font-semibold text-white'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
           <div>
           <button  className=' px-6 py-3 hover:shadow-xl duration-200 bg-[#1A1A1A] text-white  uppercase font-semibold '>REGISTER NOW</button>
           </div>
            </div>
        </div>

        <div className=' right-side  w-full lg:w-1/2 p-10 md:p-24  text-center  '>
            <h2 className=' text-3xl text-white font-semibold pb-10'>Search for your course</h2>
            <form className=' flex flex-col max-w-[500px] mx-auto space-y-8' > 
                <input className=' px-4 py-2 font-semibold  outline-main-color' type="text" name="" id="" placeholder='Course Name' />
                <input className=' px-4 py-2 font-semibold outline-main-color' type="text" name="" id="" placeholder='Category' />
                <input className=' px-4 py-2 font-semibold outline-main-color' type="text" name="" id="" placeholder='Degree' />
                <button  className=' py-3 bg-main-color text-white  uppercase font-semibold '>REGISTER NOW</button>

            </form>
        </div>
    </section>
  )
}

export default RegisterSection
