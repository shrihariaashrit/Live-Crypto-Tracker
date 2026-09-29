import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchuser = createAsyncThunk(
    'coin/fetch',
    async (args, thunkAPI) => {
        try {
            // Bas API URL change kar di hai (CoinCap Keyless Endpoint)
            const response = await fetch(`https://api.coincap.io/v2/assets?limit=${args}`);
            const data = await response.json();
            return data.data; // CoinCap ka main array data.data ke andar hota hai
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const slicer1 = createSlice({
    name: "slice1",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchuser.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchuser.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchuser.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
});

export default slicer1.reducer;

export { fetchuser };
