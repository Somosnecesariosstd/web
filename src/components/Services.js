import React from "react";
import styled from "@emotion/styled";

const Wrap = styled.div`
  position: relative;
  padding-left: 170px;
  margin-top: 10vh;
  margin-left: 4vh;
`;
const Ul = styled.ul`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Li = styled.li`
  font-size: 85px;
  line-height: 76px;
`;
const Title = styled.h3`
  width: 500px;
  font-size: 88px;
  transform: translateY(-50%) rotate(90deg);
  display: inline-block;
  position: absolute;
  left: -220px;
  top: 50%;
  text-align: center;
  line-height: 88px;
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
