import styled from "styled-components";
import { accent } from "../../utils/colors";

export const Container = styled.section`
	width: 100%;
	height: 800px;
	background: #fff;
	display: flex;
	justify-content: center;
`;

export const CourseSection = styled.div`
	width: 50%;

	h2 {
		text-transform: uppercase;
		margin-top: 150px;
		font-size: 3rem;
		line-height: 60px;

		&:before {
			content: "";
			display: block;
			width: 50px;
			padding-top: -20px;
			border-top: 3px solid ${accent};
			margin-bottom: 20px;
		}
	}
`;
