import {
  BoxContentHero,
  HeroBackground,
  HeroBox,
  TextHero,
  TitleHero,
} from "./heroStyles";

function Hero() {
  return (
    <>
      <HeroBox>
        <HeroBackground>
          <img src="./src/imgs/fondo.jpg" alt="" />
        </HeroBackground>
        <BoxContentHero>
          <TitleHero>¡Desata la Velocidad!</TitleHero>
          <TextHero>
            Del rugido del Motocross al desafío del Rally Dakar, de la
            adrenalina del MotoGP a la precisión de la Fórmula 1: nuestros
            lubricantes con tecnología sintética avanzada garantizan rendimiento
            inigualable, protección suprema y máxima potencia para los
            verdaderos campeones del motorsport.
          </TextHero>
        </BoxContentHero>
      </HeroBox>
    </>
  );
}

export default Hero;
