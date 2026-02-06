




// import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { asynclogoutfunction } from "../store/actions/userActions";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const Nav = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const user = useSelector((state) => state.user.data);
//   const isLoggedIn = !!user?.email;
//   const isAdmin = !!user?.isAdmin;

//   const [open, setOpen] = useState(false);

//   const logouthandler = () => {
//     dispatch(asynclogoutfunction());
//     toast.success("Logged out successfully");
//     navigate("/login");
//     setOpen(false);
//   };

//   const linkClass = ({ isActive }) =>
//     `transition font-medium ${
//       isActive ? "text-yellow-400" : "text-white/80 hover:text-white"
//     }`;

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">

//           <h1
//             onClick={() => navigate("/")}
//             className="text-xl sm:text-2xl font-bold cursor-pointer tracking-wide"
//           >
//             <span className="text-yellow-400">Demo</span>-CRUD-Shop <small className="font-light">By Akshat Deshmukh</small>
//           </h1>

//           <div className="hidden md:flex items-center gap-8 text-sm lg:text-base">
//             <NavLink className={linkClass} to="/">Home</NavLink>
//             <NavLink className={linkClass} to="/products">Products</NavLink>

//             {isLoggedIn ? (
//               <>
//                 {isAdmin && (
//                   <NavLink className={linkClass} to="/admin/create-product">
//                     Create Product
//                   </NavLink>
//                 )}

//                 {!isAdmin && (
//                   <NavLink
//                     to="/cart"
//                     className="p-2 rounded-full hover:bg-white/10 transition"
//                   >
//                     <img
//                       className="w-6 h-6"
//                       src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
//                       alt="cart"
//                     />
//                   </NavLink>
//                 )}

//                 <button
//                   onClick={logouthandler}
//                   className="px-4 py-1 rounded-lg border border-white/20 hover:bg-red-500 hover:text-black transition"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink className={linkClass} to="/login">Login</NavLink>
//                 <NavLink
//                   to="/register"
//                   className="px-4 py-1 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
//                 >
//                   Register
//                 </NavLink>
//               </>
//             )}
//           </div>

//           {isLoggedIn && !isAdmin && (
//             <NavLink to="/cart" className="md:hidden mr-2 ">
//               <img
//                 className="w-6 h-6"
//                 src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
//                 alt="cart"
//               />
//             </NavLink>
//           )}

//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-2xl"
//           >
//             ☰
//           </button>
//         </div>

//         {open && (
//           <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-5 text-white">
//             <NavLink onClick={() => setOpen(false)} className={linkClass} to="/">
//               Home
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} className={linkClass} to="/products">
//               Products
//             </NavLink>

//             {isLoggedIn ? (
//               <>
//                 {isAdmin && (
//                   <NavLink
//                     onClick={() => setOpen(false)}
//                     className={linkClass}
//                     to="/admin/create-product"
//                   >
//                     Create Product
//                   </NavLink>
//                 )}

//                 <button
//                   onClick={logouthandler}
//                   className="w-full text-left px-4 py-2 rounded-lg border border-white/20 hover:bg-red-500 hover:text-black transition"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink onClick={() => setOpen(false)} className={linkClass} to="/login">
//                   Login
//                 </NavLink>

//                 <NavLink
//                   onClick={() => setOpen(false)}
//                   to="/register"
//                   className="block text-center px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold"
//                 >
//                   Register
//                 </NavLink>
//               </>
//             )}
//           </div>
//         )}
//       </nav>


//       <div className="h-[72px]" />
//     </>
//   );
// };

// export default Nav;




// import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { asynclogoutfunction } from "../store/actions/userActions";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const Nav = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const user = useSelector((state) => state.user.data);
//   const isLoggedIn = !!user?.email;
//   const isAdmin = !!user?.isAdmin;

//   const [open, setOpen] = useState(false);

//   const logouthandler = () => {
//     dispatch(asynclogoutfunction());
//     toast.success("Logged out successfully");
//     navigate("/login");
//     setOpen(false);
//   };

//   const linkClass = ({ isActive }) =>
//     `block text-base transition ${
//       isActive ? "text-yellow-400" : "text-white/80 hover:text-white"
//     }`;

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

//           <h1
//             onClick={() => navigate("/")}
//             className="text-lg sm:text-2xl font-bold cursor-pointer tracking-wide"
//           >
//             <span className="text-yellow-400">Demo</span>
//             <span className=" sm:inline text-white">-CRUD-Shop <small>By Akshat..</small></span>
//           </h1> 

//           <div className="hidden md:flex items-center gap-8 text-sm lg:text-base">
//             <NavLink className={linkClass} to="/">Home</NavLink>
//             <NavLink className={linkClass} to="/products">Products</NavLink>

//             {isLoggedIn ? (
//               <>
//                 {isAdmin && (
//                   <NavLink className={linkClass} to="/admin/create-product">
//                     Create Product
//                   </NavLink>
//                 )}

//                 {!isAdmin && (
//                   <NavLink
//                     to="/cart"
//                     className="p-2 rounded-full hover:bg-white/10"
//                   >
//                     <img
//                       className="w-6 h-6"
//                       src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
//                       alt="cart"
//                     />
//                   </NavLink>
//                 )}

