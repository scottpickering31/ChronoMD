import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: Record<string, any>) => console.log(data);
  console.log(errors);

  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover bg-local h-extral">
      <div className="flex justify-end mr-40 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-14 py-4 text-xl w-1/3 rounded-3xl bg-white shadow-lg mt-5 "
        >
          <h1 className="text-center mb-12 text-3xl underline underline-offset-8 ">
            Sign Up
          </h1>
          <h2 className="text-xl mb-8 text-center">
            See what ChronoMD has to offer
          </h2>
          <div className="flex flex-row justify-center gap-4 items-center mb-12 border-2 border-gray-300 rounded-md p-2 cursor-pointer hover:rounded-full">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              className="h-8 w-8"
            />
            <h3>Sign up with Google</h3>
          </div>

          {errors["First name"] && (
            <p className="text-red-500 text-sm">First name is required</p>
          )}
          <input
            type="text"
            className={`${
              errors["First name"]
                ? "border-b-2 border-red-500"
                : "border-b-2 border-black"
            } bg-gray-50 mb-12 h-10 p-2`}
            placeholder="First name*"
            {...register("First name", { required: true, maxLength: 80 })}
          />

          {errors["Last name"] && (
            <p className="text-red-500 text-sm">Last name is required</p>
          )}
          <input
            className={`${
              errors["Last name"]
                ? "border-b-2 border-red-500"
                : "border-b-2 border-black"
            } bg-gray-50 mb-12 h-10 p-2`}
            type="text"
            placeholder="Last name*"
            {...register("Last name", { required: true, maxLength: 100 })}
          />

          <input
            type="text"
            placeholder="Company"
            {...register("Company", {})}
            className="border-b-2 border-black bg-gray-50 mb-12 h-10 p-2"
          />

          {errors["Email"] && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}
          <input
            className={`${
              errors["Email"]
                ? "border-b-2 border-red-500"
                : "border-b-2 border-black"
            } bg-gray-50 mb-12 h-10 p-2`}
            type="text"
            placeholder="Email*"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />

          {errors["Password"] && (
            <p className="text-red-500 text-base">
              Password is required (Min Length: 8 Characters)
            </p>
          )}
          <input
            className={`${
              errors["Password"]
                ? "border-b-2 border-red-500"
                : "border-b-2 border-black"
            } bg-gray-50 mb-10 h-10 p-2`}
            type="password"
            placeholder="Password*"
            {...register("Password", { required: true, min: 8 })}
          />

          {errors["Checkbox"] && (
            <p className="text-red-500 text-sm">Please accept to proceed</p>
          )}
          <div className="flex flex-row gap-2 text-base mb-10">
            <input
              type="checkbox"
              placeholder="Checkbox"
              className="h-6 w-6"
              {...register("Checkbox", { required: true })}
            />
            <p>
              I agree to the
              <strong className="cursor-pointer"> Terms of Service</strong> and
              <strong className="cursor-pointer"> Privacy Policy</strong>.
            </p>
          </div>

          <input
            type="submit"
            className="cursor-pointer bg-black text-white mb-4 py-3 hover:rounded-full"
            value="Sign Up"
          />

          <p className="text-base text-center">
            Already have an account?
            <strong className="cursor-pointer"> Sign In</strong>
          </p>
        </form>
      </div>
    </div>
  );
}
