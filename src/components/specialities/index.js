import React, { Fragment } from "react";
import { Container, SpecialitiesWrapper } from "./styles";
import { Wrapper, Row, Column } from "../Grid";

const specialities = () => {
	return (
		<Fragment>
			<Container>
			    <Wrapper>
			        <Row>
			            <Column centered>
			            	<SpecialitiesWrapper>
			            		<h2>Nossas Especialidades</h2>
			            		<p>Fundada no Distrito Federal em  11 de Agosto de 2004, 
			            		com a finalidade de ser reconhecida - comercial e tecnicamente - 
			            		nas atividades de  Gestão, Consultoria, Planejamento e Assessoria 
			            		Condominial, a empresa GCPBrasil tem como foco principal o 
			            		atendimento de qualidade aos seus clientes, aliado a agilidade, 
			            		a capacitação permanente dos seus Colaboradores, a cordialidade, 
			            		a correção, transparência e honestidade naquilo que diuturnamente 
			            		se propôs a oferecer e executar.</p>
			            		
			            	</SpecialitiesWrapper>
			            </Column>
			        </Row>
			    </Wrapper>
			</Container>
		</Fragment>
	);
};

export default specialities;
