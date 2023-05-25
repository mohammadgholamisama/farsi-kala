import { configureStore } from "@reduxjs/toolkit";
import amazingProductsReducer from "./reducers/amazingProductsReducer";
import userBasketReducer from "./reducers/userBasketReducer";

const store = configureStore({
    reducer: {
        products: amazingProductsReducer,
        userBasket: userBasketReducer
    }
})

export default store