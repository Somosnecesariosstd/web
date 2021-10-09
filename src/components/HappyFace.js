import React from 'react'
import styled from '@emotion/styled'
import HappyFaceSvg from 'src/assets/SVG/happy-face.svg'

const Wrap = styled.div`
	max-width: 90vh;
	min-width: 70vh;
`
const HappyFace = () => {
	return (
		<Wrap>
			<HappyFaceSvg width="100%" className="animate-wiggle" />
		</Wrap>
	)
}

export default HappyFace
