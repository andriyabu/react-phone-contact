import { useState } from "react";

const Home = () => {
    const [like,setLike] = useState(1);

    const handleClick = () => {
        setLike(like + 1)    
    }
    return (
        <div className="home">
            <h3>Contact List</h3>
            <h5>Like : {like}</h5>
            <button onClick={handleClick}>klik</button>
        </div>
    );
}
 
export default Home;