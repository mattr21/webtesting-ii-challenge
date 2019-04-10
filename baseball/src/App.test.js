import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App.js';

afterEach(cleanup);

describe("App", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders successfully', () => {
    render(<App />);
  });
})

describe("Methods", () => {
  describe("Strike", () => {
    it("increments strikes by 1", () => {
      const { getByText } = render(<App />);
      const button = getByText(/strike btn/i);

      fireEvent.click(button);
      // console.log(button);
      getByText(/strikes: 1/i);
    })
  })
})






