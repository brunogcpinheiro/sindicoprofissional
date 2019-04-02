import React, { Fragment } from "react";
import Link from "next/link";
import { Wrapper, Row, Column } from '../Grid';

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
			<Container id="about">
				<Row>
					<Column mobile="12" tablet="6" desktop="6">
						<AboutContent>
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
					</Column>
					
					<Column mobile="12" tablet="6" desktop="6" centered>
						<AboutImage>
							<AboutImageSection>
								<img
									src="/static/person.png"
									alt="Quem Somos"
									className="img-fluid"
								/>
							</AboutImageSection>
						</AboutImage>
					</Column>
				</Row>
			</Container>
		</Fragment>
	);
};

export default About;
