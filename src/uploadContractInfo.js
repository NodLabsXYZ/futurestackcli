import ora from 'ora';
import contractPost from './queries/contractPost.js';

const uploadContractInfo = async ({ project, contractName, abi, bytecode }) => {
  const uploadSpinner = ora(`Uploading information for contract "${contractName}"`).start();

  const data = {
    project_id: project.id,
    name: contractName,
    info: {
      abi,
      bytecode
    },
    compiled_at: new Date().toISOString()  
  }

  await contractPost(data)
  uploadSpinner.stop()
}

export default uploadContractInfo;