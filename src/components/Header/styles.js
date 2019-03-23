import styled from "styled-components";
import { accent } from "../../utils/colors";

export const Container = styled.header`
	background: #fff;
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	position: fixed;
	z-index: 99;
`;

export const Logo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px;

	h4 {
		letter-spacing: 0.3rem;
	}

	p {
		letter-spacing: 0.2rem;
	}
`;

export const Menu = styled.nav`margin: 50px;`;

export const List = styled.ul`
	list-style: none;
	display: flex;

	li {
		margin: 20px;
		cursor: pointer;
		font-weight: 700;
		transition: color 0.4s ease;
		font-size: 0.9rem;

		&:hover {
			color: ${accent};
		}
	}
`;
