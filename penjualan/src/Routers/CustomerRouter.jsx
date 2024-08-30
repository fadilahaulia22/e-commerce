import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import Products from "../customer/components/Products/Products";
import Navigation from "../customer/components/Navigation/Navigation";
import ProductDetail from "../customer/components/ProductDetail/ProductDetail";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomerRouter = () => {
  return (
    <div>
      <div>
        {" "}
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Products />}
        ></Route>
         <Route
          path="/product/:productId"
          element={<ProductDetail />}
        ></Route>
      <Route
          path="/checkout"
          element={<Checkout/>}
        ></Route>
        <Route
          path="/account/order"
          element={<Order/>}
        ></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails/>}
        ></Route>
      </Routes>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};
export default CustomerRouter;
