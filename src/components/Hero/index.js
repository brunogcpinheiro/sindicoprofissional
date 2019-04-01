import React, { Fragment } from "react";

import { HeroImage } from "./styles";

const Hero = () => {
	return (
		<Fragment>
			<HeroImage>
				<img src="/static/hero.jpg" alt="Hero" className="img-fluid" />
				<h3>Tudo que você precisa para ter</h3>
				<h1>Sucesso</h1>
				<a href="#about">Saiba mais</a>
			</HeroImage>
		</Fragment>
	);
};

export default Hero;
