import { useEffect, useState } from "react"
import Carousel from "./carousel"
import Card from "../heirarchy/card";

const getData = () => {
    return fetch(`https://skinnco-server.onrender.com/api/home`)
    .then((res) => res.json());
}

const Home = () => {
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
    }, [])

    const homestyle = { width : "95%", margin : "1rem auto"}
    const offerstyle = {width : "100%", margin : "3rem 0"}

    return <><div className="home" style={homestyle}>
        <h2 style={{fontSize:"22px", fontWeight : "bold"}}>Best In Beauty</h2>
        <p style={{opacity:"0.8", fontWeight : "bold", marginBottom : "5px"}}>Today’s Top Offers</p>
        <Carousel />
        <img src="https://images-static.nykaa.com/uploads/399e4de4-2904-4e3d-8e09-243c25170577.gif?tr=w-2400,cm-pad_resize" alt="offer" style={offerstyle} />
        <img src="https://images-static.nykaa.com/uploads/64f55a2b-022f-4205-a0a9-f818499a4a2f.jpg?tr=w-2400,cm-pad_resize" alt="offer" style={{width : "100%"}} />
        <img src="https://images-static.nykaa.com/uploads/25b0b228-d583-44fa-92d2-ba1bffef0be9.png?tr=w-2400,cm-pad_resize" alt="offer" style={{width : "100%"}} />

        <div id="offer">{data.map(({id, name, image, description}) => {
           return <Card key={id}
                        Name={name}
                        Image={image}
                        Description={description}
                    />
        })}</div>

        <div id="game">
            <h2 style={{fontSize:"22px", fontWeight : "bold"}}>Game Zone</h2>
            <p style={{opacity:"0.8", fontWeight : "bold", marginBottom : "5px"}}>Play & Win</p>
            <img src="https://images-static.nykaa.com/uploads/c6048ef0-a501-451d-a4a5-e29f339e31a7.png?tr=w-2400,cm-pad_resize" alt="game-zone" style={{width : "100%", marginBottom : "3rem"}} />
        </div>
    </div>

    <div id="footer">
        <img src="https://i.ibb.co/LnbKSWR/footer1.png" alt="footer-1" style={{width : "100%"}} />
        <img src="https://i.ibb.co/5BGz830/footer-2.png" alt="footer-2" style={{width : "100%"}} />
    </div>
    </>
}
export default Home;