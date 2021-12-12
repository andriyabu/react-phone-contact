
const Nakama = (props) => {
  console.log(props)
  return(
    <div>
      <p>My Name is <b>{props.nama}</b></p>
      <p>My Power is <b>{props.power}</b></p>
    </div>
  )
}

function App() {
  const greetings = "Helloo Nakama";
  return (
    <div className="App">
     <h1>{greetings}</h1>
     <Nakama nama="Monkey D. Luffi" power="Gatling Gun"/>
     <Nakama nama="Roronoa Zoro" power="Santoryu" />
    </div>
  );
}

export default App;
