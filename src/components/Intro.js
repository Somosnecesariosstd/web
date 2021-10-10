import React from 'react'
import HappyFace from 'src/components/HappyFace'
import styled from '@emotion/styled'
import { mediaBreakpointUp } from 'src/styles/styles'


const Section = styled.section`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Title = styled.h1`
	position: absolute;
	left:10px;
	top:10px;
	font-size: 29px;

	${mediaBreakpointUp.md`
		left: 4vh;
		top: 4vh;
		font-size: 39px;
	`}
`
const Section1 = () => {
	return (
		<Section>
			<Title>
				SOMOS<strong>NECESARIOS</strong>
			</Title>
			<HappyFace />
		</Section>
	)
}

export default Section1
