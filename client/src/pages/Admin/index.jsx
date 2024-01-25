import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import FormComponent from "../../components/AdminComponents/FormComponent";
import axios from "axios";
import { toast } from "react-hot-toast";

const Admin = () => {
	const [courses, setCourses] = useState([]);
	const [searchText, setSearchText] = useState('');

	const getData = async () => {
		const res = await axios.get("http://localhost:5000/course");
		setCourses(res.data);
	};


	const createData = async (data) => {
		const res = await axios.post("http://localhost:5000/course", data);
		getData()
		toast.success('Added new Course!')

	};


	const deleteCourse = async (id ) => {
		const res = await axios.delete(`http://localhost:5000/course/${id}`);
		getData()
		toast.success('Course  Deleted!')

	};


	useEffect(() => {
		getData();
	}, []);


	return (
		<main className=" page  pt-48 pb-16 section">
			<Helmet>
				<title>Admin</title>
			</Helmet>

			<FormComponent createData={createData} />

			<div className=" pt-10
			">
				<input type="text" className=" border border-main-color px-3 py-2 outline-none text-gray-500" placeholder="Search by Title"  onChange={(e)=>setSearchText(e.target.value)} />
			</div>

			<div className="flex flex-col pt-12">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div className="overflow-hidden">
							<table className="min-w-full text-center text-sm font-light">
								<thead className="border-b  font-medium text-white dark:border-neutral-500  bg-main-color">
									<tr>
										<th scope="col" className=" px-6 py-4">
											Image
										</th>
										<th scope="col" className=" px-6 py-4">
											Title
										</th>
										<th scope="col" className=" px-6 py-4">
											Info
										</th>

										<th scope="col" className=" px-6 py-4">
											AuthorImage
										</th>

										<th scope="col" className=" px-6 py-4">
											AuthorName
										</th>

										<th scope="col" className=" px-6 py-4">
											Position
										</th>
										<th scope="col" className=" px-6 py-4">
											Price
										</th>
										<th scope="col" className=" px-6 py-4">
											
										</th>
									</tr>
								</thead>
								<tbody className=" font-medium">
									{courses &&
										courses.filter(item=>item.title.toLowerCase().trim().includes(searchText.toLowerCase().trim())).map((course) => (
											<tr key={course._id} className="border-b dark:border-neutral-500">
												<td className="whitespace-nowrap  px-6 py-4 font-medium">
													<img src={course.image} alt="" className=" w-[100px]" />
												</td>
												<td className="whitespace-nowrap  px-6 py-4">{course.title}</td>
												<td className="whitespace-nowrap  px-6 py-4">{course.info}</td>
												<td className="whitespace-nowrap  px-6 py-4">
													<img src={course.authorImage} alt="" />
												</td>
												<td className="whitespace-nowrap  px-6 py-4">{course.authorName}</td>
												<td className="whitespace-nowrap  px-6 py-4">{course.authorPosition}</td>
												<td className="whitespace-nowrap  px-6 py-4">${course.price}</td>
												<td className="whitespace-nowrap  px-6 py-4">
													<button onClick={() => deleteCourse(course._id)} className=" border  border-main-color px-3 py-3 font-medium">Delete</button>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Admin;
