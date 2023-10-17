import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Header from "../Header";
import {MENU_DATA} from "../../mocks/menuData";
import RestaurantMenu from "../ResturantMenu";
import { Provider } from "react-redux";
import store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MENU_DATA)
        }
    })
})


test(" update cart on add ittems to card", async () => {
  const body =  render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );


  await waitFor(()=>expect (body.getByTestId("resMenu")));

  const addBtn = body.getAllByTestId("Add-Btn");

  fireEvent.click(addBtn[0]);
  
  const cart = body.getByTestId("cart");
  
  expect(cart.innerHTML).toBe("Cart- 1");
   
  //   console.log(shimmer);
});