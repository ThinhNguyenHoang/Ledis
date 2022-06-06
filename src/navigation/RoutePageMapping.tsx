import {Navigate} from "react-router-dom";
import App from "../App";
import {NavigationItem} from "../hooks/routing/useRoutesTabs";
import TestPage from "../pages/TestPage/TestPage";
import ROUTING_CONSTANTS from "./routes";
import NotFoundPage from "../pages/UtilPages/NotFoundPage";
import home_icon from "../asset/icons/home.svg";
import camera_icon from "../asset/icons/snapshot.svg";
import history_icon from "../asset/icons/logs.svg";
import DashBoardPage from "../pages/DashBoard/DashBoardPage";
import SnapshotPage from "../pages/Snapshots/SnapshotPage";
import HistoryPage from "../pages/History/HistoryPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faCamera} from "@fortawesome/free-solid-svg-icons/faCamera";
import {faClockRotateLeft} from "@fortawesome/free-solid-svg-icons/faClockRotateLeft";


export const InAppRoutes: NavigationItem[] = [
    {
        key: 'dashboard',
        path: ROUTING_CONSTANTS.DASHBOARD,
        element: <DashBoardPage/>,
        required_permission: [],
        icon: <FontAwesomeIcon icon={faHouse}/>,
        type: "tab",
        tab_name: "Dashboard"
    }, {
        key: 'snapshots',
        path: ROUTING_CONSTANTS.SNAPSHOTS,
        element: <SnapshotPage/>,
        required_permission: [],
        icon: <FontAwesomeIcon icon={faCamera}/>,
        type: "tab",
        tab_name: "Snapshots"
    },
    {
        key: 'history',
        path: ROUTING_CONSTANTS.HISTORY,
        element: <HistoryPage/>,
        required_permission: [],
        icon: <FontAwesomeIcon icon={faClockRotateLeft}/>,
        type: "tab",
        tab_name: "History"
    },
]
export const RoutePageMapping: NavigationItem[] = [
    {
        path: "/",
        element: <App/>,
        required_permission: [],
        children: InAppRoutes,
        type: "link",
    },
    // ? Default Routes for Failed Routes
    {
        path: ROUTING_CONSTANTS.NOT_FOUND,
        element: <NotFoundPage/>,
        required_permission: [],
        type: "link",
    },
    {
        path: "*",
        element: <Navigate to={ROUTING_CONSTANTS.NOT_FOUND} replace={true}/>,
        required_permission: [],
        type: "link",
    },
];


