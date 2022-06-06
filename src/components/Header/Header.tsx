import './Header.less';
import ledis_logo from "../../asset/logos/redis_logo.png";
import useRoutesTabs from "../../hooks/routing/useRoutesTabs";
import {InAppRoutes} from "../../navigation/RoutePageMapping";

const Header = () => {
    const tabs = useRoutesTabs(InAppRoutes);

    return <div className={"Header"}>
        <div className={"AppName-Container"}>
            <div className={"AppLogo-Container"}>
                <img className={"App-Logo"} alt={"Ledis logo image"} src={ledis_logo} width={50}/>
            </div>
            <span className={"App-Name"}>
                Ledis
            </span>
        </div>
        <div className={"AppTabs"}>
            {
                tabs
            }
        </div>
        <div className={"AppInfo"}>
            <span>
                Copyright - Nguyen Hoang Thinh
            </span>
        </div>
    </div>;
};

export default Header;
