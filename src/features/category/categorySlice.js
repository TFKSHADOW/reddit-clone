import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useState } from "react";



export const fetchCategory = createAsyncThunk('category/fetchCategory', async () => {
  const [hasReachedLimit, setHasReachedLimit] = useState(false);
  try {
    const response = await fetch("https://www.reddit.com/subreddits.json");
    if (response.status === 429) {
      // You've reached the daily request limit
      setHasReachedLimit(true);
      return [];
    }
    const json = await response.json();
    const data = json.data.children.map(category => category.data);
    return data;
  } catch (error) {
    // Handle other errors here
    console.error("Error fetching categories:", error);
    throw error;
  }
});


export const categorySlice = createSlice ({
  name: 'category',
  initialState: {
    categories: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchCategory.fulfilled, (state,action) => {
        state.isLoading = false;
        state.hasError = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.categories = 'Failed to load subreddits'
      })
  }
})

export const selectCategory = (state) => state.category.categories;
export const selectCategoryLoading = (state) => state.category.isLoading;

export default categorySlice.reducer