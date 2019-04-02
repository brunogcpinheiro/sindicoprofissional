import React, { Fragment } from "react";
import { Container } from "./styles";
import { Wrapper, Row, Column } from "../Grid";

const Course = () => {
	return (
		<Fragment>
			<Container>
				<Wrapper>
					<Row>
						<Column centered mobile="12" tablet="12" desktop="12">
							<div>ola</div>
						</Column>
					</Row>
				</Wrapper>
			</Container>
		</Fragment>
	);
};

export default Course;
