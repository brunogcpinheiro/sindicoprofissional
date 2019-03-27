import styled from "styled-components";
import { accent } from "../../utils/colors";

export const Container = styled.section`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 50px auto;
`;

export const AboutContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const AboutSection = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;

	h2 {
		text-transform: uppercase;
		font-size: 3rem;
		margin: 20px 0 0 20px;
		line-height: 50px;

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
		margin: 30px 20px 0 20px;
		line-height: 30px;
		font-size: 0.95rem;
	}

	a {
		margin: 50px 20px 0 20px;
		border: none;
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

export const AboutImage = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const AboutImageSection = styled.div`
	width: 100%;
	margin: 0 0 -92px 0;
	padding: 40px;
	align-self: flex-end;

	@media (max-width: 1200px) {
		img {
			align-self: flex-end;
		}
	}
`;
