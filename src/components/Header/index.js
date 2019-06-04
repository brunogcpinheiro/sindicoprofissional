import React, { Fragment, useState } from "react";
import Link from "next/link";
import { Container, Logo, SideDrawer, DrawerList, Menu, List, Burger } from "./styles";
import { TiTimes } from 'react-icons/ti';

const Header = () => {
	const [ open, setOpen ] = useState(false);
	
	return (
		<Fragment>
			<Container>
				<Logo>
					<img src="/static/logomarca.png" alt="Logomarca" />
				</Logo>
				<Burger onClick={() => setOpen(true)}>
					<div />
					<div />
					<div />
				</Burger>
				
				{ open && (
					<SideDrawer>
						<DrawerList>
							<li>
								<TiTimes 
									style={{ fontSize: '3rem', cursor: 'pointer' }}
									onClick={() => setOpen(false)}
								/>
							</li>
							<Link href="/">
								<li>Home</li>
							</Link>
							<Link href="/a-gcp-brasil">
								<li>A GCP Brasil</li>
							</Link>
							<Link href="/curso">
								<li>Curso</li>
							</Link>
							<Link href="/especialidades">
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
						</DrawerList>
					</SideDrawer>
				) }
				
				<Menu>
					<List>
						<Link href="/">
							<li>Home</li>
						</Link>
						<Link href="/a-gcp-brasil">
							<li>A GCP Brasil</li>
						</Link>
						<Link href="/curso">
							<li>Curso</li>
						</Link>
						<Link href="/especialidades">
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
