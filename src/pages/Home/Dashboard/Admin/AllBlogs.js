import React from "react";

const AllBlogs = () => {
  return (
    <div>
        <h3 className="text-4xl uppercase font-semibold">My Blogs :  </h3>
       
        <table className="table-auto w-full" >
                    <thead>
                        <tr className="bg-teal-700 border-2 border-emerald-900">
                        <th>Date</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Phone</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Payment</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                        <td>Dynamic Data are here</td>
                        <td>Dynamic Data are here</td>
                        <td>Dynamic Data are here</td>
                        <td>Dynamic Data are here</td>
                        <td>Dynamic Data are here</td>
                        <td>Dynamic Data are here</td>
                        <td>Dynamic Data are here</td>
                    </tr>
            </tbody>
      </table>
      </div>
  );
};

export default AllBlogs;
