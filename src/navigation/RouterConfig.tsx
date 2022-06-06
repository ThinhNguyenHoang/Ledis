import { useLocation, useRoutes } from "react-router-dom";
import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks/redux/hooks";
import { RoutePageMapping } from "./RoutePageMapping";

export const RouterConfig = () => {
	const dispatch = useAppDispatch();

	let routes = useRoutes(RoutePageMapping);
	useEffect(() => {
		return () => {};
	}, []);
	return routes;
};
