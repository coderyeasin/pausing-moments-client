import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../../../Hooks/useFirebase";

// import useAuth from '../../../Hooks/useAuth';
// // import useFirebase from '../../../Hooks/useFirebase';
import signupImage from "../../../../images/airport.jpg";
import Swal from "sweetalert2";

const Login = () => {
  // const { users, authError, isLoading, googleLoginUsers, usersCanLogin } = useAuth();
  const { users, authError, isLoading, googleLoginUsers, usersCanLogin } =
    useFirebase();
  //modal
  const navigate = useNavigate();
  const location = useLocation();

  //react hook
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data) {
      Swal.fire(
        `Congratulations! ${users?.displayName}`,
        "Successfully Login!",
        "success"
      );
    }
    if (!data) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    usersCanLogin(data.email, data.password, location, navigate);
  };

  //google login
  const handleGoogle = () => {
    googleLoginUsers(location, navigate);
  };

  return (
    <div>
      <div className="md:grid grid-cols-2 gap-4 items-center mx-auto register_cover">
        <div className=" mx-auto">
          <img src={signupImage} alt="" />
        </div>

        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-3/4 space-y-3 "
          >
            <input
              className="block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-teal-500 placeholder-teal-500 focus:bg-teal-600"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <input
              className="block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-teal-500 placeholder-teal-500 focus:bg-teal-600"
              type="password"
              placeholder="Password"
              {...register("password")}
            />{" "}
            <br />
            <input
              className="cursor-pointer block w-1/4 bottom-0 bg-transparent outline-none py-2 px-4 rounded-lg mx-auto text-xl text-white placeholder-teal-500 bg-teal-600"
              type="submit"
              value="Login"
            />
          </form>
          <Link to="/register" className="text-white text-xl">
            Don't have an account <b className="text-yellow-500">Click </b> here{" "}
          </Link>{" "}
          <br />
          <h3 className="text-white text-xl my-3">OR Using Social Media</h3>
          <button
            className="bg-teal-800 rounded-lg text-xl text-yellow-50 p-3"
            onClick={handleGoogle}
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
