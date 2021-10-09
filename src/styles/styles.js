import { css } from '@emotion/react'
import bgImg from 'src/assets/images/bg.png'

const globalStyles = css`
	html,
	body {
		padding: 0;
		margin: 0;
	}
	body {
		background-image: url(${bgImg.src});
	}
	.embla {
	}
	.embla__container {
	}
	.embla__slide {
	}
`
export default globalStyles
