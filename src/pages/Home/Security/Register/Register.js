import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../../../Hooks/useFirebase";
// import useAuth from '../../../Hooks/useAuth';
import signupImage from "../../../../images/airport.jpg";
import Swal from "sweetalert2";

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
    if (data.password !== data.password2) {
      Swal.fire({
        icon: "error",
        title: "Oops... Invalid info",
        text: "Something went wrong!",
      });
      reset();
      return;
    }

    createNewUser(data.email, data.password, data.name, location, navigate);

    console.log(data);
  };

  //google login
  const handleGoogle = () => {
    googleLoginUsers(location, navigate);
  };

  return (
    <div className="flex justify-center items-center register_cover">
      {isLoading && (
      <div className="flex justify-center items-center mb-5">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-900"></div>
      </div>
      )}

      <div className="md:flex justify-evenly gap-4 items-center">
        <div className="md:w-3/4 ">
          <img src={signupImage} alt="reg_img" />
        </div>

        <div className="md:w-2/4 bg-teal-700 bg-opacity-80">
          {!isLoading && (
          <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-emerald-500 focus:bg-emerald-600"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <input
              className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-emerald-500 focus:bg-emerald-600"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <input
              className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-emerald-500 focus:bg-emerald-600"
              type="password"
              placeholder="Password"
              {...register("password")}
            />{" "}
            <br />
            <input
              className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-emerald-500 focus:bg-emerald-600"
              type="password"
              placeholder="Confirm Password"
              {...register("password2")}
            />{" "}
            <br />
            <input
              className="cursor-pointer block w-1/4 bottom-0 bg-transparent outline-none py-2 px-4 rounded-lg mx-auto text-xl text-white placeholder-teal-500 bg-teal-600"
              type="submit"
              value="Register"
            />
          </form>
          )}
          <Link
            to="/login"
            className="text-white text-xl block text-center mt-3"
          >
            Create an account <b className="text-yellow-500">Click </b> here{" "}
          </Link>{" "}
          <br />
          <h3 className="text-white text-xl my-3 text-center">
            OR Using Social Media
          </h3>
          <button
            className="bg-teal-800 rounded-lg text-xl text-yellow-50 p-3 my-3 text-center"
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
