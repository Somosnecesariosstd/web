import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { mediaBreakpointUp } from 'src/styles/styles'

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const Nav = styled.nav`
  font-size: 45px;
  line-height: 1.3;
  position: fixed;
  left: 4vh;
  bottom: 4vh;
  z-index: 9;
  display:none;
	${mediaBreakpointUp.md`
    display:block !important;
	`}
`;

const MenuItem = styled.li``;
const MenuLink = styled.a`
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%) scale(1.25);
    path {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      transform-origin: center;
    }
  }
  &:hover {
    svg path {
      animation: ${dash} 0.5s linear forwards;
    }
  }
`;

const Menu = ({ onClickIndex }) => {
  return (
    <Nav>
      <ul>
        <MenuItem>
          <MenuLink
            href="#"
            className="font-thin"
            onClick={() => onClickIndex(0)}
          >
            SOMOS
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216.96 72.43">
              <g id="aa518108-479a-447d-abff-a5742c3a6daf" data-name="Capa 2">
                <g
                  id="be87f54a-ef90-46a4-ba5c-5be62a88254f"
                  data-name="Somos Bianco"
                >
                  <path
                    d="M216,36.22c0,19.45-48.12,35.21-107.48,35.21S1,55.67,1,36.22,49.12,1,108.48,1,216,16.77,216,36.22Z"
                    fill="none"
                    stroke="#de6030"
                    strokeMiterlimit="10"
                    strokeWidth="2.26"
                  />
                </g>
              </g>
            </svg>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink
            href="#"
            className="font-normal"
            onClick={() => onClickIndex(1)}
          >
            PROYECTOS
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.39 68.78">
              <g id="e3041997-6345-4f96-9d59-83bb94ce8aee" data-name="Capa 2">
                <g
                  id="e2b64f4c-381e-495b-9743-9753b935ccd5"
                  data-name="Contacto"
                >
                  <path
                    d="M291.26,34.39c0,18.37-64.95,33.26-145.07,33.26S1.13,52.76,1.13,34.39s65-33.26,145.06-33.26S291.26,16,291.26,34.39Z"
                    fill="none"
                    stroke="#de6030"
                    strokeMiterlimit="10"
                    strokeWidth="2.26"
                  />
                </g>
              </g>
            </svg>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink
            href="#"
            className="font-bold"
            onClick={() => onClickIndex(2)}
          >
            SERVICIOS
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.14 68.75">
              <g id="af36f01f-a8d0-4ca6-a1ee-835a81bbd2eb" data-name="Capa 2">
                <g
                  id="aa4e8791-b77b-4387-ba3d-0127da1324e6"
                  data-name="Servicios"
                >
                  <path
                    d="M284,34.38c0,18.37-63.33,33.26-141.46,33.26S1.11,52.75,1.11,34.38,64.45,1.11,142.57,1.11,284,16,284,34.38Z"
                    fill="none"
                    stroke="#de6030"
                    strokeMiterlimit="10"
                    strokeWidth="2.23"
                  />
                </g>
              </g>
            </svg>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink
            href="#"
            className="font-extrabold"
            onClick={() => onClickIndex(3)}
          >
            CONTACTO
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.39 68.78">
              <g id="e3041997-6345-4f96-9d59-83bb94ce8aee" data-name="Capa 2">
                <g
                  id="e2b64f4c-381e-495b-9743-9753b935ccd5"
                  data-name="Contacto"
                >
                  <path
                    d="M291.26,34.39c0,18.37-64.95,33.26-145.07,33.26S1.13,52.76,1.13,34.39s65-33.26,145.06-33.26S291.26,16,291.26,34.39Z"
                    fill="none"
                    stroke="#de6030"
                    strokeMiterlimit="10"
                    strokeWidth="2.26"
                  />
                </g>
              </g>
            </svg>
          </MenuLink>
        </MenuItem>
      </ul>
    </Nav>
  );
};

export default Menu;
