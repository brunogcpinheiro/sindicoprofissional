import React, { Fragment } from "react";
import { Container, SpecialitiesWrapper, Speciality } from "./styles";
import { Wrapper, Row, Column } from "../Grid";

const Specialities = () => {
	return (
		<Fragment>
			<Container>
			    <Wrapper>
			        <Row>
			            <Column centered>
			            	<SpecialitiesWrapper>
			            		<h2>Nossas especialidades</h2>
			            		
			            		<Speciality>
			            			<h3>- Implantação de condomínios</h3>
			            			<h4>Passo a passo</h4>
			            			<ul>
			            				<li>Vide Normas e Legislação em vigor</li>
			            				<li>Assembleias (Implantação - Ordinárias - Extraordinárias)</li>
			            				<li>Convenção de Condomínio (Formalização e Registro)</li>
			            			</ul>
			            		</Speciality>
			            		
			            		<Speciality>
			            			<h3>- Gestão de condomínios</h3>
			            			<h4>Gestão administrativa</h4>
			            			<ul>
			            				<li>Planejamento de Recursos Técnicos (ERP)</li>
			            				<li>Planejamento e Controle</li>
			            				<li>Regras e normas</li>
			            				<li>Bonificações e Penalidades (Notificações)</li>
			            				<li>Padrão de Organização e Qualidade</li>
			            				<li>Comunicação (Condôminos e Moradores)</li>
			            			</ul>
			            			
			            			<h4>Gestão financeira - patrimonial</h4>
			            			<ul>
			            				<li>Planejamento Orçamentário</li>
			            				<li>Contas a Pagar e Receber</li>
			            				<li>Conciliação Bancária</li>
			            				<li>Cotação e Compras</li>
			            				<li>Contratações</li>
			            				<li>Controle de Patrimônio e Inventário</li>
			            				<li>Cobranças (Administrativas)</li>
			            				<li>Prestações de Contas (Conselho Fiscal)</li>
			            			</ul>
			            			
			            			<h4>Gestão de pessoas</h4>
			            			<ul>
			            				<li>Plano de Cargos e Salários</li>
			            				<li>Tarefas e Rotinas (Check List)</li>
			            				<li>Metodologia e Processos</li>
			            				<li>Treinamento e Capacitação</li>
			            				<li>Banco de Horas</li>
			            				<li>Avaliação Periódica</li>
			            				<li>Admissão e Demissão (Exames)</li>
			            				<li>Faltas (Atestados Médicos)</li>
			            			</ul>
			            			
			            			<h4>Gestão contábil</h4>
			            			<ul>
			            				<li>Balanços e Balancetes</li>
			            				<li>Folhas de Pagamentos</li>
			            				<li>Impostos e Encargos</li>
			            				<li>RH</li>
			            				<li>Órgãos Públicos (RF - RE -  JC)</li>
			            				<li>Outros</li>
			            			</ul>
			            			
			            			<h4>Gestão jurídica</h4>
			            			<ul>
			            				<li>Legislação Aplicada</li>
			            				<li>Contratos (Elaboração - Análise - Gestão)</li>
			            				<li>Normas e Regras</li>
			            				<li>Cobranças e Acordos (Judiciais)</li>
			            			</ul>
			            			
			            			<h4>Gestão técnica</h4>
			            			<ul>
			            				<li>Conservação (Elétrica - Mecânica - Civil) (Preventiva e Corretiva)</li>
			            				<li>Manutenção (Elétrica - Mecânica - Civil) (Preventiva e Corretiva)</li>
			            				<li>Limpeza (Convencional e Sustentável)</li>
			            				<li>Obras e Benfeitorias (Necessárias - Úteis - Voluptuárias)</li>
			            				<li>Assistência Técnica - GARANTIA (Construtora - Incorporadora)</li>
			            				<li>Vícios (Aparentes - Ocultos Redibitórios - Fundação - Outros)</li>
			            			</ul>
			            			
			            			<h4>Gestão de segurança</h4>
			            			<ul>
			            				<li>Tecnologia (Equipamentos)</li>
			            				<li>Equipe</li>
			            				<li>Programa de Controles e Prevenções (Métodos - Ações - Procedimentos)</li>
			            				<li>Legislação Aplicada</li>
			            				<li>Normas e Regras</li>
			            				<li>Ocorrências Diárias</li>
			            				<li>Acionamento de Autoridades (Monitoramento) (Polícia)</li>
			            			</ul>
			            		</Speciality>
			            		
			            	</SpecialitiesWrapper>
			            </Column>
			        </Row>
			    </Wrapper>
			</Container>
		</Fragment>
	);
};

export default Specialities;
