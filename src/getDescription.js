import fs from 'fs';
import path from 'path';

const getDescription = async () => {
  const appDir = path.dirname(import.meta.url);
  const pathParts = appDir.split(path.sep);
  const index = pathParts.indexOf('node_modules');
  const rootDir = pathParts.slice(0, index).join(path.sep);
  console.log("FULL", path.join(rootDir, 'contract.md'))
  const decriptionPath = path.join(rootDir, 'contract.md').replace('file:', '');
  console.log("path", decriptionPath)
  
  try {
    console.log(fs.readFileSync(decriptionPath, 'utf8'))
    return fs.readFileSync(decriptionPath, 'utf8')
  } catch (err) {
    console.log("ERROR", err)
    return null;
  }
}

export default getDescription;