import React, { Fragment } from "react";
import Link from "next/link";
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
						<Link href="/">
							<li>Home</li>
						</Link>
						<Link href="a-gcp-brasil">
							<li>A GCP Brasil</li>
						</Link>
						<Link href="/curso">
							<li>Curso</li>
						</Link>
						<Link href="/">
							<li>Especialidades</li>
						</Link>
						<Link href="/">
							<li>Certificados</li>
						</Link>
						<Link href="/">
							<li>Facility</li>
						</Link>
						<Link href="/">
							<li>Sustentabilidade</li>
						</Link>
						<Link href="/">
							<li>Manutenção</li>
						</Link>
						<Link href="/">
							<li>Investimentos</li>
						</Link>
						<Link href="/">
							<li>Contato</li>
						</Link>
					</List>
				</Menu>
			</Container>
		</Fragment>
	);
};

export default Header;
