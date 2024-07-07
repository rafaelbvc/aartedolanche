import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Cardapio from "../../pages/Cardapio/Cardapio";
import Contato from "../../pages/Contato/Contato";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
};

export default PublicRoutes;
