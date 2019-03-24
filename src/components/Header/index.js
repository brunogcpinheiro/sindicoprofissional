import React, { Fragment } from "react";
import { Container, Logo, Menu, List } from "./styles";

const Header = () => {
	return (
		<Fragment>
			<Container>
				<Logo>
					<img src="/static/logomarca.png" alt="Logomarca" />
				</Logo>
				<Menu>
					<List>
						<li>Home</li>
						<li>A GCP Brasil</li>
						<li>Especialidades</li>
						<li>Certificados</li>
						<li>Facility</li>
						<li>Sustentabilidade</li>
						<li>Manutenção</li>
						<li>Investimentos</li>
						<li>Contato</li>
					</List>
				</Menu>
			</Container>
		</Fragment>
	);
};

export default Header;
