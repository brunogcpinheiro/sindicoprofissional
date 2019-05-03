import React, { Fragment } from "react";
import Head from "next/head";
import Main from "../layouts/main";
import AboutUs from '../src/components/AboutUs';

const Curso = () => {
	return (
		<Fragment>
			<Head>
				<title>GCP Brasil | A GCP Brasil</title>
			</Head>
			<Main>
			    <AboutUs />
			</Main>
		</Fragment>
	);
};

export default Curso;