import Carousel from "./carousel"

const Home = () => {
    const homestyle = { width : "95%", margin : "1rem auto"}
    const offerstyle = {width : "100%", margin : "3rem 0"}
    return <div className="home" style={homestyle}>
        <h2 style={{fontSize:"22px", fontWeight : "bold"}}>Best In Beauty</h2>
        <p style={{opacity:"0.8", fontWeight : "bold", marginBottom : "5px"}}>Today’s Top Offers</p>
        <Carousel />
        <img src="https://images-static.nykaa.com/uploads/399e4de4-2904-4e3d-8e09-243c25170577.gif?tr=w-2400,cm-pad_resize" alt="offer" style={offerstyle} />
        <img src="https://images-static.nykaa.com/uploads/64f55a2b-022f-4205-a0a9-f818499a4a2f.jpg?tr=w-2400,cm-pad_resize" alt="offer" style={{width : "100%"}} />
        <img src="https://images-static.nykaa.com/uploads/25b0b228-d583-44fa-92d2-ba1bffef0be9.png?tr=w-2400,cm-pad_resize" alt="offer" style={{width : "100%"}} />
    </div>
}
export default Home;