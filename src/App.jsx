import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";

//routing setup
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

