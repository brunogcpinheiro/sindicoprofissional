import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static getInitialProps ({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props =>
			sheet.collectStyles(<App {...props} />),
		);
		const styleTags = sheet.getStyleElement();

		return { ...page, styleTags };
	}

	render () {
		return (
			<html>
				<Head>{this.props.styleTags}</Head>
				<link
					href="https://fonts.googleapis.com/css?family=Lato|Questrial|Paytone+One:300,400,700"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				/>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
