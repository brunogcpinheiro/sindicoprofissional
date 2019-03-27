import React, { Fragment } from "react";
import Link from "next/link";

import {
	Container,
	AboutContent,
	AboutSection,
	AboutImage,
	AboutImageSection,
} from "./styles";

const About = () => {
	return (
		<Fragment>
			<Container id="about" className="container">
				<div className="row">
					<AboutContent className="col-md-6 col-sm-12">
						<AboutSection>
							<h2>
								Quem <br />Somos
							</h2>
							<p>
								Fundada no Distrito Federal em 11 de Agosto de 2004, com a
								finalidade de ser reconhecida - comercial e tecnicamente - nas
								atividades de Gestão, Consultoria, Planejamento e Assessoria
								Condominial, a empresa{" "}
								<strong>
									<em>GCPBrasil</em>
								</strong>{" "}
								tem como foco principal o atendimento de qualidade aos seus
								clientes, aliado a agilidade, a capacitação permanente dos seus
								Colaboradores, a cordialidade, a correção, transparência e
								honestidade naquilo que diuturnamente se propôs a oferecer e
								executar.
							</p>
							<Link href="/a-gcp-brasil">
								<a>Mais sobre a GCP Brasil</a>
							</Link>
						</AboutSection>
					</AboutContent>
					<AboutImage className="col-md-6 col-sm-12">
						<AboutImageSection>
							<img
								src="/static/person.png"
								alt="Quem Somos"
								className="img-fluid"
							/>
						</AboutImageSection>
					</AboutImage>
				</div>
			</Container>
		</Fragment>
	);
};

export default About;
