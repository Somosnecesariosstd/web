import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import NextArrow from "src/components/NextArrow";
import Menu from "src/components/Menu";
import useEmblaCarousel from "embla-carousel-react";
import Somos from "src/components/Somos";
import Intro from "src/components/Intro";
import Services from "src/components/Services";
import Contact from "src/components/Contact";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const Embla = styled.div`
  overflow: hidden;
`;
const EmblaContainer = styled.div`
  display: flex;
`;
const EmblaSlide = styled.div`
  position: relative;
  flex: 0 0 100%;
`;

const Index = () => {
  const [emblaRef, embla] = useEmblaCarousel({ dragFree: true });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  useState(() => {
    console.log(embla);
  }, [embla]);

  return (
    <div>
      <Menu onClickIndex={scrollTo} />
      <Embla ref={emblaRef}>
        <EmblaContainer>
          <EmblaSlide>
            <ReactScrollWheelHandler downHandler={scrollNext}>
              <Intro />
            </ReactScrollWheelHandler>
          </EmblaSlide>
          <EmblaSlide>
            <ReactScrollWheelHandler
              upHandler={scrollPrev}
              downHandler={scrollNext}
            >
              <Somos />
            </ReactScrollWheelHandler>
          </EmblaSlide>
          <EmblaSlide>
            <ReactScrollWheelHandler
              upHandler={scrollPrev}
              downHandler={scrollNext}
            >
              <Services />
            </ReactScrollWheelHandler>
          </EmblaSlide>
          <EmblaSlide>
            <ReactScrollWheelHandler upHandler={scrollPrev}>
              <Contact />
            </ReactScrollWheelHandler>
          </EmblaSlide>
        </EmblaContainer>
      </Embla>
      <NextArrow />
    </div>
  );
};

export default Index;
