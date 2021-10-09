import React from "react";
import styled from "@emotion/styled";
import Ig_ from "src/assets/SVG/ig.svg";
import Mail_ from "src/assets/SVG/mail.svg";
import WhatsApp_ from "src/assets/SVG/phone.svg";

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
  padding-left: 170px;
  margin-top: 10vh;
  margin-left: 4vh;
`;
const Ul = styled.ul`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  svg{
      display: inline;
  }
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
const SubTitle = styled.h4`
  width: 500px;
  font-size: 105px;
  line-height: 82px;
`;

const Contact = () => {
  return (
    <Wrap>
      <Title className="font-thin">CONTACTO</Title>
      <SubTitle>
        TRABAJEMOS <br />
        JUNTOS
      </SubTitle>
      <Ul>
        <Li>
          <a href="https://instagram.com/somosnecesarios">
            <Ig />
            <span>somosnecesarios</span>
          </a>
        </Li>
        <Li>
          <a href="mailto: somosnecesarios@gmail.com">
            <Mail />
            <span>somosnecesarios@gmail.com</span>
          </a>
        </Li>
        <Li>
          <a href="hhtps://wa.me/2235265866">
            <WhatsApp />
            <span>2235265866</span>
          </a>
        </Li>
      </Ul>
    </Wrap>
  );
};

export default Contact;
