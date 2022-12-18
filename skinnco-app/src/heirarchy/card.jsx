const Card = ({Id, Name, Image, Description}) => {
    return <div key={Id}>
                <img src={Image} alt={Id} />
                <h2>{Name}</h2>
                <p>{Description}</p>
        </div>
}
export default Card;