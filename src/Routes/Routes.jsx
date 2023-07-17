import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    //   errorElement: <ErrorPage />,
    //   children: [
    //     {
    //       path: "contacts/:contactId",
    //       element: <Contact />,
    //     },
    //   ],
    },
  ]);
