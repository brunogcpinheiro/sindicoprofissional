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
	border-bottom: 1px solid ${accent};
`;

export const Logo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px;

	img {
		width: 160px;
		height: 90px;
		cursor: pointer;
	}
`;

export const SideDrawer = styled.div`
	width: 300px;
	height: 100vh;
	background: #fff;
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	border-left: 1px solid ${accent};
	z-index: 100;
`;

export const DrawerList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	padding: 50px;
	
	
	li {
		margin-top: 20px;
		cursor: pointer;
		
		&:hover {
			color: ${accent};
		}
		
		&:first-child {
			margin: -20px 0 20px -20px;
			padidng: 0;
		}
	}
`;

export const Menu = styled.nav`
	margin-top: 20px;
	
	@media (max-width: 1200px) {
		display: none;
	}
`;

export const Burger = styled.div`
	cursor: pointer;
	padding: 0;
	margin: 0;
	border: none;
	
	div {
		height: 5px;
		background: #c1c1c1;
		width: 30px;
		margin: 3px;
	}
	
	@media (min-width: 1201px) {
		display: none;
	}
`;

export const List = styled.ul`
	list-style: none;
	display: flex;

	li {
		margin: 10px;
		cursor: pointer;
		font-weight: 700;
		transition: color 0.4s ease;
		font-size: 0.875rem;

		&:hover {
			color: ${accent};
		}
	}
`;
