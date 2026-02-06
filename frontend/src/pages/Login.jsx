import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { asyncloginfunction } from "./../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.data);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (user) {
      toast.success(`Welcome ${user.username} as ${user.isAdmin?"Admin":"User"} 👋,Keep exploring and give this project feedback thankyou`);
      navigate("/products");
    }
  }, [user, navigate]);

  const loginHandler = (data) => {
    dispatch(asyncloginfunction(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="
        flex flex-col gap-6 sm:gap-8
        mt-8
        w-full sm:w-3/4 md:w-1/2 lg:w-1/3
        mx-auto
        p-5 sm:p-6
        bg-white/10 backdrop-blur-lg
        border border-white/20
        shadow-lg rounded-xl
        text-white
      "
    >
      <input
        {...register("email")}
        type="email"
        placeholder="Email..."
        className="w-full p-2 sm:p-3 bg-gradient-to-r from-blue-800 to-yellow-600 rounded-2xl outline-none"
        required
      />

      <input
        {...register("password")}
        type="password"
        placeholder="Password..."
        className="w-full p-2 sm:p-3 bg-gradient-to-r from-blue-800 to-yellow-600 rounded-2xl outline-none"
        required
      />

      <button
        type="submit"
        className="
          w-full sm:w-1/2
          mx-auto
          rounded-xl
          p-2 sm:p-3
          bg-gradient-to-r from-blue-800 to-yellow-600
          font-bold
          active:scale-95
          transition
        "
      >
        Login
      </button>

      <p className="text-sm sm:text-base text-center">
        Don’t have an account?{" "}
        <Link className="text-blue-400" to="/register">
          Register!
        </Link>
      </p>
    </form>
  );
};

export default Login;
