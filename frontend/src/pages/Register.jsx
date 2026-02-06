import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncregisterfunction } from "./../store/actions/userActions";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: "user",
    },
  });

  const registerHandler = (data) => {
    data.id = nanoid();
    data.isAdmin = data.role === "admin";
    delete data.role;

    dispatch(asyncregisterfunction(data));
    reset();
    toast.success("User Registered Successfully 🎉");
    navigate("/login");
  };

  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="
        flex flex-col gap-6 sm:gap-8
        mt-6
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
        {...register("username", { required: true })}
        type="text"
        placeholder="Username..."
        className="w-full p-2 sm:p-3 bg-gradient-to-r from-blue-800 to-yellow-600 rounded-2xl outline-none"
      />

      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email..."
        className="w-full p-2 sm:p-3 bg-gradient-to-r from-blue-800 to-yellow-600 rounded-2xl outline-none"
      />

      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password..."
        className="w-full p-2 sm:p-3 bg-gradient-to-r from-blue-800 to-yellow-600 rounded-2xl outline-none"
      />

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
        <label className="flex-1 text-center px-4 py-2 rounded-xl border border-white/20 cursor-pointer has-[:checked]:bg-green-500 has-[:checked]:text-black transition">
          <input
            type="radio"
            value="user"
            {...register("role", { required: true })}
            className="hidden"
          />
          Register as User
        </label>

        <label className="flex-1 text-center px-4 py-2 rounded-xl border border-white/20 cursor-pointer has-[:checked]:bg-green-500 has-[:checked]:text-black transition">
          <input
            type="radio"
            value="admin"
            {...register("role", { required: true })}
            className="hidden"
          />
          Register as Admin
        </label>
      </div>

      {errors.role && (
        <p className="text-red-500 text-sm text-center">
          Please select a role
        </p>
      )}

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
        Register
      </button>

      <p className="text-sm sm:text-base text-center">
        Already have an account?{" "}
        <Link className="text-blue-400" to="/login">
          Login!
        </Link>
      </p>
    </form>
  );
};

export default Register;
