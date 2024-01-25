import React, { useEffect, useState } from "react";
import SectionHeading from "../../Common/SectionHeading";
import { Link } from "react-router-dom";
import axios from "axios";
import CourseCard from "../../Common/CourseCard";

const CourseSection = () => {


    const [courses, setCourses] = useState([]);

	const getData = async () => {
		const res = await axios.get("http://localhost:5000/course");
		setCourses(res.data);
	};


    useEffect(() => {
        getData()
    }, [])
    

	return (
		<section className=" section py-16">
			<SectionHeading title="Popular Courses" />

			<div className=" grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12  pt-10">
			
                {
                    courses && courses.map(course=>(
                        <div key={ course._id}>
                            <CourseCard {...course} product={course} />
                            
                        </div>

                    ))
                }
              
			</div>
		</section>
	);
};

export default CourseSection;
