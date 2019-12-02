import React from "react";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export const layout = props => (
	<React.Fragment>
		<Toolbar />
		<SideDrawer />
		<div>Toolbar, SideDrawers, Backdrop</div>
		<main className="content">{props.children}</main>
	</React.Fragment>
);
