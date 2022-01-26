import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../../../Hooks/useFirebase";
// import useAuth from '../../../Hooks/useAuth';
import signupImage from "../../../../images/airport.jpg";
// import Swal from 'sweetalert2'

import "./Register.css";

const Register = () => {
  // const { users, googleLoginUsers, createNewUser, isLoading } = useAuth();
  const { users, googleLoginUsers, createNewUser, isLoading } = useFirebase();
  //modal
  const navigate = useNavigate();
  const location = useLocation();
  //react hook
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // if (data.password !== data.password2) {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops... Invalid info',
    //         text: 'Something went wrong!',
    //     })
    //     reset()
    //    return
    // }

    //     createNewUser(data.email, data.password, data.name, location,  navigate)

    console.log(data);
  };

  //google login
  const handleGoogle = () => {
    // googleLoginUsers(location, navigate)
    googleLoginUsers(location, navigate);
  };

  return (
    <div className="md:flex flex-col justify-center gap-4 items-center register_cover">
      {/* {isLoading && ( */}
      <div className="flex justify-center items-center mb-5">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
      {/* )} */}

      <div className="md:flex justify-between items-center">
        <div className="w-3/4">
          {/* <p className="animate-spin text-pink-700">h</p> */}
          <img src={signupImage} alt="" />
        </div>

        <div className="w-3/4">
          {/* {!isLoading && ( */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <input
              className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <input
              className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600"
              type="password"
              placeholder="Password"
              {...register("password")}
            />{" "}
            <br />
            <input
              className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600"
              type="password"
              placeholder="Confirm Password"
              {...register("password2")}
            />{" "}
            <br />
            <input
              className=" cursor-pointer block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 bg-purple-600"
              type="submit"
              value="Register"
            />
          </form>
          {/* )} */}
          <Link to="/login" className="text-white text-center">
            Create an account <b>Click </b> here{" "}
          </Link>{" "}
          <br />
          <button
            className="bg-green-600 p-3 text-center text-white"
            onClick={handleGoogle}
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
