import styled from "styled-components";
import { accent } from "../../utils/colors";

export const HeroImage = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;

	img {
		width: 100%;
		height: 100%;
		opacity: 0.4;
		position: relative;
		background-attachment: fixed;
	}

	h3,
	h1,
	a {
		position: absolute;
	}

	h3 {
		margin-top: -100px;
		font-family: 'Questrial', 'Lato', cursive, sans-serif;
		letter-spacing: 0.7rem;
		font-size: 1.2rem;
	}

	h1 {
		font-family: 'Paytone One', 'Lato', cursive, sans-serif;
		text-transform: uppercase;
		font-size: 7rem;
		letter-spacing: 0.8rem;
	}

	a {
		margin-top: 150px;
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
