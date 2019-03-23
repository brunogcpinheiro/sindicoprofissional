import React, { Fragment } from "react";
import { Container, CourseSection } from "./styles";

const Course = () => {
	return (
		<Fragment>
			<Container>
				<CourseSection>
					<h2>
						Gestão de <br />Condomínios
					</h2>
					<p>
						Curso <strong>Síndico Profissional</strong>
					</p>
				</CourseSection>
			</Container>
		</Fragment>
	);
};

export default Course;
