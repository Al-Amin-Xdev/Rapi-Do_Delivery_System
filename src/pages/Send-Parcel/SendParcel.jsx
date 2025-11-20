import React from "react";
import { useForm} from "react-hook-form";
import { FaBox } from "react-icons/fa";
import { useLoaderData } from "react-router";

const SendParcel = () => {

  const pickUpStations = useLoaderData();
  // console.log(pickUpStations)
  const duplicateDivison = pickUpStations.map((district) => district.region);
  // console.log(duplicateDistrict);
  const divison = [...new Set(duplicateDivison)];
  // console.log(divison);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const senderDistrict = watch('senderDivision')

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };


   const regionBydistrict = (regionValue)=>{
    const regions = pickUpStations.filter(r=> r.region === regionValue);
    const district = regions.map(location => location.district);
    return district;
  };


  const phonePattern = /^01\d{9}$/;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <div className="flex items-center gap-2 mb-6">
        <FaBox className="text-primary text-xl" />
        <h2 className="text-2xl font-semibold">Send Parcel</h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 rounded-xl shadow-md"
      >
        {/* Category Section */}
        <fieldset className="border border-gray-300 rounded-xl p-4">
          <legend className="px-2 text-lg font-medium">Parcel Category</legend>

          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Document"
                {...register("category", {
                  required: "Please select category",
                })}
                className="radio radio-primary"
              />
              Document
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Non-Document"
                {...register("category", {
                  required: "Please select category",
                })}
                className="radio radio-primary"
              />
              Non-Document
            </label>
          </div>

          {errors.category && (
            <p className="text-red-600 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </fieldset>

        {/* Parcel Info */}
        <fieldset className="border border-gray-300 rounded-xl p-4">
          <legend className="px-2 text-lg font-medium">
            Parcel Information
          </legend>

          <div className="grid md:grid-cols-3 gap-4 mt-2">
            <div>
              <label className="block mb-1 font-medium">Parcel Name</label>
              <input
                type="text"
                placeholder="Parcel Name"
                {...register("parcelName", {
                  required: "Parcel name is required",
                })}
                className={`input input-bordered w-full ${
                  errors.parcelName && "border-red-500"
                }`}
              />
              {errors.parcelName && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.parcelName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium">Parcel Info</label>
              <input
                type="text"
                placeholder="Parcel Info"
                {...register("parcelInfo", {
                  required: "Parcel info is required",
                })}
                className={`input input-bordered w-full ${
                  errors.parcelInfo && "border-red-500"
                }`}
              />
              {errors.parcelInfo && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.parcelInfo.message}
                </p>
              )}
            </div>

            <div className="flex gap-3 items-start">
              <div className="flex-1">
                <label className="block mb-1 font-medium">Weight</label>
                <input
                  type="number"
                  placeholder="Weight"
                  {...register("weight", {
                    required: "Weight is required",
                    min: {
                      value: 0.001,
                      message: "Weight must be greater than 0",
                    },
                    validate: (value) =>
                      value <= 100 || "Weight cannot exceed 100 kg",
                  })}
                  className={`input input-bordered w-full ${
                    errors.weight && "border-red-500"
                  }`}
                />
                {errors.weight && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.weight.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Unit</label>
                <select
                  {...register("weightUnit", {
                    required: "Select weight unit",
                  })}
                  className={`input input-bordered ${
                    errors.weightUnit && "border-red-500"
                  }`}
                >
                  <option value="">Unit</option>
                  <option value="kg">kg</option>
                  <option value="gm">gm</option>
                </select>
                {errors.weightUnit && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.weightUnit.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </fieldset>

        {/* Sender + Receiver */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Sender */}
          <fieldset className="border border-gray-300 rounded-xl p-4">
            <legend className="px-2 text-lg font-medium">
              Sender Information
            </legend>

            <div className="mt-3 space-y-3">
              <div>
                <label className="block mb-1 font-medium">Sender Name</label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  {...register("senderName", {
                    required: "Sender name is required",
                  })}
                  className={`input input-bordered w-full ${
                    errors.senderName && "border-red-500"
                  }`}
                />
                {errors.senderName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.senderName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Sender Email</label>
                <input
                  type="email"
                  placeholder="Sender Email"
                  {...register("senderEmail", {
                    required: "Sender email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={`input input-bordered w-full ${
                    errors.senderEmail && "border-red-500"
                  }`}
                />
                {errors.senderEmail && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.senderEmail.message}
                  </p>
                )}
              </div>

              <div className="Division">
                <label className="block mb-1 font-medium">
                  Sender District
                </label>
                <select
                  {...register("senderDivision", {
                    required: "Please select a division",
                  })}
                  defaultValue="" // placeholder default
                  className={`select select-primary w-full ${
                    errors.senderDistrict && "border-red-500"
                  }`}
                >
                  <option value="" disabled>
                    Pick a division
                  </option>

                  {divison.map((dis, index) => (
                    <option key={index} value={dis}>
                      {dis}
                    </option>
                  ))}

                </select>
                {errors.senderDivision && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.senderDivision.message}
                  </p>
                )}
              </div>

              <div className="distric">
                <label className="block mb-1 font-medium">
                  Sender District
                </label>
                <select
                  {...register("senderDistrict", {
                    required: "Please select a district",
                  })}
                  defaultValue="" // placeholder default
                  className={`select select-primary w-full ${
                    errors.senderDistrict && "border-red-500"
                  }`}
                >
                  <option value="" disabled>
                    Pick a district
                  </option>

                  {regionBydistrict(senderDistrict).map((dis, index) => (
                    <option key={index} value={dis}>
                      {dis}
                    </option>
                  ))}

                </select>
                {errors.senderDistrict && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.senderDistrict.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Sender District
                </label>
                <input
                  type="text"
                  placeholder="Sender District"
                  {...register("senderDistrict", {
                    required: "Sender district is required",
                  })}
                  className={`input input-bordered w-full ${
                    errors.senderDistrict && "border-red-500"
                  }`}
                />
                {errors.senderDistrict && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.senderDistrict.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Sender Address</label>
                <input
                  type="text"
                  placeholder="Sender Address"
                  {...register("senderAddress", {
                    required: "Sender address is required",
                  })}
                  className={`input input-bordered w-full ${
                    errors.senderAddress && "border-red-500"
                  }`}
                />
                {errors.senderAddress && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.senderAddress.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Sender Phone</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  {...register("senderPhone", {
                    required: "Sender phone is required",
                    pattern: {
                      value: phonePattern,
                      message: "Invalid phone number",
                    },
                  })}
                  className={`input input-bordered w-full ${
                    errors.senderPhone && "border-red-500"
                  }`}
                />
                {errors.senderPhone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.senderPhone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Pickup Instruction
                </label>
                <textarea
                  placeholder="Pickup Instruction"
                  {...register("senderInstruction")}
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>
            </div>
          </fieldset>

          {/* Receiver */}
          <fieldset className="border border-gray-300 rounded-xl p-4">
            <legend className="px-2 text-lg font-medium">
              Receiver Information
            </legend>

            <div className="mt-3 space-y-3">
              <div>
                <label className="block mb-1 font-medium">Receiver Name</label>
                <input
                  type="text"
                  placeholder="Receiver Name"
                  {...register("receiverName", {
                    required: "Receiver name is required",
                  })}
                  className={`input input-bordered w-full ${
                    errors.receiverName && "border-red-500"
                  }`}
                />
                {errors.receiverName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.receiverName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Receiver Email</label>
                <input
                  type="email"
                  placeholder="Receiver Email"
                  {...register("receiverEmail", {
                    required: "Receiver email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={`input input-bordered w-full ${
                    errors.receiverEmail && "border-red-500"
                  }`}
                />
                {errors.receiverEmail && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.receiverEmail.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Receiver District
                </label>
                <input
                  type="text"
                  placeholder="Receiver District"
                  {...register("receiverDistrict", {
                    required: "Receiver district is required",
                  })}
                  className={`input input-bordered w-full ${
                    errors.receiverDistrict && "border-red-500"
                  }`}
                />
                {errors.receiverDistrict && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.receiverDistrict.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Receiver Address
                </label>
                <input
                  type="text"
                  placeholder="Receiver Address"
                  {...register("receiverAddress", {
                    required: "Receiver address is required",
                  })}
                  className={`input input-bordered w-full ${
                    errors.receiverAddress && "border-red-500"
                  }`}
                />
                {errors.receiverAddress && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.receiverAddress.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Receiver Phone</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  {...register("receiverPhone", {
                    required: "Receiver phone is required",
                    pattern: {
                      value: phonePattern,
                      message: "Invalid phone number",
                    },
                  })}
                  className={`input input-bordered w-full ${
                    errors.receiverPhone && "border-red-500"
                  }`}
                />
                {errors.receiverPhone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.receiverPhone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Pickup Instruction
                </label>
                <textarea
                  placeholder="Pickup Instruction"
                  {...register("receiverInstruction")}
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>
            </div>
          </fieldset>
        </div>

        <button className="btn btn-primary w-full">Submit Parcel</button>
      </form>
    </div>
  );
};

export default SendParcel;
