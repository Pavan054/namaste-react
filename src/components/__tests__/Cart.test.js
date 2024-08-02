import { fireEvent, render, screen } from '@testing-library/react';
// import { act } from 'react-dom/test-utils'; // it is deprecated
// Since the above 'act' from 'react-dom/test-utils' is deprecated.
// We can use anyone of the following
// import { act } from '@testing-library/react';
import { act } from 'react';
import MOCK_DATA from '../mocks/mockResMenu.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import ResMenu from '../ResMenu';
import "@testing-library/jest-dom"
import Header from '../Header';
import Cart from '../Cart';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it('should load Restauarant Menu component', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Non Veg Pizza (12)");
  expect(accordionHeader).toBeInTheDocument();
});

it('should load the Menu items for a given category', async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <ResMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
  
    const accordionHeader = screen.getByText("Non Veg Pizza (12)");
    fireEvent.click(accordionHeader);
  
    expect(screen.getAllByTestId('foodItems').length).toBe(12);
});

it('should load Restauarant Menu component and should add the 1 item to the cart', async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <ResMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
  
    const accordionHeader = screen.getByText("Non Veg Pizza (12)");
    fireEvent.click(accordionHeader);
  
    expect(screen.getAllByTestId('foodItems').length);
  
    const addBtns = screen.getAllByRole("button", {name: "Add +" });
    fireEvent.click(addBtns[0]);
  
    expect(screen.getByText("(1)")).toBeInTheDocument();
  
    // Non veg pizza foodItems 12 + 1 foodItem in the Cart
    expect(screen.getAllByTestId('foodItems').length).toBe(13);
});

it('should display "Your cart is empty. Please add the items." message if cart is empty', async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <ResMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const clearCart = screen.getByTestId("clearCart");

    fireEvent.click(clearCart);

    expect(screen.getByText("Your cart is empty. Please add the items.")).toBeInTheDocument();
});

it('should display "Your cart is empty. Please add the items." message if we clear the cart', async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <ResMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
  
    const accordionHeader = screen.getByText("Pasta (8)");
    fireEvent.click(accordionHeader);

    const addBtns = screen.getAllByRole("button", {name: "Add +" });
    fireEvent.click(addBtns[0]);
  
    expect(screen.getByText("(1)")).toBeInTheDocument();
  
    // Pasta foodItems 8 + 1 foodItem in the Cart
    expect(screen.getAllByTestId('foodItems').length).toBe(9);

    const clearCart = screen.getByTestId("clearCart");

    fireEvent.click(clearCart);

    expect(screen.getByText("Your cart is empty. Please add the items.")).toBeInTheDocument();
});
