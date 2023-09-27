import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./app/store.js"; // Import your Redux store
import App from "./App"; // Import your App component
import configureStore from 'redux-mock-store';


// Create a mock store
const mockStore = configureStore([]);

// Initialize the mock store with an initial state (if needed)
const initialState = {  };
const store = mockStore(initialState);


test("renders App component", () => {
  // Render the App component wrapped with the Redux Provider
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // You can add specific assertions based on your UI
  // For example, checking if certain elements are present
  expect(screen.getByText("Reddit Clone")).toBeInTheDocument();
  expect(screen.getByText("Subreddits")).toBeInTheDocument();
  expect(screen.getByText("Main Container")).toBeInTheDocument();

  // Add more assertions as needed to verify the rendered UI.
});
