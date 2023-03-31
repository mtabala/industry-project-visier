import "./CustomizeSection.scss"
import apptrack from "../../assets/images/application-track.svg";
import summary from "../../assets/images/summary.svg";
import icons from "../../assets/images/icons.svg"

function CustomizeSection() {
    return (
        <section className="customize">
            <img className="customize__img" src={apptrack} />
            <img className="customize__img" src={summary} />

            <div className="customize__submit">
                <img className="customize__icons" src={icons} />
                <button className="customize__button">Customize Dashboard</button>
            </div>
        </section>
    )
}
export default CustomizeSection;