import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Search from './Search.js'; 

const mockStore = configureMockStore();

describe('Search component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      // Mock your Redux store state here
    });
  });

  it('renders search input correctly', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    // Assert that the search input is rendered
    const searchInput = screen.getByPlaceholderText('Search Topics');
    expect(searchInput).toBeInTheDocument();
  });

  // Add more test cases for Search component as needed
});
