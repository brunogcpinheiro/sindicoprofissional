import React from "react";
import Main from "../layouts/main";
import About from "../src/components/About";
import Course from "../src/components/Course";
import Hero from "../src/components/Hero";

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
