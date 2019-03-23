import React, { Fragment } from "react";

import { HeroImage } from "./styles";

const Hero = () => {
	return (
		<Fragment>
			<HeroImage>
				<img src="/static/slide5.jpg" alt="Hero" />
				<h3>Tudo que você precisa para ter</h3>
				<h1>Sucesso</h1>
				<button>Saiba mais</button>
			</HeroImage>
		</Fragment>
	);
};

export default Hero;
