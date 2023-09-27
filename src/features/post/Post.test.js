import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Post from './Post.js; // Make sure to import your Post component

import configureStore from 'redux-mock-store';

// Create a mock store
const mockStore = configureStore([]);

// Initialize the mock store with an initial state (if needed)
const initialState = { /* your initial state here */ };
const store = mockStore(initialState);


describe('Post component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      post: {
        posts: [], // Mock your Redux store state here
        isLoading: false,
        hasError: false,
      },
    });
  });

  it('renders loading state when isLoading is true', () => {
    store = mockStore({
      post: {
        posts: [],
        isLoading: true, // Simulate loading state
        hasError: false,
      },
    });

    render(
      <Provider store={store}>
        <Post />
      </Provider>
    );

    const loadingText = screen.getByText('Loading');
    expect(loadingText).toBeInTheDocument();
  });

  it('renders error state when hasError is true', () => {
    store = mockStore({
      post: {
        posts: [],
        isLoading: false,
        hasError: true, // Simulate error state
      },
    });

    render(
      <Provider store={store}>
        <Post />
      </Provider>
    );

    const errorText = screen.getByText('No data available. Please try later!');
    expect(errorText).toBeInTheDocument();
  });

  it('renders post data when isLoading and hasError are both false', () => {
    const mockPosts = [
      {
        id: 1,
        title: 'Sample Post 1',
        // Add other properties as needed
      },
      {
        id: 2,
        title: 'Sample Post 2',
        // Add other properties as needed
      },
    ];

    store = mockStore({
      post: {
        posts: mockPosts,
        isLoading: false,
        hasError: false,
      },
    });

    render(
      <Provider store={store}>
        <Post />
      </Provider>
    );

    // Assert that the post data is rendered as expected
    const post1Title = screen.getByText('Sample Post 1');
    const post2Title = screen.getByText('Sample Post 2');

    expect(post1Title).toBeInTheDocument();
    expect(post2Title).toBeInTheDocument();
  });
});
