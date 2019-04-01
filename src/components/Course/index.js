import React, { Fragment } from "react";
import { Container, Red, Blue, Orange } from "./styles";

const Course = () => {
	return (
		<Fragment>
			<Container>
				<div className="bg-wrapper">
					<div className="bg-row">
						<div className="bg-column">
							<Red>
								<h1>Ola</h1>
							</Red>
						</div>
						<div className="bg-column">
							<Blue>
								<h1>Ola</h1>
							</Blue>
						</div>
						<div className="bg-column">
							<Orange>
								<h1>Ola</h1>
							</Orange>
						</div>
					</div>
					<div className="bg-row">
						<div className="bg-column">
							<Red>
								<h1>Ola</h1>
							</Red>
						</div>
						<div className="bg-column">
							<Blue>
								<h1>Ola</h1>
							</Blue>
						</div>
						<div className="bg-column">
							<Orange>
								<h1>Ola</h1>
							</Orange>
						</div>
					</div>
				</div>
			</Container>
		</Fragment>
	);
};

export default Course;
