import React from 'react'
import SectionHeading from '../../Common/SectionHeading'

const UpcomingSection = () => {
    return (
        <section className=' section py-16'>
            <SectionHeading title="Upcoming Events" />
            <div className='  py-10 space-y-6 '>
                <div className=' flex gap-12 l:justify-between flex-col lg:flex-row justify-center'>
                    <div className='  text-main-color  font-bold border-2 px-10 flex justify-center flex-col items-center  border-main-color'>
                        <span className=' text-5xl'>07</span>
                        January
                    </div>

                    <div className=' space-y-3  text-center lg:text-start'>
                        <h4 className=' text-2xl  font-semibold'>Student Festival</h4>
                        <h6 className=' font-semibold'>Grand Central Park</h6>
                        <p className=' text-gray-400 font-semibold'> In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                    </div>

                    <div>
                        <img className=' w-full lg:w-[300px] ' src="https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="" />
                    </div>
                </div>

                <div className=' flex gap-12 l:justify-between flex-col lg:flex-row justify-center'>
                    <div className='  text-main-color  font-bold border-2 px-10 flex justify-center flex-col items-center  border-main-color'>
                        <span className=' text-5xl'>07</span>
                        January
                    </div>

                    <div className=' space-y-3  text-center lg:text-start'>
                        <h4 className=' text-2xl  font-semibold'>Student Festival</h4>
                        <h6 className=' font-semibold'>Grand Central Park</h6>
                        <p className=' text-gray-400 font-semibold'> In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                    </div>

                    <div>
                        <img className=' w-full lg:w-[300px] ' src="https://preview.colorlib.com/theme/course/images/event_2.jpg" alt="" />
                    </div>
                </div>
                <div className=' flex gap-12 l:justify-between flex-col lg:flex-row justify-center'>
                    <div className='  text-main-color  font-bold border-2 px-10 flex justify-center flex-col items-center  border-main-color'>
                        <span className=' text-5xl'>07</span>
                        January
                    </div>

                    <div className=' space-y-3  text-center lg:text-start'>
                        <h4 className=' text-2xl  font-semibold'>Student Festival</h4>
                        <h6 className=' font-semibold'>Grand Central Park</h6>
                        <p className=' text-gray-400 font-semibold'> In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                    </div>

                    <div>
                        <img className=' w-full lg:w-[300px] ' src="https://preview.colorlib.com/theme/course/images/event_3.jpg" alt="" />
                    </div>
                </div>
              
            </div>
        </section>
    )
}

export default UpcomingSection