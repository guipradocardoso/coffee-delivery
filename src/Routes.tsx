import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CheckoutOrder } from "./pages/CheckoutOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { OrderConfirmed } from "./pages/OrderConfirmed";

export function Router() {
   return (
      <Routes>
         <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/checkoutOrder" element={<CheckoutOrder/>} />
            <Route path="/orderConfirmed" element={<OrderConfirmed/>}/>
         </Route>
      </Routes>
   )
}