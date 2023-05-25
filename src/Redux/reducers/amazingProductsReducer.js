import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'FETCH-AMAZING-PRODUCTS',
    async () => {
        const response = await fetch('https://shop-app.iran.liara.run/api/amazing-products')
        const data = await response.json()
        return data
    }
)

const initialState = {
    amazingProducts: [],
    loading: false,
    error: null
}

const getAmazingProducts = createSlice({
    name: 'amazingProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.amazingProducts = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default getAmazingProducts.reducer