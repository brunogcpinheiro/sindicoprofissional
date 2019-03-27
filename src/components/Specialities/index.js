import React, { Fragment } from "react";
import { Container, SpecialitiesSection, Card } from "./styles";
import Gallery from "react-photo-gallery";

const column1 = [
	{
		src: "/static/curso1.jpg",
		width: 3,
		height: 2,
	},
	{
		src: "/static/curso2.jpg",
		width: 3,
		height: 2,
	},
];

const column2 = [
	{
		src: "/static/curso4.jpg",
		width: 3,
		height: 2,
	},
	{
		src: "/static/curso5.jpg",
		width: 3,
		height: 2,
	},
	{
		src: "/static/curso3.jpg",
		width: 3,
		height: 2,
	},
];

const column3 = [
	{
		src: "/static/venancio.jpg",
		width: 4,
		height: 5,
	},
	{
		src: "/static/servicos.jpg",
		width: 4,
		height: 5,
	},
];

const column4 = [
	{
		src: "/static/servicos1.jpg",
		width: 4,
		height: 5,
	},
	{
		src: "/static/servicos2.jpg",
		width: 4,
		height: 5,
	},
];

const Specialities = () => {
	return (
		<Fragment>
			<Container>
				<SpecialitiesSection>
					<h2>
						Gestão de <br />Condomínios
					</h2>
					<p>Um síndico profissional com uma visão preventiva.</p>
					<Card>
						<Gallery photos={column1} margin={5} columns={2} />
						<Gallery photos={column2} margin={5} columns={3} />
					</Card>
				</SpecialitiesSection>
			</Container>
			<Container>
				<SpecialitiesSection>
					<h2>
						Experiências em Empreendimentos <br />Sustentáveis
					</h2>
					<div className="license">
						<img id="licenca" src="/static/licenca.jpg" alt="Licença" />
					</div>
					<Card>
						<Gallery photos={column3} margin={5} columns={2} />
						<Gallery photos={column4} margin={5} columns={2} />
					</Card>
				</SpecialitiesSection>
			</Container>
		</Fragment>
	);
};

export default Specialities;
