import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Custom-Hooks/useAuth";
import { NavLink, useLocation, useNavigate } from "react-router";

const Login = () => {

  const {loginUser, loginWithPopUp, setLoading} = useAuth();
  const location = useLocation();
    const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
    .then(result=>{
      console.log(result);
      navigate(location?.state || '/')
      setLoading(false);
      alert("User log-in is successfull ✅");


    })
    .catch(error=>{
      console.log(error);
      setLoading(false);
      alert("User log-in was not successfull");


    })

  };

  const hanglePopUp =()=>{
    loginWithPopUp()
    .then(result=>{
      console.log(result);
      navigate(location?.state || '/')
      setLoading(false);
      alert("Log-in with google is successfull ✅");
    })
    .catch(error=>{
      console.log(error);
      alert("Log-in with was successfull");
      setLoading(false);
    })
  };




  return (
    <div className="w-full mx-auto my-5">
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-green-200 p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6 border border-gray-100">
          {/* Title */}
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-sm text-gray-500">
              Login to continue to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleForm)} className="space-y-4">
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
              <button
                type="button"
                className="text-s text-blue-600 underline"
              >
                 <NavLink to="/reset">Forgot password? Reset Now</NavLink>
              </button>
             
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 py-2">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          {/* Google Login */}
          <button onClick={hanglePopUp}
           className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-all">
            <FcGoogle size={24} />
            <span className="font-medium text-gray-700">
              Sign in with Google
            </span>
          </button>

          {/* Footer Text */}
          <p className="text-center text-sm text-gray-600">
            New here?{" "}
            <span className="text-green-600 font-medium hover:underline cursor-pointer">
              Create an account now <span className="font-bold text-blue-600 underline"><NavLink to="/register">Register</NavLink></span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
