import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
// import axios from "axios";
// import Swal from "sweetalert2";

const Post = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const { users } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://enigmatic-savannah-10349.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlog(data);
      });
  }, []);
  const uniqueBlog = blog.find((e) => e._id === id); //find must

  ////////////comment
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
  console.log(data);
  };

  return (
    <div>
      <div className="bg-teal-100 md:w-3/4 mx-auto items-center  pt-3 shadow-xl rounded-2xl px-20 my-10">
        <img
          className=" rounded-lg mx-auto transform duration-500 hover:scale-105 mb-5"
          src={uniqueBlog?.image}
          alt=""
        />
        <article className=" font-bold text-teal-900 text-justify bg-tal-50 bg-opacity-70 py-20 mb-20 rounded-lg px-10 space-y-5">
          <h3 className="text-3xl pt-12"> {uniqueBlog?.title} </h3>
          <ul className="list-unstyled">
            <li>Travel Info : {uniqueBlog?.info}</li>
            <li>Travel Cost : {uniqueBlog?.cost}</li>
            <li>Category : {uniqueBlog?.category}</li>
            <li>Location : {uniqueBlog?.location}</li>
            <li>Posted Date : {uniqueBlog?.posted.toString()}</li>
          </ul>
          <h3>Details:</h3>
          <p className="text-sm  mb-5">{uniqueBlog?.description}</p>
        </article>
        <div>
          <form
            className="bg-pink-50 bg-opacity-70 py-10 my-10 mx-auto md:w-9/12 rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              defaultValue={uniqueBlog?.title}
              className="md:w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 focus:bg-teal-600"
              {...register("title", { required: true })}
            />

            <input
              defaultValue={users?.email}
              className="md:w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 focus:bg-teal-600"
              {...register("email")}
            />

            <textarea
              placeholder="Leave a comment"
              className="md:w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 focus:bg-teal-600"
              {...register("comment", { required: true, maxLength: 120 })}
            />

            <input
              className=" rounded-full cursor-pointer md:w-2/4 my-5 bg-transparent outline-none border-b-2 py-2 px-4 bg-teal-800 text-xl text-white transform duration-500 hover:scale-95"
              type="submit"
              value="Comment"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
