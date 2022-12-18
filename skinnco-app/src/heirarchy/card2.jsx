const Card2 = ({Id, Name, Sign, Price, Image, category}) => {

    const showAlert = () => {
        alert ("Product Added to Cart");
    }

    return <div>
                <img src={Image} alt={Id} />
                <h2>{Name}</h2>
                <p>Price : {Sign}{Price}</p>
                <p>{category}</p>
                <button onClick={showAlert}>Add to Cart</button>
        </div>
}
export default Card2;