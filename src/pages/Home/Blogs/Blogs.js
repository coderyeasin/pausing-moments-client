import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount] = useState(10);

  const { isLoading } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data.reverse());
        // setPageCount(data);
      });
  }, []);

  //Get Current Posts
  const indexOfLastPost = page * pageCount;
  const indexOfFirstPost = indexOfLastPost - pageCount;
  const currentPost = blogs.slice(indexOfFirstPost, indexOfLastPost);

  //pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogs.length / pageCount); i++) {
    pageNumbers.push(i);
  }

  //change page
  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <div className="my-20">
      {isLoading && (
        <div className="flex justify-center items-center mb-5">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-900"></div>
        </div>
      )}
      {!isLoading && (
        <div className=" md:flex flex-wrap gap-5 mx-10">
          {currentPost.map((items) => (
            <div
              className="bg-teal-50 md:w-3/4 mx-auto pt-3 text-center shadow-xl rounded-2xl relative"
              key={items._id}
            >
              <img
                className="w-80 h-80 rounded-full mx-auto  opacity-70 relative transform duration-500 hover:scale-105 mb-5"
                src={items.image}
                alt=""
              />
              <Link to={`/explore/${items._id}`}>
                <button className="text-xl text-teal-800 border-2 px-5 py-3 mb-5 border-emerald-800 rounded-lg hover:text-emerald-100 hover:bg-teal-900">
                  Details
                </button>
              </Link>
              <div className="md:flex justify-evenly items-center gap-4">
                <div className="absolute md:w-4/12 rounded-r-lg bottom-0 left-0 right-0 top-20 font-bold text-emerald-900 bg-teal-50 bg-opacity-70 md:h-32 py-3 space-y-3 my-10">
                  <h3 className="text-3xl"> {items.title} </h3>
                  <h5 className="text-normal">Posted Date: {items.posted}</h5>
                </div>

                <div className="absolute md:w-4/12 rounded-l-lg bottom-0 left-250 right-0 top-20 font-bold text-emerald-900 bg-teal-50 bg-opacity-70 md:h-48 my-10 space-y-3">
                  <Rating
                    readonly
                    initialRating={items?.rating}
                    emptySymbol="far fa-star "
                    fullSymbol="fas fa-star "
                    className="my-3"
                  />

                  <h3 className="text-3xl"> Price: ${items.cost} </h3>
                  <h5 className="text-normal uppercase">
                    {items.info.slice(0, 45)}
                  </h5>
                  <p className="text-normal uppercase"> {items.location} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* pagination */}
      <div className="text-2xl flex text-center text-black border-2 w-20 mx-auto my-5 pagination">
        {pageNumbers.map((number) => (
          <ul key={number._id} className="w-full">
            <li className="border-2">
              <a onClick={() => paginate(number)} href="!#">
                {number}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
