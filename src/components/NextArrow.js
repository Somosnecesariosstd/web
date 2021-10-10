import React from 'react'
import { keyframes, css } from '@emotion/react'
import styled from '@emotion/styled'
import NextArrowSvg_ from 'src/assets/SVG/next-arrow.svg'
import { mediaBreakpointUp } from 'src/styles/styles'

const rotating = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`
const NextArrowSvg = styled(NextArrowSvg_)`
`

const Wrap = styled.div`
	position: fixed;
	bottom: 10px;
	right: 10px;
	width: 110px;
	g#text{
		transform-origin: center;
		animation: ${rotating} 9s linear infinite;
	}

	
	${mediaBreakpointUp.md`
		right: 4vh;
		bottom: 4vh;
		width: 276px;
	`}
`

const NextArrow = ({ revert }) => {
	return (
		<Wrap>
			<NextArrowSvg />
		</Wrap>
	)
}

export default NextArrow
