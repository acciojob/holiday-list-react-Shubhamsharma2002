import React from "react";
import "../styles/App.css";

// Sample array of dream projects
const projects = [
  {
    name: "AI Portfolio Builder",
    description: "An automated web application that generates developer portfolios."
  },
  {
    name: "Digital ID App",
    description: "A secure mobile identity management application for digital credentials."
  },
  {
    name: "Finance Tracking Dashboard",
    description: "A real-time financial analytics dashboard built with React and Tailwind CSS."
  }
];

const App = () => {
  return (
    <div id="main">
      <div className="ns-wrapper">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <h1 data-ns-test="project-name">{project.name}</h1>
            <h6 data-ns-test="project-description">{project.description}</h6>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default App;