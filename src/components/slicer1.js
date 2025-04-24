import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchuser = createAsyncThunk(
    'coin/fetch',
    async (args, thunkAPI) => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data = await response.json();
            return data;
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