import React from 'react'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import NextArrowSvg from 'src/assets/SVG/next-arrow.svg'

const rotating = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

const Wrap = styled.div`
	position: fixed;
	right: 4vh;
	bottom: 4vh;
	g#text{
		transform-origin: center;
		animation: ${rotating} 9s linear infinite;
	}
`

const NextArrow = () => {
	return (
		<Wrap>
			<NextArrowSvg />
		</Wrap>
	)
}

export default NextArrow
