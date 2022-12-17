import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Makeup from "../pages/makeup";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="makeup" element={<Makeup />} />
        </Routes>
    )
}
export default AllRoutes;