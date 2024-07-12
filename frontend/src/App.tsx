import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./routes/Public/PublicRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PublicRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
