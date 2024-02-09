import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./pages/Browse.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import SingleMoviePage from "./pages/SingleMoviePage.jsx";
import SearchMovie from "./pages/SearchMovie.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/movie/:movieId",
        element: <SingleMoviePage />,
      },
      {
        path: "/search/:searchText",
        element: <SearchMovie />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
