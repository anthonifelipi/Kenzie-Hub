import Logo from "../../assets/Logo.png";
import { Container } from "./styles";

const Header = ({children}) => {
  return (
    <Container>
      <img src={Logo} alt="" />
      {children}
    </Container>
  );
};

export default Header;
