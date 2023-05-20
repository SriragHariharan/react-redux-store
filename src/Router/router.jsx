import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

//layouts
import RootLayout from "../layouts/RootLayout";

//pages
import ProductDetails from "../components/ProductDetails";
import ProductsList from "../components/ProductsList";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<ProductsList />} />
        <Route path='product/:id' element={<ProductDetails/>} />
    </Route>
  )
);

export { router }