import styled from "styled-components";
import { accent } from "../../utils/colors";
import { shadow } from "../../utils/shadow";

export const Container = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	background: #fff;
`;

export const CourseSection = styled.div`
	width: 45%;

	h2 {
		text-transform: uppercase;
		margin-top: 120px;
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

	p {
		margin-top: 20px;
		font-size: 1.2rem;
	}

	.license {
		width: 100%;
		display: flex;
		align-items: center;

		#licenca {
			width: 150px;
			height: 150px;
			margin: 0 auto;
		}
	}
`;

export const Card = styled.div`
	width: 100%;
	border: 1px solid #f5f5f5;
	margin-top: 20px;
	-webkit-box-shadow: ${shadow};
	-moz-box-shadow: ${shadow};
	box-shadow: ${shadow};
`;
