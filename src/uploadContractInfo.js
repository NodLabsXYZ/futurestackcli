import ora from 'ora';
import contractUpsert from './queries/contractUpsert.js';
import contractsGet from './queries/contractsGet.js';

const uploadContractInfo = async ({ project, contractName, opensource, abi, bytecode, description }) => {
  const uploadSpinner = ora(`Uploading information for contract "${contractName}"`).start();

  const data = {
    project_id: project.id,
    name: contractName,
    info: {
      abi,
      bytecode,
      description
    },
    compiled_at: new Date().toISOString()  
  }

  if (opensource) {
    data.opensource = opensource;
  }

  const existingContracts = await contractsGet({ project, name: contractName });
  for (const existingContract of existingContracts) {
    if (existingContract.info.bytecode === bytecode) {
      data.id = existingContract.id
    }
  }

  await contractUpsert(data)
  uploadSpinner.stop()
}

export default uploadContractInfo;