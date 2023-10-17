import Header from "../Header";
import { render } from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../utils/Store"
import{ StaticRouter } from "react-router-dom/server"

test("Logog should load on rendering headder", ()=>{
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // console.log(header);

  // check if logo is loaded
  const logo = header.getAllByTestId("logo");
  // console.log(logo[0]);

  expect(logo[0].src).toBe("http://localhost/dummy.png");

});


test("online status should load on rendering header", ()=>{
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // console.log(header);

  // check if logo is loaded
  const  onlineStatus = header.getByTestId("online-status");

  expect(onlineStatus.innerHTML).toBe("🟢")

});

test("cart should have 0 items on rendering header", ()=>{
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // console.log(header);

  // check if logo is loaded
  const  cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart- 0");

})