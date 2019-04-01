import styled from "styled-components";
import { accent } from "../../utils/colors";
import { shadow } from "../../utils/shadow";

export const Container = styled.section`
	margin: 0 auto;
	width: 100%;
	height: 100%;
	padding-bottom: 70px;
	display: flex;
	justify-content: center;
	background: #fff;
`;

export const CourseSectionWrapper = styled.div`
	width: 100%;

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
`;

export const Card = styled.div`
	width: 100%;
	padding: 50px;
	border: 1px solid #f5f5f5;
	margin: 20px 0 0 0;
	-webkit-box-shadow: ${shadow};
	-moz-box-shadow: ${shadow};
	box-shadow: ${shadow};

	p {
		margin-bottom: 50px;
	}

	a {
		padding: 16px 24px;
		background: #000;
		color: #fff;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		font-weight: 700;
		border: 3px solid #000;
		transition: all 0.4s ease-in-out;

		&:hover {
			background: transparent;
			color: ${accent};
			border: 3px solid ${accent};
			transition: all 0.4s ease-in-out;
			font-weight: 700;
		}
	}
`;
