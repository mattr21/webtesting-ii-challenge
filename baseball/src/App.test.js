import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App.js';
import Dashboard from './components/Dashboard.js';

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

describe("onClick", () => {
  it("click fires an event", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Dashboard strike={onClick} />);
    fireEvent.click(getByText(/strike/i))
    expect(onClick).toHaveBeenCalled();
  })
});

describe("Methods", () => {
  describe("Strike", () => {
    it("increments strikes by 1", () => {
      const { getByText } = render(<App />);
      const button = getByText(/strike/i);

      fireEvent.click(button);
      getByText(/strikes: 1/i);
    })
  });
  describe("Balls", () => {
    it("increments balls by 1", () => {
      const { getByText } = render(<App />);
      const button = getByText(/ball/i);

      fireEvent.click(button);
      getByText(/balls: 1/i);
    })
  });
  describe("Fouls", () => {
    it("increments strikes by 1", () => {
      const { getByText } = render(<App />);
      const button = getByText(/foul/i);

      fireEvent.click(button);
      getByText(/strikes: 1/i);
    })
  });
  describe("Hits", () => {
    it("resets strikes and balls to 0", () => {
      const { getByText } = render(<App />);
      const button = getByText(/hit/i);

      fireEvent.click(button);
      getByText(/strikes: 0/i);
      getByText(/balls: 0/i);
    })
  });
});

describe("top counts", () => {
  describe("strikeout", () => {
    it("3 strikes resets strikes and balls to 0", () => {
      const { getByText } = render(<App />);
      const button = getByText(/strike/i);

      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      getByText(/strikes: 0/i);
      getByText(/balls: 0/i);
    })
  });
  describe("walk", () => {
    it("4 balls resets strikes and balls to 0", () => {
      const { getByText } = render(<App />); 
      const button = getByText(/ball/i);

      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);

      getByText(/strikes: 0/i);
      getByText(/balls: 0/i);
    })
  });
  describe("foul w/ 2 strikes", () => {
    it("strikes stays at 2", () => {
      const { getByText } = render(<App />);
      const strike = getByText(/strike/i);
      const foul = getByText(/foul/i);
      
      fireEvent.click(strike);
      fireEvent.click(strike);
      fireEvent.click(foul);

      getByText(/strikes: 2/i);
    })
  });
});






