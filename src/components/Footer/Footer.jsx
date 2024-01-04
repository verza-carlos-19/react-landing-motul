import { FooterBottomBox, FooterBox, FooterTopBox } from "./footerStyles";

function Footer() {
  return (
    <FooterBox>
      <FooterTopBox>
        <img src="./src/imgs/motul.svg" alt="logo" />
      </FooterTopBox>
      <FooterBottomBox>
        <p>© 2024. Todos los derechos reservados.</p>
      </FooterBottomBox>
    </FooterBox>
  );
}

export default Footer;
