import React from "react";
import styled from "@emotion/styled";
import { mediaBreakpointUp } from 'src/styles/styles'

const Wrap = styled.div`
  position: relative;
  margin-top: 10vh;
  margin-left: 4vh;
  padding-left: 10px;
	${mediaBreakpointUp.md`
  padding-left: 170px;
	`}
`;
const Ul = styled.ul`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Li = styled.li`
  font-size: 25px;
  line-height: 20px;
  white-space: nowrap;
	${mediaBreakpointUp.md`
  font-size: 85px;
  line-height: 76px;
	`}
`;
const Title = styled.h3`
  width: 500px;
  max-width: 90vw;
  display: inline-block;
  position: absolute;
  font-size: 48px;
  line-height: 48px;
  
	${mediaBreakpointUp.md`
  text-align: center;
  transform: translateY(-50%) rotate(90deg);
  left: -220px;
  top: 50%;
  font-size: 88px;
  line-height: 88px;
	`}
`;

const Services = () => {
  return (
    <Wrap>
      <Title className="font-thin">SERVICIOS</Title>
      <Ul>
        <Li>- DISEÑO GRÁFICO</Li>
        <Li>- DISEÑO UX/UI</Li>
        <Li>- DESARROLLO WEB</Li>
        <Li>- FOTOGRAFÍA</Li>
        <Li>- MANEJO DE REDES</Li>
      </Ul>
    </Wrap>
  );
};

export default Services;
