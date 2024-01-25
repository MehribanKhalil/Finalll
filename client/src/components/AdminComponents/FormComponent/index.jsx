import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormComponent = ({ createData }) => {
	return (
		<section>
			<Formik
				initialValues={{ image: "", title: "", info:"", authorImage: '', authorName: '', authorPosition: '' ,price: ""}}
				validationSchema={Yup.object({
					image: Yup.string().required("Required"),
					title: Yup.string().max(30, "Must be 30 characters or less").required("Required"),
					info: Yup.string().required("Required"),
					authorImage: Yup.string().required("Required"),
					authorName: Yup.string().max(30, "Must be 30 characters or less").required("Required"),
					authorPosition: Yup.string().required("Required"),
					price: Yup.number().positive("Price must be positive").required("Required"),
				})}
				onSubmit={(values, { resetForm }) => {
					createData(values)
					resetForm()
				}}
			>
				<Form className=" flex flex-col gap-4  justify-center  text-center p-10 rounded-xl bg-gray-200 max-w-[700px] mx-auto">
					<div className=" flex flex-col gap-2  ">
						<Field name="image" type="text" className=' border border-main-color outline-none  px-6 py-2 rounded-xl' placeholder='Image' />
						<ErrorMessage name="image" />
					</div>

					<div className=" flex flex-col gap-2">
						<Field name="title" type="text" className=' border border-main-color outline-none  px-6 py-2 rounded-xl' placeholder='Title' />
						<ErrorMessage name="title" />
					</div>

					<div className=" flex flex-col gap-2">

						<Field name="info" type="text" className=' border border-main-color outline-none  px-6 py-2 rounded-xl' placeholder='Info' />
						<ErrorMessage name="info" />
					</div>

					<div className=" flex flex-col gap-2">

						<Field name="authorImage" type="text" className=' border border-main-color outline-none  px-6 py-2 rounded-xl' placeholder='authorImage' />
						<ErrorMessage name="authorImage" />
					</div>

					<div className=" flex flex-col gap-2">
						<Field name="authorName" type="text" className=' border border-main-color outline-none  px-6 py-2 rounded-xl' placeholder='authorName' />
						<ErrorMessage name="authorName" />
					</div>

					<div className=" flex flex-col gap-2">
						<Field name="authorPosition" type="text" className=' border border-main-color outline-none  px-6 py-2 rounded-xl' placeholder='authorPosition' />
						<ErrorMessage name="authorPosition" />
					</div>

					<div className=" flex flex-col gap-2">
						<Field name="price" type="text" className=' border border-main-color outline-none  px-6 py-2 rounded-xl' placeholder='Price' />
						<ErrorMessage name="price" />
					</div>

					<div className=" flex justify-center ">
						<button className=" border border-main-color px-6 py-2 rounded-xl bg-main-color text-white font-bold " type="submit">Add</button>
					</div>
				</Form>
			</Formik>
		</section>
	);
};

export default FormComponent;
