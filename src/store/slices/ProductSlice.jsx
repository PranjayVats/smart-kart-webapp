import {  createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {
      id: 0,
      name: "",
      category: "",
      url: [],
      oldPrice: 0,
      price: 0,
      stock: 0,
    },
    filterProducts: [],
  },
  reducers: {
    addProduct(state, action) {
      const newProduct = action.payload;
      const productIndex = state.products.findIndex(
        (item) => item.id === newProduct.id
      );
      if (productIndex >= 0) {
        toast.info("Product already exist.", {
          position: "top-center",
          autoClose: 1500,
          draggable: false,
          className: "submit-feedback success",
          toastId: "notifyToast",
          theme: "colored",
        });
      } else {
        state.products.push(newProduct);
        toast.success("Products updated successfully.", {
          position: "top-center",
          autoClose: 1500,
          draggable: false,
          className: "submit-feedback success",
          toastId: "notifyToast",
          theme: "colored",
        });
      }
      state.filterProducts = state.products;
    },
    getProduct(state, action) {
      state.product = state.products.find((i) => i.id == action.payload);
    },
    deleteProduct(state, action) {},
    updateProduct(state, action) {},
    filterProduct(state, action) {
      const filterVal = action.payload;
      let newData = state.products;
      if (
        filterVal.filterCategory ||
        filterVal.filterRating ||
        filterVal.filterPrice
      ) {
        if (filterVal.filterCategory) {
          newData = newData.filter(
            (p) => p.category === filterVal.filterCategory.value
          );
        }
        if (filterVal.filterRating) {
          newData = newData.filter((p) => p.ratings >= filterVal.filterRating);
        }
        if (filterVal.filterPrice && filterVal.filterPrice[1] > 0) {
          newData = newData.filter(
            (p) =>
              p.price >= filterVal.filterPrice[0] &&
              p.price <= filterVal.filterPrice[1]
          );
        }
      }
      state.filterProducts = newData;
    },
  },
});
export default productSlice;
export const { addProduct, getProduct, filterProduct } = productSlice.actions;
