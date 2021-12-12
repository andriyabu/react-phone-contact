const Home = () => {
    const handleClick = (e) => {
        console.log("Halloo");
        console.log(e);
    }

    const handleClick2 = (name,e) => {
        console.log("Halloo", name);
        console.log(e)
    } 
    return (
        <div className="home">
            <h3>Contact List</h3>
            <button onClick={handleClick}>klik</button>
            <button onClick={(e) => handleClick2("Luffi",e)}>Klick Lagi</button>
        </div>
    );
}
 
export default Home;