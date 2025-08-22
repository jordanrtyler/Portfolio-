const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy all necessary files to public directory
const filesToCopy = [
  'index.html',
  'script.js',
  'styles.css',
  'README.md',
  'LICENSE',
  'favicon.svg',
  'favicon.html'
];

const dirsToCopy = [
  'styles',
  'sections',
  'case-studies',
  'images',
  'galleries'
];

console.log('🚀 Building for Vercel deployment...');

// Copy individual files
filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, `public/${file}`);
    console.log(`✅ Copied: ${file}`);
  }
});

// Copy directories
dirsToCopy.forEach(dir => {
  if (fs.existsSync(dir)) {
    copyDir(dir, `public/${dir}`);
    console.log(`✅ Copied directory: ${dir}`);
  }
});

console.log('🎉 Build completed! Files are ready in the public directory.');
console.log('📁 Public directory contents:');
console.log(fs.readdirSync('public', { recursive: true }));
