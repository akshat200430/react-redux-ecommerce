import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncIncreaseQty,
  asyncDecreaseQty,
} from "../store/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart?.data || []);
  const products = useSelector((state) => state.product?.data || []);
  const userId = useSelector((state) => state.user?.data?.id);

  const mergedCart = cartItems
    .map((item) => {
     const product = products.find((p) => p.id === item.idp);

      if (!product) return null;
      return { ...product, quantity: item.quantity };
    })
    .filter(Boolean);

  const subtotal = mergedCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen text-white px-4 sm:px-6 lg:px-20 py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
        My Cart
      </h1>

      {mergedCart.length === 0 && (
        <p className="text-white/60">Your cart is empty</p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {mergedCart.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/products/${item.id}`)}
              className="flex flex-row gap-4 bg-white/5 p-4 rounded-2xl items-center cursor-pointer"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-white/10 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-2">
                <h2 className="text-sm sm:text-lg font-semibold line-clamp-1">
                  {item.title}
                </h2>

                <p className="text-xs sm:text-sm text-white/60 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-green-400 font-bold text-sm sm:text-lg">
                    ₹{item.price * item.quantity}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(asyncDecreaseQty(userId, item.id));
                      }}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20"
                    >
                      −
                    </button>

                    <span className="text-sm">{item.quantity}</span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(asyncIncreaseQty(userId, item.id));
                      }}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {mergedCart.length > 0 && (
          <div className="bg-white/5 p-6 rounded-2xl h-fit">
            <h2 className="text-xl font-semibold mb-4">
              Price Details
            </h2>

            <div className="space-y-3 text-sm text-white/70">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <hr className="border-white/10" />

              <div className="flex justify-between text-white font-semibold text-lg">
                <span>Total</span>
                <span>₹{subtotal}</span>
              </div>
            </div>

            <button className="w-full mt-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
