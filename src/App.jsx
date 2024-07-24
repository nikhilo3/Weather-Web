import "./App.css";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <div className="background-image" style={{position:'relative',overflow:'overlay'}}>
        <Home />
      </div>
    </>
  );
}

export default App;
