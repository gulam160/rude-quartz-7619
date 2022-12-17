import {useState, useEffect} from "react";

const Carousel = () => {
    const [count, setCount] = useState(0);
    let imgLink = [
        "https://images-static.nykaa.com/uploads/87507735-6311-4b36-b532-66cffb077419.jpg?tr=w-2400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/4809c45f-2364-447c-a480-0f08668a138e.jpg?tr=w-2400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/eec42b96-b126-4d61-82d4-be170cb5b685.jpg?tr=w-2400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/b0c08274-f8ff-4f65-888b-b8f324f99af7.jpg?tr=w-2400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/d19617d6-07d8-4314-9362-b48500dab16c.jpg?tr=w-2400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/5c185ebe-4bd6-4009-9e04-86540eef8ae7.jpg?tr=w-2400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/a67bc400-1af8-471c-83ef-7196fb64d229.jpg?tr=w-2400,cm-pad_resize"
    ];

    useEffect(() => {
        setTimeout(() => {
        setCount(count + 1);
        }, 3000);
        if (count === 7) {
        setCount(0);
        }
    }, [count]);

    const styles = {width : "100%", margin : "15px 0 20px 0"}

    return (
        <div className="carousel">
            <img src={imgLink[count]} alt={count} style={styles} />
        </div>
    );
}
export default Carousel