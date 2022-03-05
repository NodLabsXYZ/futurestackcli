import fs from 'fs';
import path from 'path';

const getDescription = async () => {
  console.log("URL", import.meta.url)
  const appDir = path.dirname(import.meta.url);
  console.log("APPDIR: ", appDir);
  
  try {
    return fs.readFileSync('', 'utf8')
  } catch (err) {
    return null;
  }
}

export default getDescription;