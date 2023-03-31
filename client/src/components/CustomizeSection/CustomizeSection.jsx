import "./CustomizeSection.scss"
import { Link } from "react-router-dom";
import apptrack from "../../assets/images/application-track.svg";
import summary from "../../assets/images/summary.svg";
import icons from "../../assets/images/icons.svg"
import Aside from "../Aside/Aside";
import Header from "../Header/Header";

import img1 from "../../assets/images/img1.svg"
import img2 from "../../assets/images/img2.svg"
import img3 from "../../assets/images/img3.svg"
import img4 from "../../assets/images/img4.svg"
import img5 from "../../assets/images/img5.svg"
import img6 from "../../assets/images/img6.svg"

import resignation from "../../assets/images/resignation.svg"
import headcount from "../../assets/images/headcount.svg"

function CustomizeSection() {
    return (
        <main className="main_wrapper">
            <Aside />

            <section className="customize">
                <Header />

                <article className="customize__wrapper">
                    <img className="customize__img" src={apptrack} />
                    <img className="customize__img" src={summary} />
                    <div className="customize__submit">
                        <img className="customize__icons" src={icons} />
                        <Link to="/templates"><button className="customize__button">Customize Dashboard</button></Link>
                    </div>
                </article>

                <article className="percentage__wrapper">
                    <img className="percentage__img" src={img1} />
                    <img className="percentage__img" src={img2} />
                    <img className="percentage__img" src={img3} />
                    <img className="percentage__img" src={img4} />
                    <img className="percentage__img" src={img5} />
                    <img className="percentage__img" src={img6} />
                </article>

                <article className="charts__wrapper">
                    <img className="charts__img" src={resignation} />
                    <img className="charts__img" src={headcount} />
                </article>

            </section>
        </main>
    )
}
export default CustomizeSection;