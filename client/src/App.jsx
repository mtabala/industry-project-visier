import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import TemplatePage from "./pages/TemplatePage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/dashboard" element={<DashboardPage />}></Route>
                <Route path="/templates" element={<TemplatePage />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
export default App;
