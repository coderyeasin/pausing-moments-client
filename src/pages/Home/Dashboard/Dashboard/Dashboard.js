import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";

const Dashboard = () => {
  const { users, admin, isLoading } = useAuth();

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      )}

      {!isLoading && (
        <div className="bg-teal-100 flex flex-wrap flex-row items-center pt-3 shadow-xl rounded-2xl my-20">
          {!admin ? (
            <div className="w-60 items-center bg-teal-100 p-5 shadow-xl rounded-2xl  text-justify">
              <h3 className="text-center text-xl py-5">
                {users?.displayName} Panel
              </h3>
              <Link
                className="w-full  flex  items-center space-x-20 text-xl  px-10"
                to="/dashboard/addBlog"
              >
                <FaBeer className="mx-2" /> Add Blog
              </Link>{" "}
              <br />
              <Link
                className="w-12/12 flex  items-center space-x-20  text-xl px-10"
                to="/dashboard/myBlogs"
              >
                {" "}
                <FaBeer className="mx-2" /> My Blog
              </Link>{" "}
              <br />
              <Link
                className="w-12/12 flex  items-center space-x-20  text-xl px-10"
                to="/dashboard/payment/:id"
              >
                {" "}
                <FaBeer className="mx-2" /> Pay
              </Link>{" "}
              <br />
              <Link
                className="w-12/12 flex  items-center space-x-20  text-xl px-10"
                to=""
              >
                {" "}
                <FaBeer className="mx-2" /> Profile
              </Link>{" "}
              <br />
              <Link
                className="w-12/12 flex  items-center space-x-20  text-xl px-10"
                to=""
              >
                {" "}
                <FaBeer className="mx-2" /> Settings
              </Link>{" "}
              <br />
              <Link
                className="w-12/12 flex  items-center space-x-20  text-xl px-10"
                to=""
              >
                {" "}
                <FaBeer className="mx-2" /> Logout
              </Link>
            </div>
          ) : (
            <div className="w-60 items-center bg-teal-100 p-5 shadow-xl rounded-2xl  text-justify">
              <h3 className="text-center text-xl py-5">
                {users?.displayName} Panel
              </h3>
              <Link
                className="w-full  flex  items-center space-x-20 text-xl  px-5"
                to="/dashboard/addBlog"
              >
                <FaBeer className="mx-2" /> Add Blog
              </Link>{" "}
              <br />
              <Link
                className="w-12/12 flex  items-center space-x-10  text-xl px-5"
                to="/dashboard/makeAdmin"
              >
                {" "}
                <FaBeer className="mx-2" /> Make Admin
              </Link>{" "}
              <br />
              <Link
                className="w-12/12 flex  items-center space-x-20  text-xl"
                to="/dashboard/allBlogs"
              >
                {" "}
                <FaBeer className="mx-2" /> All Blogs{" "}
              </Link>{" "}
              <br />
              <Link
                className="w-12/12 flex  items-center space-x-20  text-xl px-5"
                to=""
              >
                {" "}
                <FaBeer className="mx-2" /> Settings
              </Link>{" "}
              <br />
              <Link
                className="w-12/12 flex  items-center space-x-20  text-xl px-5"
                to=""
              >
                
                <FaBeer className="mx-2" /> Logout
              </Link>
            </div>
          )}

          <div className="my-5 px-10 w-3/4">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
