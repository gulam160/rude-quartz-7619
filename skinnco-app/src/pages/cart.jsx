import { useState, useEffect } from "react";
import CartCard from "../heirarchy/cartCard";

const getData = () => {
    return fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush`)
    .then((res) => res.json());
}

const Cart = () => {
    const [data, setData] = useState([]);

    const obdata = async() => {
        try {
            const obtaineddata = await getData();
            setData(obtaineddata)
        } catch (error) {
            console.log(error, "404/data Not Found")
        }
    }

    useEffect(()=> {
        obdata();
    }, []);

    return <div id="make-up">{data.map(({id, name, price_sign, price, api_featured_image, category}) => {
        return <CartCard key={id}
                     Id={id}
                     Name={name}
                     Sign={price_sign}
                     Price={price}
                     Image={api_featured_image}
                     Category={category}
                 />
     })}</div>
}
export default Cart;