import React, { Fragment } from "react";
import { Container, AboutUsWrapper, Profile, ProfileImage, ProfileData } from "./styles";
import { Wrapper, Row, Column } from "../Grid";

const Course = () => {
	return (
		<Fragment>
			<Container>
			    <Wrapper>
			        <Row>
			            <Column centered>
			            	<AboutUsWrapper>
			            		<h2>Sobre nós</h2>
			            		<p>Fundada no Distrito Federal em  11 de Agosto de 2004, 
			            		com a finalidade de ser reconhecida - comercial e tecnicamente - 
			            		nas atividades de  Gestão, Consultoria, Planejamento e Assessoria 
			            		Condominial, a empresa GCPBrasil tem como foco principal o 
			            		atendimento de qualidade aos seus clientes, aliado a agilidade, 
			            		a capacitação permanente dos seus Colaboradores, a cordialidade, 
			            		a correção, transparência e honestidade naquilo que diuturnamente 
			            		se propôs a oferecer e executar.</p>
			            		
			            		<h2>O Fundador</h2>
			            			
				            		<Profile>
					            		<Row>
					            			<Column mobile="12" desktop="2" tablet="6">
						            			<ProfileImage>
						            				<img src="https://static.wixstatic.com/media/5d1848_061479d5ca344c92aa802f9f89acbf8d~mv2.jpg/v1/fill/w_213,h_213,al_c,q_80,usm_0.66_1.00_0.01/5d1848_061479d5ca344c92aa802f9f89acbf8d~mv2.webp" />
						            			</ProfileImage>
					            			</Column>
					            			<Column mobile="12" desktop="10" tablet="6">
						            			<ProfileData>
						            				<h4>SÉRGIO JOSÉ DE SOUZA</h4>
						            				<h5>OAB nº 38.718</h5>
						            				<ul>
						            					<li>Graduado em Direito pela Universidade de Uberaba-MG,  e com especialização e atuação na área do Direito Administrativo Brasileiro.</li>
						            					<li>Graduando em Ciências Contábeis,  pela Faculdade de Ciências Econômicas do Triângulo Mineiro e Faculdade de Ciências Gerenciais da UNA.</li>
						            				</ul>
						            			</ProfileData>
					            			</Column>
				            			</Row>
				            		</Profile>
				            		<h2>Experiências e Atuações</h2>
				            		<p>Após mais de 40 (Quarenta) anos ininterruptos de atuação 
				            		no setor Privado, são essas algumas das experiências acumuladas, 
				            		a serviço dos nossos Clientes e Parceiros:
				            		<br />
				            		<br />
									<strong>No âmbito do Setor Privado - Consultor e Gestor Empresarial 
									Independente</strong> (Gestão de Pessoas, Mapeamento de Processos, 
									Modelagem e/ou Remodelagem de Processos, Organização e Métodos, 
									Melhorias dos Processos e Rotinas Manualizadas, Melhorias na 
									Gestão do Tempo, Criação e Implantação de Regras e Normas, 
									Utilização da Tecnologia da Informação(ERP), Avaliação de 
									Documentos e Impressos, Gestão da Qualidade, Avaliação de 
									Desempenho, Capacitação e Treinamento de Pessoas);
									<br />
									<br />
									Atuação direta também na Prospecção de Oportunidades, visando 
									a implantação de Novos Empreendimentos Industriais e Comerciais, 
									para geração de emprego e renda, através de apoio do Poder 
									Executivo (Incentivos Fiscais e Tributários) e Agentes Financeiros 
									(Linhas de Créditos de baixo custo).
									<br />
									<br />
									<strong>No âmbito do Setor Privado - Consultor Empresarial - 
									SEBRAE NACIONAL</strong> (Habilitação 2017).
									<br />
									<br />
									<strong>No âmbito da Advocacia</strong>  - Atuação na área do Direito 
									Administrativo e do Direito Eleitoral (Consultoria).
									<br />
									<br />
									<strong>No âmbito da Gestão de Condomínios</strong> – Atuação direta na 
									Gestão Administrativa, Financeira, RH, Segurança Tecnológica, 
									bem como, na Manutenção, Conservação e Limpeza dos Empreendimentos 
									- Residenciais e Comerciais -, tanto no modelo Convencional, 
									quanto no modelo <strong>Sustentável</strong>, com certificação <strong>Green Building</strong>.</p>
				            	
				            		<h2>O Foco</h2>
				            		<p>Busca a empresa <strong>GCPBrasil</strong>, permanentemente, o 
				            		aprendizado constante, a inovação, a modernização e a 
				            		excelência nas rotinas e processos adotados, exportando para 
				            		esse e outros nichos de mercado, o conhecimento adquirido ao 
				            		longo dessa trajetória, visando com isso contribuir para as 
				            		melhorias de resultados.
				            		<br />
				            		<br />
				            		Voltada também aos apelos destinados à <strong>Sustentabilidade</strong> e 
				            		aos necessários cuidados com o meio ambiente, doa  a empresa <strong>GCPBrasil</strong>, permanentemente, a sua contribuição nesse 
				            		valoroso sentido e tema.</p>
				            		<br />
				            		<p style={{ color: "red", marginBottom: "50px" }}>O nosso maior patrimônio são os nossos Colaboradores e os nossos Clientes.</p>
			            	</AboutUsWrapper>
			            </Column>
			        </Row>
			    </Wrapper>
			</Container>
		</Fragment>
	);
};

export default Course;
