import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import back from "../../../../images/village_tour.jpg";

const AddBlogs = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://enigmatic-savannah-10349.herokuapp.com/blogs", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
      console.log(res);
    });
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-2 gap-5 items-center mx-10 my-5">
        <div className="">
          <img src={back} alt="" />
        </div>
        <div className="shadow-2xl">
          <h3 className="text-2xl text-center py-5">Add New Blog</h3>

          <form
            className="bg-teal-50 space-y-5 mb-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="md:w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 focus:bg-teal-600"
              placeholder="Blog Title"
              {...register("title", { required: true, maxLength: 100 })}
            />

            <input
              placeholder="Travel Info"
              className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 focus:bg-teal-600"
              {...register("info", { required: true })}
            />
            
            <input
              placeholder="Travel Time"
              type="date"
              className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4 text-teal-500  placeholder-teal-500 focus:bg-teal-600"
              {...register("time", { required: true })}
            />

            <input
              placeholder="Expense"
              className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 focus:bg-teal-600"
              {...register("expense", { required: true })}
            />

            <input
              placeholder="Location"
              className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 focus:bg-teal-600"
              {...register("location", { required: true, maxLength: 50 })}
            />
            <input
              placeholder="Tour Cost"
              className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 focus:bg-teal-600"
              type="tel"
              {...register("cost")}
            />
            <input
              placeholder="Rating"
              className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 focus:bg-teal-600"
              type="tel"
              {...register("rating")}
            />
            <input
              placeholder="Date"
              type="date"
              className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4 text-teal-500 placeholder-teal-500 focus:bg-teal-600"
              {...register("posted", { required: true })}
            />

            <select
              placeholder="Category"
              className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4 text-teal-500 placeholder-teal-500 focus:bg-teal-600"
              {...register("category")}
            >
              <option className="text-black">Select Category</option>
              <option className="text-black" value="Road Trip">
                Road Trip
              </option>
              <option className="text-black" value="Hiking Tour">
                Hiking Tour
              </option>
              <option className="text-black" value="Family Tour">
                Family Tour
              </option>
              <option className="text-black" value="Couple Tour">
                Couple Tour
              </option>
              <option className="text-black" value="Friends Tour">
                Friends Tour
              </option>
              <option className="text-black" value="Hangouts Tour">
                Hangouts Tour
              </option>
              <option className="text-black" value="Independent Tour">
                Independent Tour
              </option>
              <option className="text-black" value="Adventure">
                Adventure
              </option>
            </select>

            <input
              placeholder="Image Link"
              className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 focus:bg-teal-600"
              {...register("image", { required: true })}
            />

            <textarea
              placeholder="Description"
              className="w-3/4 bg-transparent outline-none border-b-2 py-2 px-4  placeholder-teal-500 focus:bg-teal-600"
              {...register("description")}
            />
            <br />
            <input
              placeholder=""
              className="md:w-1/4 -lg cursoroundedr-pointer bg-transparent outline-none border-b-2 py-2 px-4 bg-teal-500 text-xl text-white transform duration-500 hover:scale-95"
              type="submit"
              value="Add Blogs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
