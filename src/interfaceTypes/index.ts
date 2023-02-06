import { ComponentType, ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export interface PrivateRouteProps extends RouteProps {
	component: ComponentType<any>;
	permission?: string;
}

export interface LayoutProps {
	children: ReactNode
}

