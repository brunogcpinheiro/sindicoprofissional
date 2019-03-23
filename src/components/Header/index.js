import React, { Fragment } from "react";
import { Container, Logo, Menu, List } from "./styles";

const Header = () => {
	return (
		<Fragment>
			<Container>
				<Logo>
					<h4>GCP BRASIL</h4>
					<p>Consultoria</p>
				</Logo>
				<Menu>
					<List>
						<li>Home</li>
						<li>Quem Somos</li>
						<li>Cursos</li>
						<li>Contato</li>
					</List>
				</Menu>
			</Container>
		</Fragment>
	);
};

export default Header;
