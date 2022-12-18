const CartCard = ({Id, Name, Sign, Price, Image, category}) => {

    const showAlert = () => {
        alert ("Item Removed");
    }

    return <div>
                <img src={Image} alt={Id} />
                <h2>{Name}</h2>
                <p>Price : {Sign}{Price}</p>
                <p>{category}</p>
                <button onClick={showAlert}>Remove</button>
        </div>
}
export default CartCard;