import Background from "../helpers/Background";
import Seller from "./seller";
import darkGreyBg from "../../images/dark-grey-bg.png";
import MenuIntro from "./MenuIntro";

const SellerMenu = () => {
  return (
    <section id="menu">
      <Background url={darkGreyBg}>
        <MenuIntro />
        <Seller />
      </Background>
    </section>
  );
};

export default SellerMenu;