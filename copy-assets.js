const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName),
                        path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const source = path.resolve(__dirname, '..', 'assets');
const destination = path.resolve(__dirname, 'public', 'assets');

console.log(`Copying from ${source} to ${destination}...`);

try {
  copyRecursiveSync(source, destination);
  console.log('Assets copied successfully!');
} catch (err) {
  console.error('Error copying assets:', err);
}
