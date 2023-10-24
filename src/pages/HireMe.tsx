import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 60vw;
  height: 80vh;
  //   margin-top: -100px;
  padding: 100px;
`;

const SocialIcon = styled.a`
  margin: 10px 0;
  color: #d5f08f;
  font-size: 24px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #eded0e;
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
        <FontAwesomeIcon icon={faInstagram} />
        <span>Instagram</span>
      </SocialIcon>
      <SocialIcon
        href="https://chat.whatsapp.com/IMcovgFzbM63IS1IgpADkY"
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        <span>Whatsapp</span>
      </SocialIcon>
    </SocialIconsContainer>
  );
};

export default HireMe;
