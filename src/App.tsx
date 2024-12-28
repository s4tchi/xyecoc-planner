import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultPage from "./pages/default-page";
import TokenPage from "./pages/token-page/inde";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
    children: [
      {
        path: "token/:token",
        element: <TokenPage />
      }
    ],
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
