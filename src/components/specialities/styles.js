import styled from "styled-components";
import { accent } from '../../utils/colors';

export const Container = styled.div`
	padding-top: 100px;
	background: #fff;
`;

export const SpecialitiesWrapper = styled.div`
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
	
	p {
	    font-size: 1.2rem;
	}
`;