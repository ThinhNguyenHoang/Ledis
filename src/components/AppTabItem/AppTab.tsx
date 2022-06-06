import React from "react";

import './AppTab.less';
import {useAppSelector} from "../../hooks/redux/hooks";
import {routingSelector} from "../../redux/features/Routing/RoutingSlice";
import ROUTING_CONSTANTS from "../../navigation/routes";
import classNames from "classnames";
import {useLocation} from "react-router-dom";

type AppTabProps = {
    name: string,
    icon: any,
    handleClick: React.MouseEventHandler<HTMLDivElement>,
    routeKey: string
}
const AppTab = (props: AppTabProps) => {
    const {name, icon, handleClick, routeKey} = props;
    const isSelected = useAppSelector((state) => routingSelector.isTabSelected(state, () => {
        return state.routing.activePathKey === routeKey;
        // return state.routing.activePath.includes(ROUTING_CONSTANTS.DASHBOARD);
    }))
    return (
        <div className={classNames(
            {
                AppTab: true,
                AppTabSelected: isSelected
            }
        )} onClick={handleClick}>
            <span className={"TabIcon"}>
                {icon}
            </span>
            <span className={"TabName"}>
                {name}
            </span>
        </div>
    )
}

export default React.memo(AppTab);