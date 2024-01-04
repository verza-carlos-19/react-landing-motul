import Navbar from "../navbar/navbar";
import { HeaderBackground, HeaderBox, HeaderLogo } from "./headerStyles";

function Header() {
  return (
    <>
      <HeaderBackground>
        <HeaderBox>
          <HeaderLogo>
            <img src="./src/imgs/motul.svg" alt="logo" />
          </HeaderLogo>
          <Navbar />
        </HeaderBox>
      </HeaderBackground>
    </>
  );
}

export default Header;
