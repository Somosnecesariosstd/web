import React from "react";
import styled from "@emotion/styled";
import Ig_ from "src/assets/SVG/ig.svg";
import Mail_ from "src/assets/SVG/mail.svg";
import WhatsApp_ from "src/assets/SVG/phone.svg";
import { mediaBreakpointUp } from 'src/styles/styles'

const Ig = styled(Ig_)`
  width: 64px;
  height: 64px;
`;
const Mail = styled(Mail_)`
  width: 72px;
  height: 48px;
`;
const WhatsApp = styled(WhatsApp_)`
  width: 66px;
  height: 66px;
`;

const Wrap = styled.div`
  position: relative;
  margin-top: 10vh;
  margin-left: 4vh;
	${mediaBreakpointUp.md`
  padding-left: 170px;
	`}
`;
const Ul = styled.ul`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  svg{
      display: inline;
      max-width: 25px;
      margin-right: 8px;
  }
  
	${mediaBreakpointUp.md`
  svg{
    width: auto;
  }
	`}
`;
const Li = styled.li`
font-size: 24px;
line-height: 20px;
	${mediaBreakpointUp.md`
  font-size: 85px;
  line-height: 76px;
	`}
`;
const Title = styled.h3`
  width: 500px;
  font-size: 88px;
  transform: translateY(-50%) rotate(90deg);

  position: absolute;
  left: -220px;
  top: 50%;
  text-align: center;
  line-height: 88px;
`;
const SubTitle = styled.h4`
  width: 500px;
  font-size: 34px;
  line-height: 30px;
  max-width: 90vw;
	${mediaBreakpointUp.md`
  font-size: 105px;
  line-height: 82px;
	`}
`;

const Contact = () => {
  return (
    <Wrap>
      <Title className="font-thin hidden md:inline-block">CONTACTO</Title>
      <SubTitle>
        TRABAJEMOS <br />
        JUNTOS
      </SubTitle>
      <Ul>
        <Li>
          <a href="https://instagram.com/somosnecesarios" target="_blank" className="flex flex-nowrap items-center flex-row" rel="noreferrer">
            <Ig />
            <span>somosnecesarios</span>
          </a>
        </Li>
        <Li>
          <a href="mailto: hola@somosnecesarios.com.ar" className="flex flex-nowrap items-center flex-row" >
            <Mail />
            <span>hola@somosnecesarios.com.ar</span>
          </a>
        </Li>
        <Li>
          <a href="https://wa.me/5492235265866" target="_blank" className="flex flex-nowrap items-center flex-row" rel="noreferrer">
            <WhatsApp />
            <span>2235265866</span>
          </a>
        </Li>
      </Ul>
    </Wrap>
  );
};

export default Contact;
