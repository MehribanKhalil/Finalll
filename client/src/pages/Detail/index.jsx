import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

const Detail = () => {


  const { id } = useParams()

  const [singleCourse, setSingleCourse] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getData = async () => {
    const res = await axios.get(`http://localhost:5000/course/${id}`);
    setSingleCourse(res.data);
  };

  useEffect(() => {
    getData()
  }, [])



  return (
    <div className=' section page pt-48 pb-16'>
      <Helmet>
        <title>Detail</title>
      </Helmet>


      <div className=' flex justify-center items-center '>
        {
            singleCourse&& 
            <div className=' flex items-center bg-gray-200 p-10 rounded-xl gap-6'>
              <div>
                <img src={singleCourse.image} alt="" />
              </div>

              <div className=' space-y-6'>
                <h2 className=' text-2xl font-semibold'>{singleCourse.title}</h2>
                <p className=' text-gray-700 font-semibold text-xl'>{singleCourse.info}</p>
                <p className=' text-gray-700 font-semibold text-xl' >Price: ${singleCourse.price}</p>

              </div>
            </div>
        }
      </div>

    </div>
  )
}

export default Detail
