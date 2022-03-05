import ora from 'ora';
import projectGet from './queries/projectGet.js';

const getProject = async (id) => {
  const spinner = ora('Retrieving project information...').start();
  const projects = await projectGet(id)
  spinner.stop()

  return projects
}

export default getProject;