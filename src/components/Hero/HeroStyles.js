import styled from "styled-components";
export const HeroBox = styled.div`
  width: 100%;
  /* height: 120vh; */
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: inset 0px -97px 4rem #0d0e0e;
  /* padding: 1rem; */
  /* background-image: url("./src/imgs/fondo.jpg"); */
`;
export const TitleHero = styled.h1`
  color: white;
  font-size: 3.5rem;
  filter: drop-shadow(2px 8px 6px black);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const BoxContentHero = styled.div`
  position: relative;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  top: -27.5rem;
  margin-bottom: -20.4rem;
`;
export const TextHero = styled.p`
  color: white;
  width: 75%;
  font-size: 1.3rem;
  filter: drop-shadow(2px 4px 4px black);
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
export const HeroBackground = styled.div`
  width: 100%;
  z-index: -3;
  max-height: 40rem;
  overflow: hidden;
  img {
    width: 100%;
    filter: hue-rotate(33deg) brightness(0.7);
  }
`;
