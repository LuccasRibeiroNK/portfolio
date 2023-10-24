import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 5px;
  height: 30px;
  max-width: 44.2%;
  margin: 0 auto;
  background-color: blue (transparent, 0.9);
`;

const Homee = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
  color: #d5f08f;
`;

const About = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-left: 20px;
  color: #d5f08f;
`;

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <Homee>
          <Link to="/">Home</Link>
        </Homee>
        <About>
          <Link to="/hireme">Hire Me</Link>
        </About>
      </HeaderContainer>
    </div>
  );
};

export default Header;
