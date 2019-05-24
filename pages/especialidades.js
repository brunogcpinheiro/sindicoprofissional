import React, { Fragment } from "react";
import Head from "next/head";
import Main from "../layouts/main";
import specialities from '../src/components/specialities';

const Curso = () => {
	return (
		<Fragment>
			<Head>
				<title>GCP Brasil | Especialidades</title>
			</Head>
			<Main>
			    <specialities />
			</Main>
		</Fragment>
	);
};

export default Curso;