import React, { Fragment } from "react";
import GlobalStyles from "../src/styles/global";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const Main = ({ children }) => {
	return (
		<Fragment>
			<GlobalStyles />
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
};

export default Main;
