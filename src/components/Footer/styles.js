import styled from "styled-components";
import { accent } from "../../utils/colors";

export const Container = styled.footer`
	background: ${accent};
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 50px;
`;

export const Contact = styled.div`
	margin: 0 auto;

	h5 {
		text-transform: uppercase;
		letter-spacing: 0.25rem;
		font-weight: 700;

		&:before {
			content: "";
			display: block;
			width: 50px;
			padding-top: -20px;
			border-top: 3px solid black;
			margin-bottom: 20px;
		}
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`;

export const Inputs = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	width: 100%;

	label {
		font-weight: bold;
		margin: 0 5px 0 0;
	}

	input,
	textarea,
	button {
		border: 1px solid black;
		background: transparent;
		padding: 5px;
		width: 350px;

		&::placeholder {
			color: black;
		}
	}

	button {
		width: 100%;
		background: #000;
		color: #fff;
	}
`;

export const Icons = styled.div`
	display: flex;
	margin: 5px;
`;
