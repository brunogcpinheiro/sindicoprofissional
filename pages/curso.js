import React, { Fragment } from "react";
import Head from "next/head";
import Course from "../src/components/Course";
import Main from "../layouts/main";

const Curso = () => {
	return (
		<Fragment>
			<Head>
				<title>GCP Brasil | Curso Síndico Profissional</title>
			</Head>
			<Main>
				<Course />
			</Main>
		</Fragment>
	);
};

export default Curso;
