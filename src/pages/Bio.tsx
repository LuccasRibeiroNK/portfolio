import styled from "styled-components";
import img from "../assets/132031892_10157966494097644_5045282102281829999_n.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  @media (max-width: 320px) {
    // padding: 10px;
    display: flex;
    margin-top: 10vh;
    // margin-left: 10vw;
    // padding: 10px;
    // padding-left: 50px;
    font-size: 30px;
    // justify-content: left;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: #d5f08f;
    letter-spacing: 2px;
    margin-left: 60px;
  }
  @media (max-width: 480px) {
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
  }
  @media (max-width: 480px) {
  }

  @media (min-width: 1500px) {
    margin-left: 10px;
  }
  @media (min-width: 1500px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }
  .pMain {
    max-width: 1vw;
    font-size: 40px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: #d5f08f;
    letter-spacing: 4px;
    @media (max-width: 320px) {
      font-size: 20px;
      margin-bottom: -100px;
      margin-top: 0px;
      margin-left: 10px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
    @media (max-width: 720px) {
      font-size: 30px;
    }
  }
  p {
    margin-top: 20px;
    font-family: "Roboto", sans-serif;
    @media (max-width: 320px) {
      margin-bottom: -10px;
      margin-left: 10px;
    }
    @media (max-width: 480px) {
      height: 150px;
      //   margin-right: 50px;
      margin-top: 70px;
    }
    @media (max-width: 720px) {
    }
  }
`;

const Image = styled.img`
  height: 200px;
  max-width: 200px;
  margin-right: 200px;
  border-radius: 0.5rem;
  border: 2px solid;
  border-color: #d5f08f;
  border-right-width: 3px;
  border-bottom: 3px solid;
  border-color: #d5f08f;
  @media (max-width: 320px) {
    height: 100px;
    margin-left: -200px;
  }
  @media (max-width: 480px) {
    height: 100px;
    margin-top: 70px;
    margin-right: 100px;
  }
  @media (max-width: 720px) {
    // height: 150px;
    margin-top: 70px;
    margin-left: 50px;
    margin-right: 40px;
  }
  @media (max-width: 720px) {
    margin-top: 85px;
  }
  @media (max-width: 1100px) {
    // height: 200px;
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
