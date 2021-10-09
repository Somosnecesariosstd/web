import React from "react";
import styled from "@emotion/styled";
import Sticker_ from "src/assets/SVG/sticker.svg";
import Stickers_ from "src/assets/SVG/stickers.svg";
import { keyframes } from "@emotion/react";

const drop = keyframes`
0% {
	transform: translateY(-500px);
	animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
	transform: translateY(0);
	animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
	transform: translateY(-65px);
	animation-timing-function: ease-in;
  }
  72% {
	transform: translateY(0);
	animation-timing-function: ease-out;
  }
  81% {
	transform: translateY(-28px);
	animation-timing-function: ease-in;
  }
  90% {
	transform: translateY(0);
	animation-timing-function: ease-out;
  }
  95% {
	transform: translateY(-8px);
	animation-timing-function: ease-in;
  }
  100% {
	transform: translateY(0);
	animation-timing-function: ease-out;
  }
`;

const Title = styled.h2`
  line-height: 0.8;
  margin-top: 5vh;
  margin-left: 5vh;
  padding-bottom: 4vh;
  span {
    font-size: 196px;
    display: block;
    font-weight: 100;
  }
  strong {
    font-size: 185px;
    display: block;
    font-weight: 800;
  }
`;

const Text = styled.div`
  line-height: 36px;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  p {
    text-align: justify;

    font-size: 35px;
    margin-bottom: 40px;
  }
`;

const Sticker = styled(Sticker_)`
  position: absolute;
  width: 195px;
  left: 22vh;
  top: 42vh;
`;
const Stickers = styled(Stickers_)`
  position: absolute;
  width: 300px;
  right: 5vh;
  top: 5vh;
  animation: ${drop} 1.1s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
`;

const Somos = () => {
  return (
    <main>
      <Title>
        <span>SOMOS</span> <strong>NECESARIOS</strong>
      </Title>
      <Sticker className="animate-wiggle" />
      <Stickers />
      <Text>
        <p>
          Lo digital se volvió una necesidad para crecer en cualquier rubro. Nos
          encargamos de solucionar problemas visuales, y somos un equipo de
          trabajo que hace su aporte para cada rama de la comunicación.
        </p>
        <p className="font-extrabold">
          Nos gustan los desafíos como también poder dejar nuestra esencia en lo
          que creamos.
        </p>
      </Text>
    </main>
  );
};

export default Somos;
