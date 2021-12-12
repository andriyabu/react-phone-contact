import './App.css';


const Name = () => {
  return(
    <div>
      <p>My Name is <b>Monkey D. Lufi</b></p>
      <p>My Power is <b>Gomu gomu</b></p>
    </div>
  )
}

function App() {
  const greetings = "Helloo Nakama";
  return (
    <div className="App">
     <h1>{greetings}</h1>

     <Name />
    </div>
  );
}

export default App;
