import ROUTING_CONSTANTS from "../../navigation/routes";
import {useNavigate} from "react-router-dom";
import "./InConstructionPage.less";

const InConstructionPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <p className="zoom-area" style={{marginTop:"3em"}}> The feature is in construction</p>
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                <a target="_blank" onClick={() => {
                    navigate(ROUTING_CONSTANTS.DASHBOARD);
                }}
                   className="more-link">Return to dashboard</a>
            </div>
        </>
    )
}

export default InConstructionPage;