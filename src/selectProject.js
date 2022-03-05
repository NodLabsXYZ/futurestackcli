import getProjects from "./getProjects.js";

const selectProject = async (title) => {
  const projects = await getProjects();

  let project;
  if (title) {
    project = projects.find(
      p => p.title === title
    );
  } else if (projects.length == 1) {
    project = projects[0];
  } else {
    project = projects.find(
      p => p.title === directoryName
    )
  }

  return project;
}

export default selectProject;