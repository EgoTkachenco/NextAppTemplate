import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
	* { 
		box-sizing: border-box;
	}
	body {
		max-width: 100%;
		margin: 0;	
		font-family: ${theme.fonts.primary};
	}
	h1, h2, h3, h4, h5, h6, p, a {
		text-decoration: none;
		margin: 0;
	}
`
