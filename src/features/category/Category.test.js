import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store"; // Import your Redux store
import Category from "./Category.jsw"; // Adjust the import path as needed


import configureStore from 'redux-mock-store';

// Create a mock store
const mockStore = configureStore([]);

// Initialize the mock store with an initial state (if needed)
const initialState = { /* your initial state here */ };
const store = mockStore(initialState);


test("Category Component renders loading state initially", () => {
  // Render the Category component wrapped with the Redux Provider
  render(
    <Provider store={store}>
      <Category />
    </Provider>
  );

  // Ensure that loading state is displayed
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  // You can also check that other elements you expect during loading are present
  // For example, if you have a loading spinner, you can check for its presence.
});

test("Category Component handles error state", () => {
  // Mock an error state by providing a store with an error message
  const errorStore = {
    ...store,
    getState: () => ({
      // Assuming you have a slice for category with an error message field
      category: {
        error: "Failed to load subreddits",
      },
    }),
  };

  // Render the Category component with the error store
  render(
    <Provider store={errorStore}>
      <Category />
    </Provider>
  );

  // Ensure that the error message is displayed
  expect(screen.getByText("Failed to load subreddits")).toBeInTheDocument();
  // You can also check for absence of loading elements or other UI elements in error state.
});

// Add more test cases as needed for different component behaviors
