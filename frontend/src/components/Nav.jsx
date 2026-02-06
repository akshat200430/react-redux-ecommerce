


// // import { NavLink, useNavigate } from "react-router-dom";
// // import { useSelector, useDispatch } from "react-redux";
// // import { asynclogoutfunction } from "../store/actions/userActions";
// // import { useState } from "react";
// // import { toast } from "react-toastify";

// // const Nav = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const user = useSelector((state) => state.user.data);

// //   const isLoggedIn = !!user?.email;
// //   const isAdmin = !!user?.isAdmin;

// //   const [open, setOpen] = useState(false);

// //   const logouthandler = () => {
// //     dispatch(asynclogoutfunction());
// //     toast.success("Logged out successfully");
// //     navigate("/login");
// //     setOpen(false);
// //   };

// //   const linkClass = ({ isActive }) =>
// //     isActive ? "text-red-400" : "hover:text-red-300";

// //   return (
// //     <nav className="border-b border-white/20 backdrop-blur-md">
// //       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        
     
// //         <h1
// //           onClick={() => navigate("/")}
// //           className="text-xl font-bold cursor-pointer"
// //         >
// //           Demo-CRUD-Shop
// //         </h1>

// //         <div className="hidden md:flex items-center gap-6 text-lg">
// //           <NavLink className={linkClass} to="/">Home</NavLink>
// //           <NavLink className={linkClass} to="/products">Products</NavLink>

// //           {isLoggedIn ? (
// //             <>
   
// //               {isAdmin && (
// //                 <NavLink
// //                   className={linkClass}
// //                   to="/admin/create-product"
// //                 >
// //                   Create Product
// //                 </NavLink>
// //               )}

// //               {isLoggedIn && !isAdmin && (
// //                 <NavLink to="/cart">
// //                   <img
// //                     className="w-6 h-6"
// //                     src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
// //                     alt="cart"
// //                   />
// //                 </NavLink>
// //               )}

// //               <button
// //                 onClick={logouthandler}
// //                 className="hover:text-red-400 transition"
// //               >
// //                 Logout
// //               </button>
// //             </>
// //           ) : (
// //             <>
// //               <NavLink className={linkClass} to="/login">Login</NavLink>
// //               <NavLink className={linkClass} to="/register">Register</NavLink>
// //             </>
// //           )}
// //         </div>

   
// //         {isLoggedIn && !isAdmin && (
// //           <NavLink className="md:hidden" to="/cart">
// //             <img
// //               className="w-6 h-6"
// //               src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
// //               alt="cart"
// //             />
// //           </NavLink>
// //         )}

 
// //         <button
// //           onClick={() => setOpen(!open)}
// //           className="md:hidden text-2xl focus:outline-none"
// //         >
// //           ☰
// //         </button>
// //       </div>


// //       {open && (
// //         <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-lg text-white">
// //           <NavLink onClick={() => setOpen(false)} className={linkClass} to="/">
// //             Home
// //           </NavLink>

// //           <NavLink onClick={() => setOpen(false)} className={linkClass} to="/products">
// //             Products
// //           </NavLink>

// //           {isLoggedIn ? (
// //             <>
// //               {isAdmin && (
// //                 <NavLink
// //                   onClick={() => setOpen(false)}
// //                   className={linkClass}
// //                   to="/admin/create-product"
// //                 >
// //                   Create Product
// //                 </NavLink>
// //               )}

// //               <button
// //                 onClick={logouthandler}
// //                 className="text-left hover:text-red-400"
// //               >
// //                 Logout
// //               </button>
// //             </>
// //           ) : (
// //             <>
// //               <NavLink onClick={() => setOpen(false)} className={linkClass} to="/login">
// //                 Login
// //               </NavLink>
// //               <NavLink onClick={() => setOpen(false)} className={linkClass} to="/register">
// //                 Register
// //               </NavLink>
// //             </>
// //           )}
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Nav;






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
//     isActive ? "text-red-400" : "hover:text-red-300";

