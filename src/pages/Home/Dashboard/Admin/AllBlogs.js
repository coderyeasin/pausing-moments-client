import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const AllBlogs = () => {
  const { users } = useAuth();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = `https://enigmatic-savannah-10349.herokuapp.com/allBlogs`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setBlogs(data.filter((e) => e.location && e.info && e.cost).reverse())
      );
  }, [users?.email]);

  //DELETE
  const handleDelete = (id) => {
    const process = window.confirm("Are you sure?");
    if (process) {
      const url = `https://enigmatic-savannah-10349.herokuapp.com/blogs/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrder = blogs.filter((order) => order._id !== id);
            setBlogs(remainingOrder);
          }
        });
    }
  };
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
            <th>Action</th>
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
              <td className="space-y-3">
                <Link to={`/dashboard/updateOrders/${event._id}`}>
                  <button className="text-black bg-red-200 px-3">Edit</button>
                </Link>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="text-red-400 px-3 bg-teal-100"
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllBlogs;
