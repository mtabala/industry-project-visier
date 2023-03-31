import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Aside from "./components/Aside/Aside";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aside />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
