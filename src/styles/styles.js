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

const breakpoints = {
	sm: '576px',
	md: '768px',
	lg: '992px',
	xl: '1200px',
	xxl: '1400px'
};

export const mediaBreakpointUp = Object.keys(breakpoints).reduce(
	(accumulator, label) => {
		accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
		  ${css(...args)};
		}
	  `;
		return accumulator;
	},
	{}
);

export const mediaBreakpointDown = Object.keys(breakpoints).reduce(
	(accumulator, label) => {
		accumulator[label] = (...args) => css`
		@media (max-width: ${breakpoints[label]}) {
		  ${css(...args)};
		}
	  `;
		return accumulator;
	},
	{}
);

export default globalStyles