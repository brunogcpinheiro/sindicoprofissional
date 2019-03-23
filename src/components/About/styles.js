import styled from "styled-components";
import { accent } from "../../utils/colors";

export const Container = styled.section`
	width: 100%;
	height: 600px;
	display: flex;
	align-items: center;
`;

export const AboutContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const AboutSection = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-right: 20px;

	h2 {
		text-transform: uppercase;
		font-size: 3rem;
		margin: 90px 0 0 20px;
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
`;

export const AboutImage = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const AboutImageSection = styled.div`
	width: 50%;
	margin-left: 20px;
	align-self: flex-end;
`;
