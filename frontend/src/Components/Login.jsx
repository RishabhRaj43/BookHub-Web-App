import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    setLogin(true);
    reset();
    document.getElementById("my_modal_3").close();
  };

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={handleClick}
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">
                {login ? "Login" : "Sign Up"}
              </h3>
              {login ? (
                ""
              ) : (
                <div className="mt-4 space-y-2">
                  <span>Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("name", { required: true })}
                  />
                  <br />
                  {errors.name && (
                    <span className="text-sm text-error">
                      This field is required
                    </span>
                  )}
                </div>
              )}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-error">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-5 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-error">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between mt-4">
                <button className="btn btn-accent mt-3 px-6">
                  {login ? "Login" : "Sign Up"}
                </button>

                <p className="mt-7">
                  {login ? "Not Registered? " : "Already Registered? "}
                  <span
                    className="text-accent underline cursor-pointer"
                    onClick={() => {
                      if (login) {
                        setLogin(false);
                      } else {
                        setLogin(true);
                      }
                      reset();
                    }}
                  >
                    {!login ? "Login" : "Sign Up"}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
