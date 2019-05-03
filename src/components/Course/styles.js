import styled from "styled-components";
import { accent } from '../../utils/colors';
import { shadow } from "../../utils/shadow";

export const Container = styled.div`
	padding-top: 100px;
	background: #fff;
`;

export const Title = styled.div`
	margin: 50px;
	
	&:before {
			content: "";
			display: block;
			width: 50px;
			padding-top: -20px;
			border-top: 3px solid ${accent};
			margin-bottom: 20px;
		}
`;

export const Description = styled.div`
	margin: 50px;
	text-align: justify;
`;

export const Cards = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

export const Card = styled.div`
	background: #fff;
	border: 1px solid ${accent};
	width: 250px;
	padding: 30px;
	margin: 0 25px 50px 0;
	-webkit-box-shadow: ${shadow};
	-moz-box-shadow: ${shadow};
	box-shadow: ${shadow};
	
	ul {
		list-style: none;
		margin-bottom: 30px;
	}
	
	div {
		width: 100%;
		display: flex;
		align-items: center;
		
		a {
			display: flex;
			align-items: center;
			justify-content: space-around;
			width: 100%;
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
	}
`;