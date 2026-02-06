import axios from "../../api/axios";
import { loadcart } from "../reducers/cartSlice";
import { toast } from "react-toastify";


export const asyncloadcart = (userId) => async (dispatch) => {
  try {
    if (!userId) return;

    const res = await axios.get(`/carts/${userId}`);
    dispatch(loadcart(res.data.cart || []));
  } catch (error) {
    console.log(error);
  }
};




export const asyncaddtocart = (userId, productId) => async (dispatch) => {
  try {
    if (!userId) {
      toast.warning("Please login first");
      return;
    }

    const pid = productId; 

    let cartRes;

   
    try {
      cartRes = await axios.get(`/carts/${userId}`);
    } catch {
     
      cartRes = await axios.post("/carts", {
        id: userId,
        cart: [],
      });
    }

    const cart = cartRes.data.cart || [];

    const existingItem = cart.find((item) => item.idp === pid);

    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.idp === pid
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { idp: pid, quantity: 1 }];
    }

    const updateRes = await axios.put(`/carts/${userId}`, {
      id: userId,
      cart: updatedCart,
    });

    dispatch(loadcart(updateRes.data.cart));
    toast.success("Added to cart 🛒");

  } catch (error) {
    console.error("ADD TO CART ERROR:", error);
    toast.error("Failed to add to cart");
  }
};





export const asyncIncreaseQty = (userId, productId) => async (dispatch) => {
  try {
    const res = await axios.get(`/carts/${userId}`);
    const cart = res.data.cart;

    const updatedCart = cart.map((item) =>
      item.idp === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    const updateRes = await axios.put(`/carts/${userId}`, {
      id: userId,
      cart: updatedCart,
    });

    dispatch(loadcart(updateRes.data.cart));
  } catch (error) {
    console.log(error);
    toast.error("Failed to update quantity");
  }
};


export const asyncDecreaseQty = (userId, productId) => async (dispatch) => {
  try {
    const res = await axios.get(`/carts/${userId}`);
    const cart = res.data.cart;

    const updatedCart = cart
      .map((item) =>
        item.idp === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    const updateRes = await axios.put(`/carts/${userId}`, {
      id: userId,
      cart: updatedCart,
    });

    dispatch(loadcart(updateRes.data.cart));
  } catch (error) {
    console.log(error);
    toast.error("Failed to update quantity");
  }
};

export const asyncRemoveFromCart = (userId, productId) => async (dispatch) => {
  try {
    const res = await axios.get(`/carts/${userId}`);
    const cart = res.data.cart;

    const updatedCart = cart.filter((item) => item.idp !== productId);

    const updateRes = await axios.put(`/carts/${userId}`, {
      id: userId,
      cart: updatedCart,
    });

    dispatch(loadcart(updateRes.data.cart));
    toast.error("Item removed from cart");
  } catch (error) {
    console.log(error);
    toast.error("Failed to remove item");
  }
};
