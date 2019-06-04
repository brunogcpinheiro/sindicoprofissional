import styled from "styled-components";
import { accent } from '../../utils/colors';

export const Container = styled.div`
	padding-top: 100px;
	background: #fff;
`;

export const SpecialitiesWrapper = styled.div`
	width: 100%;
	max-width: 980px;
	
    h2 {
		text-transform: uppercase;
		margin: 70px 0 40px 0;
		font-size: 2rem;
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

export const Speciality = styled.div`
	margin: 40px 0;
	
	h3 {
		color: orange;
		text-transform: uppercase;
	}
	
	h4 {
		margin: 20px 0 20px 20px;
	}
	
	ul {
		margin-left: 40px;
	}
`;