import Navbar from "../Navbar/Navbar";
import { HeaderBackground, HeaderBox, HeaderLogo } from "./HeaderStyles";

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
