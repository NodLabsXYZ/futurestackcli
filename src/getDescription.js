import fs from 'fs';
import path from 'path';

const getDescription = async () => {
  const appDir = path.dirname(import.meta.url);
  const pathParts = appDir.split(path.sep);
  const index = pathParts.indexOf('node_modules');
  const rootDir = pathParts.slice(0, index).join(path.sep);
  const decriptionPath = path.join(rootDir, 'contract.md').replace('file:', '');
  
  try {
    return fs.readFileSync(decriptionPath, 'utf8')
  } catch (err) {
    return null;
  }
}

export default getDescription;