import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";

test("Shimer result on homePage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimer");

  expect(shimmer.children.length).toBe(20);
  //   console.log(shimmer);
});

test("Resturants should load on homePage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(15);
});

test("search for string food should load on homePage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "pizza",
    },
  });
  
   const SearchBtn = body.getByTestId("search-btn") 
  fireEvent.click(SearchBtn);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(2);
});
