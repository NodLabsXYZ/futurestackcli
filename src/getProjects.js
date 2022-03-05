import ora from 'ora';
import projectsGet from './queries/projectsGet.js';

const getProjects = async () => {
  const spinner = ora('Retrieving project information...').start();
  const projects = await projectsGet()
  spinner.stop()

  return projects
}

export default getProjects;