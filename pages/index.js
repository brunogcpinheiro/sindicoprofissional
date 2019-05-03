import React, { Fragment } from "react";
import Head from "next/head";
import Main from "../layouts/main";
import About from "../src/components/About";
import CourseSection from "../src/components/CourseSection";
import Hero from "../src/components/Hero";

const Index = () => {
	return (
		<Fragment>
			<Head>
				<title>GCP Brasil | Home</title>
			</Head>
			<Main>
				<Hero />
				<About />
				<CourseSection />
			</Main>
		</Fragment>
	);
};

export default Index;
