import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 20vw;
  margin-top: -70px;
  padding: 100px;
`;

const SocialIcon = styled.a`
  margin: 10px 0;
  color: #000;
  font-size: 24px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #0077b5;
    transform: scale(1.2);
  }

  svg {
    margin-right: 10px;
  }
`;

const HireMe = () => {
  return (
    <SocialIconsContainer>
      <div>
        <h1 style={{ textAlign: "center" }}>Socials</h1>
      </div>
      <SocialIcon href="mailto:luccasribeiro1@gmail.com" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Email</span>
      </SocialIcon>
      <SocialIcon
        href="https://www.linkedin.com/in/luccasribeiro1/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span>LinkedIN</span>
      </SocialIcon>
      <SocialIcon
        href="https://www.instagram.com/your-instagram-profile"
        target="_blank"
      >
        <i className="fab fa-instagram"></i>
        <span>Instagram</span>
      </SocialIcon>
      <SocialIcon
        href="https://chat.whatsapp.com/IMcovgFzbM63IS1IgpADkY"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "facebook"]} />
        <span>Whatsapp</span>
      </SocialIcon>
    </SocialIconsContainer>
  );
};

export default HireMe;
