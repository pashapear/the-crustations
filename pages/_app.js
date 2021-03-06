import "../styles/index.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
	/* font-family: acier-bat-gris,sans-serif;
    font-weight: 400;
    font-style: normal; */

	/* font-family: acier-bat-gris,sans-serif;
    font-weight: 400;
    font-style: normal; */

	/* font-family: acier-bat-outline,sans-serif;
    font-weight: 400;
    font-style: normal; */

	/* font-family: acier-bat-solid,sans-serif;
    font-weight: 400;
    font-style: normal; */

	/* font-family: acier-bat-strokes,sans-serif;
    font-weight: 400;
    font-style: normal; */

	font-family: stroudley, sans-serif;
	font-weight: 400;
	font-style: normal;

  background-color: #121212;
  color: #ffffff;
}

h1,
h2,
h3,
h4,
h5 {
	font-family: acier-bat-solid, sans-serif;
	font-weight: 400;
	font-style: normal;
  color: #f399be;
}
article a {
	color: #f399be;
	text-decoration: underline;
}
.primary-button {
	display: inline-block;
	padding: 0.35em 1.2em;
	border: 0.1em solid #FFF;
	margin: 0 0.3em 0.3em 0;
	border-radius: 0.12em;
	box-sizing: border-box;
	text-decoration: none;
	background-color: transparent;
	color: #FFF;
	text-align: center;
	transition: all 0.2s;
	cursor: pointer;
}

.primary-button:hover {
	color: #000000;
	background-color: #ffffff;
}

@media all and (max-width: 30em) {
	  .primary-button {
		display: block;
		margin: 0.4em auto;
	}
}
`;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
