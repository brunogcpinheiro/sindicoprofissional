import React, { Fragment } from "react";
import { Container, Contact, Form, Icons, Inputs } from "./styles";
import { Wrapper, Row, Column } from '../Grid';
import {
	TiSocialFacebook,
	TiSocialInstagram,
	TiSocialTwitter,
	TiSocialYoutube,
} from "react-icons/ti";

const Footer = () => {
	return (
		<Fragment>
			<Container>
				<Row>
					<Column right mobile="12" tablet="12" desktop="6">
						<Contact>
							<h5>Contato</h5>
							<br />
							<p>Rua Adelaide Cicci Gomes, 41</p>
							<p>Brasília - DF</p>
							<br />
							<p>(62) 99999-9999</p>
							<p>comercial@gcpbrasil.com.br</p>
							<Icons>
								<TiSocialFacebook
									style={{ fontSize: "1.5rem", margin: "10px" }}
								/>
								<TiSocialInstagram
									style={{ fontSize: "1.5rem", margin: "10px" }}
								/>
								<TiSocialTwitter style={{ fontSize: "1.5rem", margin: "10px" }} />
								<TiSocialYoutube style={{ fontSize: "1.5rem", margin: "10px" }} />
							</Icons>
						</Contact>
					</Column>
					<Column left mobile="12" tablet="12" desktop="6">
						<Form>
							<Inputs>
								<label>Nome.:</label>
								<input type="text" id="name" placeholder="Seu nome..." />
							</Inputs>
							<Inputs>
								<label>Email.:</label>
								<input type="text" id="email" placeholder="Seu email..." />
							</Inputs>
							<Inputs>
								<label>Assunto.:</label>
								<input type="text" id="subject" placeholder="Um assunto..." />
							</Inputs>
							<Inputs>
								<label>Mensagem.:</label>
								<textarea id="message" rows="5" placeholder="Sua mensagem..." />
							</Inputs>
							<Inputs>
								<button type="submit">Enviar</button>
							</Inputs>
						</Form>
					</Column>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Footer;
