import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Custom-Hooks/useAuth";
import { NavLink } from "react-router";

const Reset = () => {

  const {resetPassword} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
    resetPassword(data.email)
    .then(()=>{
      
      alert("Password reset email has been sent successfully ✅");

    })
    .catch(error=>{
      console.log(error);
      alert("User log-in was not successfull");
    })

  };


  return (
    <div className="w-full mx-auto my-5">
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-green-200 p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6 border border-gray-100">
          {/* Title */}
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold text-gray-800">Please Enter Your Email</h1>
            <p className="text-sm text-gray-500">
              Go ahead to reset you password
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

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
            >
              Reset
            </button>
          </form>

        
        </div>
      </div>
    </div>
  );
};

export default Reset;
