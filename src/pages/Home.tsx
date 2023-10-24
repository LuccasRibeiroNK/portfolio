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
    description: "I did this site when I was learning about React Context.",
    image:
      "https://ogpelnfwpiyjlhixdbkk.supabase.co/storage/v1/object/sign/site's%20screens/UsingContextTroughComponents.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlJ3Mgc2NyZWVucy9Vc2luZ0NvbnRleHRUcm91Z2hDb21wb25lbnRzLmpwZyIsImlhdCI6MTY5ODEwOTYwMywiZXhwIjoxNzI5NjQ1NjAzfQ.APa3CZJ39orl6pNOFFD4-_Kkhfpcv9XG6RLpoX-q62I&t=2023-10-24T01%3A06%3A43.259Z",
    link: "https://ogpelnfwpiyjlhixdbkk.supabase.co/storage/v1/object/sign/site's%20screens/UsingContextTroughComponents.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlJ3Mgc2NyZWVucy9Vc2luZ0NvbnRleHRUcm91Z2hDb21wb25lbnRzLmpwZyIsImlhdCI6MTY5ODEwOTYwMywiZXhwIjoxNzI5NjQ1NjAzfQ.APa3CZJ39orl6pNOFFD4-_Kkhfpcv9XG6RLpoX-q62I&t=2023-10-24T01%3A06%3A43.259Z",
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
    margin-right: 20px;
  }

  img {
    width: 880%;
    max-width: 20vw;
    height: auto;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 2px solid #d5ef90;
    margin-left: 10px;
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
