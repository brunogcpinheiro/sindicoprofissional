import React, { Fragment } from "react";
import Head from "next/head";
import GlobalStyles from "../src/styles/global";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const Main = ({ children }) => {
	return (
		<Fragment>
			<Head>
				<meta name="viewport" content="width=device-width, user-scalable=no" />
			</Head>
			<GlobalStyles />
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
};

export default Main;
