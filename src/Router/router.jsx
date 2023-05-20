import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

//layouts
import RootLayout from "../layouts/RootLayout";

//pages
import Homepage from "../pages/Homepage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
    </Route>
  )
);

export { router }