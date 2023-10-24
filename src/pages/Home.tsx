import styled from "styled-components";
import Bio from "./Bio";

const projects = [
  {
    title: "Project 1",
    description: "This is the first project I worked on.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project1",
  },
  {
    title: "Project 2",
    description: "This is the second project I worked on.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project2",
  },
  {
    title: "Project 3",
    description: "This is the third project I worked on.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project3",
  },
  {
    title: "Project 1",
    description: "This is the first project I worked on.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project1",
  },
  {
    title: "Project 2",
    description: "This is the second project I worked on.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project2",
  },
  {
    title: "Project 3",
    description: "This is the third project I worked on.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project3",
  },
];

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  color: #d5ef90;

  h2 {
    margin-top: 0;
    color: #d5ef90;
  }

  p {
    margin-bottom: 10px;
    color: #d5ef90;
  }

  img {
    width: 100%;
    max-width: 300vw;
    height: auto;
    margin-bottom: 10px;
  }
`;

const Home = () => {
  return (
    <div>
      <Bio />
      <hr />
      <h1>My Projects</h1>
      {projects.map((project) => (
        <ProjectContainer key={project.title}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link}>
            <img src={project.image} alt={project.title} />
          </a>
        </ProjectContainer>
      ))}
      <div className="hero">
        <div className="hero__title"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
    </div>
  );
};

export default Home;
