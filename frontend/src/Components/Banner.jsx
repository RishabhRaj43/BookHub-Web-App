import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Banner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    toast.success("Thank you for subscribing!");
  }
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-7 ">
        <div className="w-full md:w-1/2 mt-12 my-9 md:mt-28">
          <div className="space-y-10">
            <h1 className="text-4xl font-bold">
              Learn Something <br />
              <span className="text-accent">New Everyday!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              blanditiis enim quae accusamus culpa magni nemo adipisci
              dignissimos dolorem praesentium in, quod!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="input input-bordered flex items-center gap-2 my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </label>
              {errors.email && (
                <span className="text-error text-sm">This field is required</span>
              )}
              <br />
              <button className="btn btn-accent mt-5">Submit</button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img className="custom-img" src="/banner.png" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
