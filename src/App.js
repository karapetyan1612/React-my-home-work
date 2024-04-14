import "./App.css";
import Header from "./screens/header.jsx";
import Body from "./screens/body.jsx";
import Footer from "./screens/footer.jsx";
import ProfilDoctor from "./screens/profil.jsx";
import { Route, Routes } from "react-router-dom";
import Balans from "./screens/balans.jsx";
import Zapis from "./screens/zapis.jsx";

function App() {
  return (
    <div className="main">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Body></Body>} />
        <Route path="/profil/:id" element={<ProfilDoctor></ProfilDoctor>} />
        <Route path="/balans" element={<Balans></Balans>} />
        <Route path="/zapis" element={<Zapis></Zapis>} />
        <Route path="/*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
