import styled from "styled-components";
import img from "../assets/132031892_10157966494097644_5045282102281829999_n.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  padding: 10px;
  display: flex;
  margin-top: 10vh;
  padding: 10px;
  padding-left: 50px;
  font-size: 30px;
  justify-content: left;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #d5f08f;
  letter-spacing: 2px;
  @media (max-width: 320px) {
    margin-bottom: -20px;
  }
`;

const Content = styled.div`
  display: flex;
`;

const Text = styled.div`
  flex: 1;
  text-align: left;
  margin: 50px;
  margin-bottom: 150px;
  margin-left: 80px;
  @media (max-width: 320px) {
    margin-bottom: 40px;
  }
  .pMain {
    max-width: 1vw;
    font-size: 40px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: #d5f08f;
    letter-spacing: 4px;
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
  p {
    margin-top: 20px;
    @media (max-width: 320px) {
      margin-bottom: -10px;
    }
  }
`;

const Image = styled.img`
  height: 200px;
  max-width: 200px;
  margin-right: 100px;
  border-radius: 0.5rem;
  border: 2px solid;
  border-color: #d5f08f;
  border-right-width: 3px;
  border-bottom: 3px solid;
  border-color: #d5f08f;
  @media (max-width: 320px) {
    height: 100px;
    max-width: 100px;
    margin-right: 50px;
    margin-top: 70px;
  }
  @media (min-width: 1500px) {
    margin-right: 10vw;
  }
`;

const Bio = () => {
  return (
    <Container>
      <Name>Lucas Ribeiro</Name>
      <Content>
        <Text>
          <p className="pMain">Frontend Developer</p>
          <p>
            I like to craft solid and scalable frontend products with great user
            expeiriences.
          </p>
        </Text>
        <Image src={img} alt="Lucas" />
      </Content>
    </Container>
  );
};

export default Bio;
