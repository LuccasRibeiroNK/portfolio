import styled from "styled-components";
import Bio from "./Bio";

const projects = [
  {
    title: "Your_Poster",
    description:
      "This is site is a blog where anyone can create a post with title, text and a image.",
    fullDescription:
      "Frontend created with Reactjs/Vite, Typescript. Database with PostgresSQL. Deployed with Render.com.",
    image:
      "https://ogpelnfwpiyjlhixdbkk.supabase.co/storage/v1/object/sign/site's%20screens/Poster.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlJ3Mgc2NyZWVucy9Qb3N0ZXIuanBnIiwiaWF0IjoxNjk4MTkzNzk1LCJleHAiOjE3Mjk3Mjk3OTV9.-MvJHgiCHUX_n9I2pMZgbPfqrQoZwP_86XeRokV7GlI&t=2023-10-25T00%3A29%3A56.935Z",
    link: "https://your-poster-gcvw.onrender.com/",
  },
  {
    title: "Using Context Through Components",
    description:
      "With this site you can see how to useContext through components.",
    fullDescription:
      "Using styled-components, ReactJS, Typescript. Deployed with Render.com.",
    image:
      "https://ogpelnfwpiyjlhixdbkk.supabase.co/storage/v1/object/sign/site's%20screens/UsingContextTroughComponents.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlJ3Mgc2NyZWVucy9Vc2luZ0NvbnRleHRUcm91Z2hDb21wb25lbnRzLmpwZyIsImlhdCI6MTY5ODEwOTYwMywiZXhwIjoxNzI5NjQ1NjAzfQ.APa3CZJ39orl6pNOFFD4-_Kkhfpcv9XG6RLpoX-q62I&t=2023-10-24T01%3A06%3A43.259Z",
    link: "https://lucas-dev-y1gj.onrender.com",
  },
  {
    title: "API with NodeJS and Express",
    description:
      "An API I made for a project connecting to a AWS SQL database. With this API I could create and delete books from my SQL database.",
    fullDescription:
      "A simple API with: Javascript, Express, Mysql2, Cors. Deployed with Render.com.",
    image:
      "https://ogpelnfwpiyjlhixdbkk.supabase.co/storage/v1/object/sign/site's%20screens/Nodeserver.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlJ3Mgc2NyZWVucy9Ob2Rlc2VydmVyLmpwZyIsImlhdCI6MTY5ODE5NDMxNywiZXhwIjoxNzI5NzMwMzE3fQ.DDJ5BjjUBZWiOyUlLrVXeH1xTz3NxQd5V1b15y_n0H4&t=2023-10-25T00%3A38%3A38.134Z",
    link: "https://node-server-733o.onrender.com",
  },
];

const H1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  color: #d5ef90;
  margin-bottom: 10px;
  @media (max-width: 320px) {
    width: 100%;
    font-size: 102px;
    padding: 10px;
  }
  @media (max-width: 480px) {
    width: 100%;
    font-size: 12px;
    padding: 10px;
  }
  @media (min-width: 1500px) {
    margin-right: 10vw;
  }
`;

const ProjectContainer = styled.div`
  max-width: 80vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 5vw;
  flex-direction: column;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  color: #d5ef90;
  padding: 20px;
  
  @media (max-width: 320px) {
    width: 10%;
    // margin: auto;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
}
@media (max-width: 1100px) {
        padding: 20px;
        width: 100%;
        margin-left: 10vw;
        margin-right: 10vw;
    }
   
 
.h1Projects{
    margin-left: 10vw;
    font-size: 102px;
    @media (max-width: 320px) {
        width: 100%;
        font-size: 102px;
        padding: 10px;
      }
      @media (max-width: 480px) {
          width: 100%;
          font-size: 12px;
          padding: 10px;
          }
      @media (min-width: 1500px) {
          margin-right: 10vw;
          font-size: 102px;
      }
    
}
  h2 {
    margin-top: 30px;
    color: #d5ef90;
    @media (max-width: 320px) {
      width: 100%;
      font-size: 102px;
      padding: 10px;
    }
    @media (max-width: 480px) {
        width: 100%;
        font-size: 12px;
        padding: 10px;
        }
    @media (min-width: 1500px) {
        margin-right: 10vw;
    }
  }

  p {
    margin: auto;
    margin-bottom: 10px;
    color: #d5ef90;
    width: 60%;
    @media (max-width: 320px) {
      width: 80%;
      font-size: 8px;
      text-align: center;
      margin-left: 20px;
    }
    @media (max-width: 480px) {
        width: 80%;
        font-size: 8px;
        text-align: center;
        margin-left: 20px;
        }
    @media (min-width: 1500px) {
        margin-right: 10vw;
    }
  }

  img {
    width: 80%;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 2px solid #d5ef90;
    margin-left: 10px;
    @media (max-width: 320px) {
      width: 80%;
      margin-top: 30px;
    }
    @media (max-width: 480px) {
        width: 100%;
        margin-top: auto;
        }
        @media (max-width: 768px) {
            display: block;
    margin: 0 auto;
            }
        @media (min-width: 1320px) {
            margin-left: -10vw;
            margin: 0 auto;
        }
    
`;

const Home = () => {
  return (
    <div>
      <Bio />
      <hr />
      <H1>
        <h1 className="h1Projects">My Projects</h1>
      </H1>
      {projects.map((project) => (
        <ProjectContainer key={project.title}>
          <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
          <div>
            <h2>Tecnologies</h2>
            <p>{project.fullDescription}</p>
          </div>
          <a href={project.link}>
            <img src={project.image} alt={project.title} />
          </a>
        </ProjectContainer>
      ))}
      {/* <div className="hero">
        <div className="hero__title"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div> */}
    </div>
  );
};

export default Home;
