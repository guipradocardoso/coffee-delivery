import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CheckoutOrder } from "./pages/CheckoutOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
   return (
      <Routes>
         <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/checkoutOrder" element={<CheckoutOrder/>} />
         </Route>
      </Routes>
   )
}