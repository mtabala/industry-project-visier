import TemplateFirstPage from "../components/TemplateFirstPage/TemplateFirstPage";
import SideBar from "../components/SideBar/SideBar";
import "./TemplatePage.scss";

function TemplatePage() {
    return (
        <section className="template">
            <SideBar />
            <TemplateFirstPage />
        </section>
    );
}

export default TemplatePage;
