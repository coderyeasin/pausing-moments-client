import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { users } = useAuth();

  useEffect(() => {
    fetch(
      `https://enigmatic-savannah-10349.herokuapp.com/myBlogs/${users.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h3 className="text-xl my-3 font-bold">Blogs : {blogs.length} </h3>
      <table className="table-auto md:w-full">
        <thead>
          <tr className="bg-emerald-700 border-2 border-pink-900">
            <th>Posted Date</th>
            <th>Info</th>
            <th>Title</th>
            <th>Expense</th>
            <th>Cost</th>
            <th>Rating</th>
            <th>Travel Time</th>
            <th>location</th>
            <th>Category</th>
            <th>Image</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        {blogs.map((event) => (
          <tbody key={event._id}>
            <tr className="bg-emerald-700 border-2 border-pink-900 text-yellow-100">
              <td className="border-r-2 border-pink-900">{event.posted}</td>
              <td className="border-r-2 border-pink-900">{event.info}</td>
              <td className="border-r-2 border-pink-900">{event.title}</td>
              <td className="border-r-2 border-pink-900">{event.expense}</td>
              <td className="border-r-2 border-pink-900">{event.cost}</td>
              <td className="border-r-2 border-pink-900">{event.rating}</td>
              <td className="border-r-2 border-pink-900">{event.time}</td>
              <td className="border-r-2 border-pink-900">{event.location}</td>
              <td className="border-r-2 border-pink-900">{event.category}</td>
              <td className="border-r-2 border-pink-900">
                {event.image.slice(0, 10)}...
              </td>
              <td className="border-r-2 border-pink-900">
                {event.description.slice(0, 20)}...
              </td>
              <td className="border-r-2 border-pink-900">{event.status}...</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyBlogs;
