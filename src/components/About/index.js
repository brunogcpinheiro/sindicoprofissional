import React, { Fragment } from "react";

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
			<Container>
				<AboutContent>
					<AboutSection>
						<h2>
							Quem <br />Somos
						</h2>
						<p>
							Fundada no Distrito Federal em 11 de Agosto de 2004, com a
							finalidade de ser reconhecida - comercial e tecnicamente - nas
							atividades de Gestão, Consultoria, Planejamento e Assessoria
							Condominial, a empresa GCPBrasil tem como foco principal o
							atendimento de qualidade aos seus clientes, aliado a agilidade, a
							capacitação permanente dos seus Colaboradores, a cordialidade, a
							correção, transparência e honestidade naquilo que diuturnamente se
							propôs a oferecer e executar.
						</p>
					</AboutSection>
				</AboutContent>
				<AboutImage>
					<AboutImageSection>
						<img src="/static/person.png" alt="Homem" />
					</AboutImageSection>
				</AboutImage>
			</Container>
		</Fragment>
	);
};

export default About;
