import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], cartAmount: 0 },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const itemIndex = state.cartItems.findIndex((i) => i.id === item.id);
      if (itemIndex >= 0) {
        toast.info("Item already exist in cart.", {
          position: "top-center",
          autoClose: 1500,
          draggable: false,
          className: "submit-feedback success",
          toastId: "notifyToast",
          theme: "colored",
        });
      } else {
        let tempProductItem = { ...item, cartQuantity: 1 };

        // basically we are creating a temp item, which have all properties of "Item"object with a new property of CartQuantity
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "top-center",
          autoClose: 1500,
          draggable: false,
          className: "submit-feedback success",
          toastId: "notifyToast",
          theme: "colored",
        });
      }
    },
    updateCart(state, action) {
      const item = action.payload;
      if (item.operation == "decrement") {
        const itemIndex = state.cartItems.findIndex((i) => i.id === item.id);
        if (state.cartItems[itemIndex].cartQuantity >= 2) {
          state.cartItems[itemIndex].cartQuantity -= 1;
        } else {
          toast.info("Minimum item count should be atleast 1", {
            position: "top-center",
            autoClose: 1500,
            draggable: false,
            className: "submit-feedback success",
            toastId: "notifyToast",
            theme: "colored",
          });
        }
      } else if (item.operation == "increment") {
        const itemIndex = state.cartItems.findIndex((i) => i.id === item.id);
        if (
          state.cartItems[itemIndex].cartQuantity <
          state.cartItems[itemIndex].stock
        ) {
          state.cartItems[itemIndex].cartQuantity += 1;
        } else {
          toast.info("Maximum item count can not exceed stock limit.", {
            position: "top-center",
            autoClose: 1500,
            draggable: false,
            className: "submit-feedback success",
            toastId: "notifyToast",
            theme: "colored",
          });
        }
      }
    },
    removeFromCart(state, action) {
      //   const itemIndex = state.indexOf(action.payload);
      state.cartItems.splice(action.payload, 1);
      toast.success("Product removed from cart successfully.", {
        position: "top-center",
        autoClose: 1500,
        draggable: false,
        className: "submit-feedback success",
        toastId: "notifyToast",
        theme: "colored",
      });
    },
    getTotalAmount(state, action) {
      let { total } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        {
          total: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartAmount = total;
    },
    saveShippingInfo(state, action) {},
    clearAll(state, action) {
      return [];
    },
  },
  //   extraReducers(builder) {
  //     builder.addCase(cartSlice.actions.clearAll, () => {
  //       return [];
  //     });
  //   },
});
// console.log(cartSlice.actions);

// We also have concept of extraReducers.
// The use of extraReducers is to use a reducer of a slice, with the help of reference of that reducer.

export default cartSlice;
export const { addToCart, updateCart, removeFromCart, getTotalAmount } =
  cartSlice.actions;
