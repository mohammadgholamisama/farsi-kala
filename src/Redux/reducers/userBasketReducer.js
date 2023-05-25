import { createSlice } from "@reduxjs/toolkit";

const userBasketReducer = createSlice({
    name: 'user-basket',
    initialState: [
       
    ],
    reducers: {
        BasketProducts: (product) => {
            return product
        },
        addProduct: (basket, action) => {
            const existingProduct = basket.find(p => p.id === action.payload.id);
            if (existingProduct) {
                existingProduct.count += action.payload.count;
            } else {
                basket.push({
                    ...action.payload,
                    count: action.payload.count
                });
            }
        },
        removeProduct: (product, action) => {
            const index = product.findIndex(p => p.id === action.payload);
            if (index !== -1) {
                product.splice(index, 1);
            }
        },
    }
})

export const {
    BasketProducts,
    addProduct,
    removeProduct
} = userBasketReducer.actions

export default userBasketReducer.reducer