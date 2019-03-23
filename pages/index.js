import React from "react";
import Main from "../layouts/main";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Course from "../src/components/Course";

const Index = () => {
	return (
		<Main>
			<Hero />
			<About />
			<Course />
		</Main>
	);
};

export default Index;
