import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // Enable onChange mode for dynamic form validation
  });

  const onSubmit = (data: Record<string, any>) => {
    // Only navigate to the dashboard if the form is valid
    if (isValid) {
      console.log("Form submitted:", data);
      // Redirect to the dashboard here (e.g., using history.push)
    }
  };

  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover bg-local h-extral">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-14 py-4 text-xl w-1/3 bg-white shadow-lg h-extral"
        >
          <div className="flex items-center justify-center mb-8">
            <Link to="/">
              <img src="/images/ChronoMD-Logo.png" className="h-44 w-52" />
            </Link>
          </div>
          <div className="flex flex-row justify-center gap-4 items-center mb-12 border-2 border-gray-300 rounded-md p-2 cursor-pointer hover:rounded-full">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              className="h-8 w-8"
              alt="Google logo"
            />
            <h3>Google</h3>
          </div>
          <p className="text-center mb-14 text-gray-400 opaity-80 text-base ">
            Or with email and password
          </p>
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
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />

          {errors["Password"] && (
            <p className="text-red-500 text-sm">
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
            placeholder="Password"
            {...register("Password", { required: true, min: 8 })}
          />
          {isValid ? (
            <Link
              to="/account/dashboard"
              className=" bg-black text-white mb-4 py-3 hover:rounded-full text-center"
            >
              <input type="submit" value="Log In" className="cursor-pointer" />
            </Link>
          ) : (
            <div className="bg-gray-300 text-white mb-4 py-3 rounded-full text-center cursor-not-allowed opacity-50">
              Log In
            </div>
          )}

          <p className="text-base text-center">
            Don't have an account?
            <Link to="/account/signup">
              <strong className="cursor-pointer"> Sign Up</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
