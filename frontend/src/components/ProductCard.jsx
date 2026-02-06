


// import React from "react";
// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   const { id, title, image, description, price } = product;

//   return (
//     <Link
//       to={`/products/${id}`}
//       className="
//       mt-10
//         group block
//         rounded-xl sm:rounded-2xl
//         border border-white/10
//         bg-white/5 backdrop-blur
//         p-3 sm:p-4
//         transition
//         hover:scale-[1.02]
//         hover:shadow-xl hover:shadow-black/20
//       "
//     >
//       <div className="w-full aspect-square overflow-hidden rounded-lg sm:rounded-xl bg-black/10">
//         <img
//           src={image}
//           alt={title}
//           className="
//             h-full w-full object-cover
//             transition-transform duration-300
//             group-hover:scale-110
//           "
//         />
//       </div>

//       <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
//         <h1 className="text-base sm:text-lg font-semibold line-clamp-1">
//           {title}
//         </h1>

//         <p className="text-xs sm:text-sm text-white/70 line-clamp-2">
//           {description}
//         </p>

//         <div className="flex items-center justify-between pt-2">
//           <h2 className="text-lg sm:text-xl font-bold text-green-400">
//             ₹{price}
//           </h2>

//           <span
//             className="
//               text-xs sm:text-sm
//               px-2 sm:px-3 py-0.5 sm:py-1
//               rounded-full
//               bg-green-500/10 text-green-400
//               group-hover:bg-green-500/20
//             "
//           >
//             View
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;



import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, image, description, price } = product;

  return (
    <Link
      to={`/products/${id}`}
      className="
        group block
        rounded-2xl
        bg-white
        border border-slate-200
        p-4
        transition
        hover:shadow-md
        hover:-translate-y-1
      "
    >
      {/* IMAGE */}
      <div className="w-full aspect-square overflow-hidden rounded-xl bg-slate-100">
        <img
          src={image}
          alt={title}
          className="
            h-full w-full object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <div className="mt-4 space-y-2">
        <h1 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-1">
          {title}
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <h2 className="text-lg sm:text-xl font-bold text-green-600">
            ₹{price}
          </h2>

          <span
            className="
              text-xs sm:text-sm
              px-3 py-1
              rounded-full
              bg-blue-50 text-blue-600
              group-hover:bg-blue-100
              transition
            "
          >
            View
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
