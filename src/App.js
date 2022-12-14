import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Nft from "./Components/routes/Nft";
import Docs from "./Components/routes/Docs";
import { useState } from "react";

function App() {
  const [respNav, setRespNav] = useState(false);
  return (
    <div className="App">
      <Nav respNav={respNav} setRespNav={setRespNav} />
      <Routes>
          <Route path="/" element={<Main />} />
        <Route path="NFT" element={<Nft />} />
        <Route path="Docs" element={<Docs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
