// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import ProductCard from "./../components/ProductCard";
// import { asyncproductrender } from "../store/actions/productActions";

// const Products = () => {
//   const products = useSelector((state) => state.product.data);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!products || products.length === 0) {
//       dispatch(asyncproductrender());
//     }
//   }, [dispatch, products]);

//   return (
//     <>
//       {products && products.length > 0 ? (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       ) : (
//         <h1 className="text-center mt-10 text-xl">No product</h1>
//       )}
//     </>
//   );
// };

// export default Products;


import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./../components/ProductCard";
import { asyncproductrender } from "../store/actions/productActions";

const Products = () => {
  const products = useSelector((state) => state.product.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(asyncproductrender());
    }
  }, [dispatch, products]);

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      {products && products.length > 0 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* PAGE TITLE */}
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Products
          </h1>

          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h1 className="text-xl font-semibold text-slate-700">
            No products available
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Please check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
