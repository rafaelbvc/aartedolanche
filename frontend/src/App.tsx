import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./routes/Public/PublicRoutes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <PublicRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
