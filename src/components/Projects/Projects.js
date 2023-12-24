import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import qr from "../../Assets/Projects/qrcode_scanner.png";
import neftlux from "../../Assets/Projects/neftlux.png";
import robo from "../../Assets/Projects/robofriends.png";
import quiz from "../../Assets/Projects/quiz_app.png";
import osk from "../../Assets/Projects/OSK_TheBrick.png";
import spfm from "../../Assets/Projects/SPFM.png";
import sunway from "../../Assets/Projects/Sunway_SPFM.png";
import dashboard from "../../Assets/Projects/socialmedia_dashboard.png";
import movie from "../../Assets/Projects/movie_site.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robo}
              isBlog={false}
              title="RoboFriends 🤖"
              description="A responsive single page web application,allowing users to filter the Robots results data via the search form. Created with React App, connecting to a mock API from JSON Placeholder via a Fetch statement."
              ghLink="https://github.com/anw6rwah6b/robotfriends"
              demoLink="https://robotfriends-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="movie-site 🎞️"
              description="Page build with Next.js and Tailwind Css which takes the content from third party API and render movies, using Next.js."
              ghLink="https://github.com/anw6rwah6b/movie_site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neftlux}
              isBlog={false}
              title="Netflux 📺"
              description="Neftlux is a simple landing page project of a neflix web page. using HTML, CSS and JavaScript "
              ghLink="https://github.com/anw6rwah6b/netflux"
              demoLink="https://anw6rwah6b.github.io/netflux/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To do list 📝"
              description="A dynamic and aesthetic To-Do List Website built with HTML, CSS, Vanilla JavaScript."
              ghLink="https://github.com/anw6rwah6b/-js-todo-2023"
              demoLink="https://anw6rwah6b.github.io/-js-todo-2023/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz app 🧩"
              description="Quiz. This application this application will be able to load questions from a 3rd party API, track and display high scores."
              ghLink="https://github.com/anw6rwah6b/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript"
              demoLink="https://build-a-quiz-app-with-html-css-and-java-script-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qr}
              isBlog={false}
              title="QR Code Generator"
              description="Simple app to generate and download a QR code that can be used to share a link."
              ghLink="https://github.com/anw6rwah6b/-qrcode-js"
              demoLink="https://anw6rwah6b.github.io/-qrcode-js/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Social media dashboard with theme switcher"
              description="A social media dashboard with theme switcher that change, using gulp, html, and Sass"
              ghLink="https://github.com/anw6rwah6b/fem-dklt-toggle"
              demoLink="https://fem-dklt-toggle-pearl.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sunway}
              isBlog={true}
              title="Sunway SPFM"
              description="Sunway SPFM is a website and app management in collaboration with IMTTECH SDN BHD."
              ghLink="https://sunway.imttech.co/home/welcome/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spfm}
              isBlog={true}
              title="SPFM Project"
              description="SPFM is a sunway landing page for there client to see what properties that there offers in gratitude of IMTTECH SDN BHD."
              ghLink="https://spfm.com.my/home/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={osk}
              isBlog={true}
              title="OSK The Brick Project"
              description="The Brick OSK is a landing page that offers their clients to see what Properties are on offer."
              ghLink="https://www.thebrick.com.my/home/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
