




import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user.data);
  const isAdmin = !!user?.isAdmin;

  return (
    <div className="text-white">

      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-gray-950 via-indigo-900 to-yellow-500">
        
        <p className="text-sm sm:text-base text-white/80 mb-3">
          Built & Designed by <span className="font-semibold">Akshat Deshmukh</span>
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
          Full-Stack E-Commerce Platform
        </h1>

        <p className="mt-6 max-w-2xl text-white/80 text-sm sm:text-base">
          A real-world React application demonstrating authentication,
          role-based access (Admin / User), persistent cart, and clean
          architecture using Redux Toolkit and JSON Server.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/products"
            className="px-8 py-3 rounded-xl bg-black text-white font-semibold hover:bg-black/80 transition"
          >
            Explore Products
          </Link>

          {!user && (
            <Link
              to="/register"
              className="px-8 py-3 rounded-xl border border-black text-black font-semibold hover:bg-black hover:text-white transition"
            >
              Register Now
            </Link>
          )}

          {user && !isAdmin && (
            <Link
              to="/cart"
              className="px-8 py-3 rounded-xl border border-black text-black font-semibold hover:bg-black hover:text-white transition"
            >
              View Cart
            </Link>
          )}
        </div>

        {!user && (
          <p className="mt-6 text-sm text-black/80">
            Create an account to experience full functionality
          </p>
        )}
      </section>

      <section className="px-4 sm:px-6 lg:px-20 py-16 bg-black">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          What This Project Demonstrates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="font-semibold text-lg">Role-Based UI & Logic</h3>
            <p className="text-sm text-white/60 mt-2">
              Admin and user flows are separated using Redux state and
              conditional rendering.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="font-semibold text-lg">Persistent Cart System</h3>
            <p className="text-sm text-white/60 mt-2">
              Cart data is stored in the backend and restored on page refresh.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="font-semibold text-lg">Scalable Architecture</h3>
            <p className="text-sm text-white/60 mt-2">
              Clean component structure with async Redux actions and reusable UI.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-20 py-16 bg-gradient-to-r from-gray-900 to-black">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Tech Stack Used
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Redux Toolkit",
            "React Router",
            "Tailwind CSS",
            "JSON Server",
            "Axios",
            "React Hook Form",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-white/10 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <footer className="px-4 py-12 bg-black text-center border-t border-white/10">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Akshat Deshmukh — Full-Stack Developer
        </p>

        <p className="mt-2 text-xs text-white/40">
          This project is built for learning, showcasing real-world frontend patterns.
        </p>

        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a
            href="https://www.linkedin.com/in/akshat-deshmukh-9613b3301"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/akshat200430"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:underline"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
