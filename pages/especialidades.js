import React, { Fragment } from "react";
import Head from "next/head";
import Main from "../layouts/main";
import Specialities from '../src/components/Specialities';

const Especialidades = () => {
	return (
		<Fragment>
			<Head>
				<title>GCP Brasil | Especialidades</title>
			</Head>
			<Main>
			    <Specialities />
			</Main>
		</Fragment>
	);
};

export default Especialidades;