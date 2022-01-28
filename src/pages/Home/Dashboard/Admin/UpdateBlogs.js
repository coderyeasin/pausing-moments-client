import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlogs = () => {
  const [status, setStatus] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://enigmatic-savannah-10349.herokuapp.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setStatus(data));
  }, []);

  const handleStatus = (e) => {
    const status = e.target.value;
    const updateStatus = { status: status };
    setStatus(updateStatus);
  };

  const handleUpdate = (e) => {
    fetch(`https://enigmatic-savannah-10349.herokuapp.com/blogs/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Updated successfully");
          setStatus({});
          navigate("/dashboard/allBlogs");
        }
      });

    e.preventDefault();
  };
  return (
    <div className="text-center space-y-3">
      <h3>ID: {id}</h3>
      <form onSubmit={handleUpdate}>
        <input
          className="text-dark"
          type="text"
          onChange={handleStatus}
          value={status?.status || ""}
        />{" "}
        <br />
        <input
          type="submit"
          value="Update"
          className="bg-teal-500 px-3 cursor-pointer rounded-lg text-xl my-3 text-white"
        />
      </form>
    </div>
  );
};

export default UpdateBlogs;