//   return (
//     <nav className="border-b border-white/20 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        
     
//         <h1
//           onClick={() => navigate("/")}
//           className="text-xl font-bold cursor-pointer"
//         >
//           Demo-CRUD-Shop
//         </h1>

//         <div className="hidden md:flex items-center gap-6 text-lg">
//           <NavLink className={linkClass} to="/">Home</NavLink>
//           <NavLink className={linkClass} to="/products">Products</NavLink>

//           {isLoggedIn ? (
//             <>
   
//               {isAdmin && (
//                 <NavLink
//                   className={linkClass}
//                   to="/admin/create-product"
//                 >
//                   Create Product
//                 </NavLink>
//               )}

//               {isLoggedIn && !isAdmin && (
//                 <NavLink to="/cart">
//                   <img
//                     className="w-6 h-6"
//                     src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
//                     alt="cart"
//                   />
//                 </NavLink>
//               )}

//               <button
//                 onClick={logouthandler}
//                 className="hover:text-red-400 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <NavLink className={linkClass} to="/login">Login</NavLink>
//               <NavLink className={linkClass} to="/register">Register</NavLink>
//             </>
//           )}
//         </div>

   
//         {isLoggedIn && !isAdmin && (
//           <NavLink className="md:hidden" to="/cart">
//             <img
//               className="w-6 h-6"
//               src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
//               alt="cart"
//             />
//           </NavLink>
//         )}

 
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-2xl focus:outline-none"
//         >
//           ☰
//         </button>
//       </div>


//       {open && (
//         <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-lg text-white">
//           <NavLink onClick={() => setOpen(false)} className={linkClass} to="/">
//             Home
//           </NavLink>

//           <NavLink onClick={() => setOpen(false)} className={linkClass} to="/products">
//             Products
//           </NavLink>

//           {isLoggedIn ? (
//             <>
//               {isAdmin && (
//                 <NavLink
//                   onClick={() => setOpen(false)}
//                   className={linkClass}
//                   to="/admin/create-product"
//                 >
//                   Create Product
//                 </NavLink>
//               )}

//               <button
//                 onClick={logouthandler}
//                 className="text-left hover:text-red-400"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <NavLink onClick={() => setOpen(false)} className={linkClass} to="/login">
//                 Login
//               </NavLink>
//               <NavLink onClick={() => setOpen(false)} className={linkClass} to="/register">
//                 Register
//               </NavLink>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
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
    `transition font-medium ${
      isActive ? "text-yellow-400" : "text-white/80 hover:text-white"
    }`;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">

          <h1
            onClick={() => navigate("/")}
            className="text-xl sm:text-2xl font-bold cursor-pointer tracking-wide"
          >
            <span className="text-yellow-400">Demo</span>-CRUD-Shop <small className="font-light">By Akshat Deshmukh</small>
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm lg:text-base">
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
                    className="p-2 rounded-full hover:bg-white/10 transition"
                  >
                    <img
                      className="w-6 h-6"
                      src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
                      alt="cart"
                    />
                  </NavLink>
                )}

                <button
                  onClick={logouthandler}
                  className="px-4 py-1 rounded-lg border border-white/20 hover:bg-red-500 hover:text-black transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink className={linkClass} to="/login">Login</NavLink>
                <NavLink
                  to="/register"
                  className="px-4 py-1 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>

          {isLoggedIn && !isAdmin && (
            <NavLink to="/cart" className="md:hidden mr-2 ">
              <img
                className="w-6 h-6"
                src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
                alt="cart"
              />
            </NavLink>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-5 text-white">
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
                  className="w-full text-left px-4 py-2 rounded-lg border border-white/20 hover:bg-red-500 hover:text-black transition"
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
                  className="block text-center px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        )}
      </nav>


      <div className="h-[72px]" />
    </>
  );
};

export default Nav;

