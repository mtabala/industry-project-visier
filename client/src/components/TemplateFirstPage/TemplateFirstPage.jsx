import React from "react";
import "./TemplateFirstPage.scss";
import img1 from "../../assets/imgTemplateDashbord/D1.svg";
import img2 from "../../assets/imgTemplateDashbord/D2.svg";
import img3 from "../../assets/imgTemplateDashbord/D3.svg";
import img4 from "../../assets/imgTemplateDashbord/D4.svg";

function TemplateFirstPage() {
  return (
    <section>
      <h1>Dashboard Templates</h1>
      <div className="container">
        <div>
          <img src={img1} alt="img1" />
        </div>
        <div>
          <img src={img2} alt="img2" />
        </div>
        <div>
          <img src={img3} alt="img3" />
        </div>
        <div>
          <img src={img4} alt="img4" />
        </div>
      </div>
      <div className="btn-wrap">
        <button>Apply Template</button>
      </div>
    </section>
  );
}

export default TemplateFirstPage;
