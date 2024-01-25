import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import FormComponent from "../../components/AdminComponents/FormComponent";
import axios from "axios";
import { toast } from "react-hot-toast";

const Admin = () => {
	const [courses, setCourses] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [property, setProperty] = useState(null);

	const getData = async () => {
		const res = await axios.get("http://localhost:5000/course");
		setCourses(res.data);
	};


	const createData = async (data) => {
		const res = await axios.post("http://localhost:5000/course", data);
		getData()
		toast.success('Added new Course!')

	};


	const deleteCourse = async (id) => {
		const res = await axios.delete(`http://localhost:5000/course/${id}`);
		getData()
		toast.success('Course  Deleted!')

	};

	const findType = (item) => {
		if (typeof item === 'string') {
			return item.toLowerCase()
		} else {
			return item
		}
	}


	useEffect(() => {
		getData();
	}, []);


	return (
		<main className=" page  pt-48 pb-16 section">
			<Helmet>
				<title>Admin</title>
			</Helmet>

			<FormComponent createData={createData} />

			<div className=" pt-10 flex justify-between items-center">
				<input type="text" className=" border border-main-color px-3 py-2 outline-none text-gray-500" placeholder="Search by Title" onChange={(e) => setSearchText(e.target.value)} />

				<div className=" flex gap-2">
					<button onClick={() => setProperty({
						name: 'title', asc: true
					})}
						className=" border border-main-color px-3 py-1 rounded-xl">
						A-Z

					</button>

					<button onClick={() => setProperty({
						name: 'title', asc: false
					})}
						className=" border border-main-color px-3 py-1 rounded-xl">
						Z-A

					</button>

					<button onClick={() => setProperty({
						name: 'price', asc: true
					})}
						className=" border border-main-color px-3 py-1 rounded-xl">
						Low to High

					</button>

					<button onClick={() => setProperty({
						name: 'price', asc: false
					})}
						className=" border border-main-color px-3 py-1 rounded-xl">
						High to Low

					</button>

					<button onClick={() => setProperty({
						name: 'title', asc: null
					})}
						className=" border border-main-color px-3 py-1 rounded-xl">
						Default

					</button>
				</div>

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
										courses.filter(item => item.title.toLowerCase().trim().includes(searchText.toLowerCase().trim()))
											.sort((a, b) => {
												if (property && property.asc === true) {
													return findType(a[property.name]) < findType(b[property.name]) ? -1 : findType(b[property.name]) < findType(a[property.name]) ? 1 : 0
												} else if (property && property.asc === false) {
													return findType(a[property.name]) > findType(b[property.name]) ? -1 : findType(b[property.name]) > findType(a[property.name]) ? 1 : 0

												} else {
													return 0
												}
											})
											.map((course) => (
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
