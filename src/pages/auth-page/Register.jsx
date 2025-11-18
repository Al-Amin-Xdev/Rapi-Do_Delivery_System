import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation, useNavigate } from "react-router";
import useAuth from "../../Custom-Hooks/useAuth";
import axios from "axios";

const Register = () => {
  const { registerUser, loginWithPopUp, setLoading, updateProfileInfo } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const handleForm = (data) => {
    // console.log(data); // Form data is coming

    // Form photo data is extracted
    const profileImg = data.photo[0];
    console.log(profileImg);

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user.email);

        // 1. store the image in form data
        const formData = new FormData();
        formData.append("image", profileImg);

        // 2. send the photo to store and get the ul
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;

        axios.post(image_API_URL, formData).then((res) => {
          console.log("After sending the image to imag bb", res.data.data.url);

          // Storing name and photo url into a variable
          const profileInfo = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          console.log("from PrfileInfo", profileInfo);



          // Updating User Profile Name and photo
          updateProfileInfo(profileInfo)
          .then(()=>{
             navigate(location.state || '/');
          })
          .catch(error=>{
            console.log(error);
          })

        });

        setLoading(false);
        alert("User Registration Successfull ✅");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("User Registration was not Successfull");
      });
  };

  const hanglePopUp = () => {
    loginWithPopUp()
      .then((result) => {
        console.log(result);
        navigate(location.state || '/');
        setLoading(false);
        alert("Log-in with is successfull ✅");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Log-in with Google was successfull");
      });
  };

  return (
    <div className="w-full mx-auto my-5">
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-green-200 p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6 border border-gray-100">
          {/* Title */}
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold text-gray-800">Register Now</h1>
            <p className="text-sm text-gray-500">
              Go ahead and creat an account to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleForm)} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your Name"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Name</label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Upload Your Photo"
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-600">Image is required</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                })}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="••••••••"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Minimum 6 character is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must include at least one uppercase letter, one
                  lowercase letter, one number, and one special character.
                </p>
              )}
            </div>

            <div className="text-right">
              <button type="button" className="text-sm">
                <NavLink to="/login">
                  Already have an account?{" "}
                  <span className="underline text-blue-500 font-bold">
                    Login
                  </span>
                </NavLink>
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
            >
              Register
            </button>

            <button
              onClick={hanglePopUp}
              className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-all"
            >
              <FcGoogle size={24} />
              <span className="font-medium text-gray-700">
                Sign in with Google
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
