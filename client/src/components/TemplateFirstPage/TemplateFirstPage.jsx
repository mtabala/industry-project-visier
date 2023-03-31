import React from "react";
import { Link } from "react-router-dom";
import "./TemplateFirstPage.scss";
import img1 from "../../assets/imgTemplateDashbord/D1.svg";
import img2 from "../../assets/imgTemplateDashbord/D2.svg";
import img3 from "../../assets/imgTemplateDashbord/D3.svg";
import img4 from "../../assets/imgTemplateDashbord/D4.svg";

function TemplateFirstPage() {
    return (
        <section>
            <h1 className="swap-header">Dashboard Templates</h1>
            <div className="container">
                <div className="container__img">
                    <img className="img-swap img-swap--first" src={img1} alt="img1" />
                </div>
                <div className="container__img">
                    <img className="img-swap" src={img2} alt="img2" />
                </div>
                <div className="container__img">
                    <img className="img-swap" src={img3} alt="img3" />
                </div>
                <div className="container__img">
                    <img className="img-swap" src={img4} alt="img4" />
                </div>
            </div>
            <div className="btn-wrap">
                <Link to="/dashboard"><button className="swap">Apply Template</button></Link>
            </div>
        </section>
    );
}

export default TemplateFirstPage;
