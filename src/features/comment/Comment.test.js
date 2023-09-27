import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Comment from './Comment.js'; 

const mockStore = configureMockStore();

describe('Comment component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      // Mock your Redux store state here
    });
  });

  it('renders comments correctly', () => {
    const mockComments = [
      {
        id: 1,
        author: 'User1',
        body: 'Comment 1',
      },
      {
        id: 2,
        author: 'User2',
        body: 'Comment 2',
      },
    ];

    store = mockStore({
      // Mock your Redux store state here, including comments
    });

    render(
      <Provider store={store}>
        <Comment permalink="/sample-permalink" />
      </Provider>
    );

    // Assert that the comments are rendered as expected
    const comment1Author = screen.getByText('u/User1');
    const comment2Author = screen.getByText('u/User2');

    expect(comment1Author).toBeInTheDocument();
    expect(comment2Author).toBeInTheDocument();
  });

  // Add more test cases as needed
});
