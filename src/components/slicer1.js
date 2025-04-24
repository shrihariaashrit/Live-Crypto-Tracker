import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 🔁 Async Thunk to fetch cryptocurrency data from CoinGecko API
const fetchuser = createAsyncThunk(
    'coin/fetch', // Action type name
    async (args, thunkAPI) => {
        try {
            // Fetching data from CoinGecko API based on number of coins to fetch (args)
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data = await response.json();
            return data; // Returns the fetched data to fulfilled case
        } catch (error) {
            // If error occurs, reject the promise with error message
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// 🧩 Creating a slice to manage fetched coin data and its states (loading, error)
const slicer1 = createSlice({
    name: "slice1", // Slice name
    initialState: {
        data: [],     // Stores fetched data
        loading: false, // Indicates loading state
        error: null    // Stores error messages
    },
    reducers: {}, // No synchronous reducers defined

    // Handling async thunk lifecycle actions (pending, fulfilled, rejected)
    extraReducers: (builder) => {
        builder
            // When API call is started
            .addCase(fetchuser.pending, (state) => {
                state.loading = true;  // Set loading to true
                state.error = false;   // Clear previous errors
            })

            // When API call is successful
            .addCase(fetchuser.fulfilled, (state, action) => {
                state.data = action.payload; // Store the fetched data
                state.loading = false;       // Set loading to false
            })

            // When API call fails
            .addCase(fetchuser.rejected, (state, action) => {
                state.error = action.payload; // Store error message
                state.loading = false;        // Set loading to false
            })
    }
});

// 🔁 Exporting reducer for use in store
export default slicer1.reducer;

// 🔁 Exporting thunk to be dispatched from components
export { fetchuser }; 
