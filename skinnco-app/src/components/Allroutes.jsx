import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Makeup from "../pages/makeup";
import SignIn from "../pages/signin";
import Cart from "../pages/cart";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="makeup" element={<Makeup />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="cart" element={<Cart />} />
        </Routes>
    )
}
export default AllRoutes;