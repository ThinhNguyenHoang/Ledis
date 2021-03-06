import './NotFoundPage.less';
import {useNavigate} from "react-router-dom";
import ROUTING_CONSTANTS from "../../navigation/routes";

const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1>404 Error Page #2</h1>
            <p className="zoom-area">The page is currently unavailable</p>
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
};

export default NotFoundPage;
