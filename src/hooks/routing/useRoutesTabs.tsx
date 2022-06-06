import {useNavigate} from "react-router-dom";
import React from "react";
import AppTab from "../../components/AppTabItem/AppTab";
import {useAppDispatch} from "../redux/hooks";
import {setActivePathKey} from "../../redux/features/Routing/RoutingSlice";

export type NavigationItem = SubMenuNav | LinkNav | TabNav;

/**
 *  @param - If it is function: => Return true if this path is allowed else return false;
 *    - If it is array: => Specify the role required: User must have all role specified to be able to navigate to the Tab / Link
 */
export type TabNavAuthorizer = (() => boolean) | string[];

export interface SubMenuNav {
    key: string;
    icon: any;
    tab_name: string;
    required_permission: TabNavAuthorizer;
    type: "submenu";
    children: NavigationItem[];
}

export interface LinkNav {
    path: string;
    element: JSX.Element | undefined | null;
    required_permission: TabNavAuthorizer;
    type: "link";
    children?: NavigationItem[];
}

export interface TabNav {
    path: string;
    key: string;
    icon: any;
    tab_name: string;
    element: JSX.Element | undefined | null;
    required_permission: TabNavAuthorizer;
    children?: NavigationItem[];
    type: "tab";
}


export const getRouteItemKey = (item: NavigationItem) => {
    if (item.type !== "link") {
        return item.key;
    }
    return item.path;
}
const useRoutesTabs = (routes: NavigationItem[]) => {
    const navigate = useNavigate();
    const routesComputed = React.useMemo(
        () => displayRouteMenu(routes),
        [routes]
    );
    const dispatch = useAppDispatch();

    const onRouteSelected = (route: Exclude<NavigationItem, SubMenuNav>) => {
        navigate(route.path);
        dispatch(setActivePathKey(getRouteItemKey(route)))
    }

    // TODO: Implement the logic to check for required permission using the required_permission array
    function checkPermisison(route: NavigationItem) {
        // const { required_permission } = route;
        // if (required_permission instanceof Array) {
        // 	const userRole = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCOUNT_TYPE);
        // 	// * No special permisison required: Outside routes are uneffeted (they got 0 length array anyway)
        // 	if (required_permission.length === 0) {
        // 		return true;
        // 	}
        // 	// * Check for role info
        // 	if (required_permission.length > 0 && !userRole) return false;
        // 	const role = required_permission[0];
        // 	// ! Below logic assume that a user role return by the server only have one value: Currently "STAFF" | "STUDENT"
        // 	if (role !== userRole) return false;
        // }

        // if (required_permission instanceof Function) {
        // 	return required_permission();
        // }
        return true;
    }

    function displayRouteMenu(routes: NavigationItem[]) {
        function singleRoute(route: TabNav) {
            return (
                // <Menu.Item key={route.key}
                // 	onClick={() => {
                // 		navigate(route.path);
                // 	}}
                // 	icon={<IconSelector type={route.icon ? route.icon : ""} />}
                // >
                // 	{route.tab_name}
                // </Menu.Item>
                <AppTab name={route.tab_name} icon={route.icon} handleClick={() => {
                    onRouteSelected(route)
                }} routeKey={getRouteItemKey(route)}/>
            );
        }

        return routes
            .filter((item) => item.type !== "link")
            .map((route) => {
                if (checkPermisison(route)) {
                    if (route.type === "submenu") {
                        return (
                            // <SubVMenu
                            // 	key={route.key}
                            // 	title={route.tab_name}
                            // 	icon={<IconSelector type={route.icon ? route.icon : ""} />}
                            // >
                            // 	{displayRouteMenu(route.children)}
                            // </SubMenu>
                            <> </>
                        );
                    }
                    return singleRoute(route as TabNav);
                }
                return null;
            });
    }

    return routesComputed;
};

export default useRoutesTabs;
