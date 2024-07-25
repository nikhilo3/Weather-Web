import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Other from "./pages/other";

function App() {
  return (
    <>
      <div
        className="background-image"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <Routes>
          <Route path="/Weather-Web" element={<Home />} />
          <Route path="/Weather-Web/other" element={<Other />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
