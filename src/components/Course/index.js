import React, { Fragment } from "react";
import { Container, Title, Description, Cards, Card } from "./styles";
import { Wrapper, Row, Column } from "../Grid";
import { TiShoppingCart } from 'react-icons/ti';

const Course = () => {
	return (
		<Fragment>
			<Container>
				<Wrapper>
					<Row>
						<Column mobile="12" tablet="12" desktop="12">
							<Title>
								<h1>Curso Síndico Profissional</h1>
							</Title>
							<Description>
								<p>Lorem Ipsum is simply dummy text of the printing 
									and typesetting industry. Lorem Ipsum has been the 
									industry's standard dummy text ever since the 1500s, 
									when an unknown printer took a galley of type and 
									scrambled it to make a type specimen book. It has 
									survived not only five centuries, but also the leap 
									into electronic typesetting, remaining essentially 
									unchanged. It was popularised in the 1960s with 
									the release of Letraset sheets containing Lorem 
									Ipsum passages, and more recently with desktop 
									publishing software like Aldus PageMaker including 
									versions of Lorem Ipsum.</p>
							</Description>
						</Column>
					</Row>
					
					<Row>
						<Column>
							<Cards>
								<Card>
									<h3>Iniciante</h3>
									<p>Lorem Ipsum is simply dummy text of the printing 
										and typesetting industry.
									</p>
									<ul>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
									</ul>
									<div>
										<a href="/">
											<TiShoppingCart 
												style={{ fontSize: '1.5rem' }}
											/> Comprar
										</a>
									</div>
								</Card>
								
								<Card>
									<h3>Intermediário</h3>
									<p>Lorem Ipsum is simply dummy text of the printing 
										and typesetting industry.
									</p>
									<ul>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
									</ul>
									<div>
										<a href="/">
											<TiShoppingCart 
												style={{ fontSize: '1.5rem' }}
											/> Comprar
										</a>
									</div>
								</Card>
								
								<Card>
									<h3>Avançado</h3>
									<p>Lorem Ipsum is simply dummy text of the printing 
										and typesetting industry.
									</p>
									<ul>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
									</ul>
									<div>
										<a href="/">
											<TiShoppingCart 
												style={{ fontSize: '1.5rem' }}
											/> Comprar
										</a>
									</div>
								</Card>
								
								<Card>
									<h3>Especialista</h3>
									<p>Lorem Ipsum is simply dummy text of the printing 
										and typesetting industry.
									</p>
									<ul>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
										<li>- Materia 1</li>
									</ul>
									<div>
										<a href="/">
											<TiShoppingCart 
												style={{ fontSize: '1.5rem' }}
											/> Comprar
										</a>
									</div>
								</Card>
							</Cards>
						</Column>
					</Row>
				</Wrapper>
			</Container>
		</Fragment>
	);
};

export default Course;
