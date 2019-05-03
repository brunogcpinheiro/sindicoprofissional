import React, { Fragment } from "react";
import { Container, Image } from "./styles";
import { Wrapper, Row, Column } from "../Grid";

const Course = () => {
	return (
		<Fragment>
			<Container>
			    <Wrapper>
			        <Row>
			            <Column centered>
			                <Image>
            				    <img src="/static/team.jpg" />
            				</Image>  
			            </Column>
			        </Row>
			    </Wrapper>
			</Container>
		</Fragment>
	);
};

export default Course;
