import data from "./data.json";
import React from "react";

function Projects() {
    return (
        <div className="projects">
            <p className='heading'>projects</p>
            <div>
                {Object.entries(data.projects).map(([project, details]) => (
                    <p className="project" key={project}>
                        <a className='link projectName' href={details.url}> {project} </a>
                        <p className="projectDesc"> {details.desc}</p>
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Projects;
