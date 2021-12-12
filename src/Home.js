const Home = () => {
    const handleClick = () => {
        console.log("Halloo");
    }

    const handleClick2 = (name) => {
        console.log(name)
    } 
    return (
        <div className="home">
            <h3>Contact List</h3>
            <button onClick={handleClick}>klik</button>
            <button onClick={() => handleClick2("Luffi")}>Klick Lagi</button>
        </div>
    );
}
 
export default Home;