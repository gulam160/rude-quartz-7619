import { Link } from "react-router-dom";

const Navbar = () => {
    return <nav id="navbar">
        <div id="top">
            <div id="child-1">
                <img src="https://i.ibb.co/qpG34NF/Skinnco2-removebg-preview.png" alt="logo" />
                <p>Categories</p>
                <p>Brand</p>
                <p>Luxe</p>
                <p>Fashion</p>
                <p>Beauty Advice</p>
            </div>
            <div id="child-2">
                <input type="text" placeholder="Search on Skinnco"/>
                <span><Link to="/signin">Sign in</Link></span>
                <span><Link to="/cart">Cart</Link></span>
            </div>
        </div>
        <div id="bottom">
            <Link to="/Home">Home</Link>
            <Link to="/makeup">Make-Up</Link>
            <Link to="/skin">Skin</Link>
            <Link to="/hair">Hair</Link>
            <Link to="/appliances">Appliances</Link>
            <Link to="/bathbody">Bath & Body</Link>
            <Link to="/Natural">Natural</Link>
            <Link to="/mombaby">Mom & Baby</Link>
            <Link to="/health">Health & Wellness</Link>
            <Link to="/men">Men</Link>
            <Link to="/fragrance">Fragrance</Link>
        </div>
    </nav>
}
export default Navbar;