//                 <button
//                   onClick={logouthandler}
//                   className="px-4 py-1 rounded-lg border border-white/20 hover:bg-red-500 hover:text-black"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink className={linkClass} to="/login">Login</NavLink>
//                 <NavLink
//                   to="/register"
//                   className="px-4 py-1 rounded-lg bg-yellow-400 text-black font-semibold"
//                 >
//                   Register
//                 </NavLink>
//               </>
//             )}
//           </div>

//           <div className="md:hidden flex items-center gap-3">
//             {isLoggedIn && !isAdmin && (
//               <NavLink to="/cart" className="p-2">
//                 <img
//                   className="w-6 h-6"
//                   src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
//                   alt="cart"
//                 />
//               </NavLink>
//             )}

//             <button
//               onClick={() => setOpen(!open)}
//               className="text-2xl px-2 py-1 rounded-lg active:bg-white/10 text-white"
//             >
//               ☰
//             </button>
//           </div>
//         </div>

//         {open && (
//           <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-6">
//             <NavLink onClick={() => setOpen(false)} className={linkClass} to="/">
//               Home
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} className={linkClass} to="/products">
//               Products
//             </NavLink>

//             {isLoggedIn ? (
//               <>
//                 {isAdmin && (
//                   <NavLink
//                     onClick={() => setOpen(false)}
//                     className={linkClass}
//                     to="/admin/create-product"
//                   >
//                     Create Product
//                   </NavLink>
//                 )}

//                 <button
//                   onClick={logouthandler}
//                   className="w-full text-left px-4 py-3 rounded-lg border border-white/20 hover:bg-red-500 hover:text-black"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink onClick={() => setOpen(false)} className={linkClass} to="/login">
//                   Login
//                 </NavLink>

//                 <NavLink
//                   onClick={() => setOpen(false)}
//                   to="/register"
//                   className="block text-center px-4 py-3 rounded-lg bg-yellow-400 text-black font-semibold"
//                 >
//                   Register
//                 </NavLink>
//               </>
//             )}
//           </div>
//         )}
//       </nav>

//       <div className="h-[64px]" />
//     </>
//   );
// };

// export default Nav;




import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asynclogoutfunction } from "../store/actions/userActions";
import { useState } from "react";
import { toast } from "react-toastify";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.data);
  const isLoggedIn = !!user?.email;
  const isAdmin = !!user?.isAdmin;

  const [open, setOpen] = useState(false);

  const logouthandler = () => {
    dispatch(asynclogoutfunction());
    toast.success("Logged out successfully");
    navigate("/login");
    setOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `block text-sm sm:text-base transition ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-50/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* LOGO */}
          <h1
            onClick={() => navigate("/")}
            className="text-lg sm:text-2xl font-bold cursor-pointer text-slate-800"
          >
            Demo<span className="text-blue-600">CRUD</span>
            <span className="hidden sm:inline text-slate-600">
              {" "}Shop
            </span>
          </h1>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink className={linkClass} to="/">Home</NavLink>
            <NavLink className={linkClass} to="/products">Products</NavLink>

            {isLoggedIn ? (
              <>
                {isAdmin && (
                  <NavLink className={linkClass} to="/admin/create-product">
                    Create Product
                  </NavLink>
                )}

                {!isAdmin && (
                  <NavLink
                    to="/cart"
                    className="p-2 rounded-full hover:bg-slate-200 transition"
                  >
                    🛒
                  </NavLink>
                )}

                <button
                  onClick={logouthandler}
                  className="px-4 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-red-50 hover:text-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink className={linkClass} to="/login">Login</NavLink>
                <NavLink
                  to="/register"
                  className="px-4 py-1.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-3">
            {isLoggedIn && !isAdmin && (
              <NavLink to="/cart" className="p-2 rounded-full hover:bg-slate-200">
                🛒
              </NavLink>
            )}

            <button
              onClick={() => setOpen(!open)}
              className="text-xl px-3 py-1 rounded-lg text-slate-700 hover:bg-slate-200 transition"
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-slate-50 border-t border-slate-200 px-6 py-6 space-y-5">
            <NavLink onClick={() => setOpen(false)} className={linkClass} to="/">
              Home
            </NavLink>

            <NavLink onClick={() => setOpen(false)} className={linkClass} to="/products">
              Products
            </NavLink>

            {isLoggedIn ? (
              <>
                {isAdmin && (
                  <NavLink
                    onClick={() => setOpen(false)}
                    className={linkClass}
                    to="/admin/create-product"
                  >
                    Create Product
                  </NavLink>
                )}

                <button
                  onClick={logouthandler}
                  className="w-full text-left px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-red-50 hover:text-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink onClick={() => setOpen(false)} className={linkClass} to="/login">
                  Login
                </NavLink>

                <NavLink
                  onClick={() => setOpen(false)}
                  to="/register"
                  className="block text-center px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        )}
      </nav>

      {/* SPACER */}
      <div className="h-[64px]" />
    </>
  );
};

export default Nav;

