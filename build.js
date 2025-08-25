const fs = require('fs');
const path = require('path');

// Directories to copy
const dirsToCopy = [
    'pages',
    'images'
];

// Files to copy
const filesToCopy = [
    'package.json',
    'vercel.json',
    'CNAME',
    'LICENSE'
];

// Function to copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Function to copy file
function copyFile(src, dest) {
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`Copied: ${src} -> ${dest}`);
    } else {
        console.log(`Warning: Source file not found: ${src}`);
    }
}

// Main build process
console.log('🚀 Starting build process...');

// Clean public directory
if (fs.existsSync('public')) {
    fs.rmSync('public', { recursive: true });
    console.log('🧹 Cleaned public directory');
}

// Create public directory
fs.mkdirSync('public', { recursive: true });
console.log('📁 Created public directory');

// Copy directories
for (const dir of dirsToCopy) {
    if (fs.existsSync(dir)) {
        copyDir(dir, `public/${dir}`);
        console.log(`📁 Copied directory: ${dir}`);
    } else {
        console.log(`Warning: Directory not found: ${dir}`);
    }
}

// Copy individual files
for (const file of filesToCopy) {
    if (fs.existsSync(file)) {
        copyFile(file, `public/${file}`);
    }
}

// Create a root index.html that redirects to the home page
const rootIndexContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jordan Tyler - Digital Marketing Specialist</title>
    <meta name="description" content="Jordan Tyler - Digital Marketing Specialist. Explore my recent works and connect with me to discuss exciting projects.">
    <meta http-equiv="refresh" content="0; url=pages/home-page/index.html">
    <link rel="icon" type="image/svg+xml" href="pages/home-page/favicon.svg">
</head>
<body>
    <p>Redirecting to <a href="pages/home-page/index.html">home page</a>...</p>
</body>
</html>`;

fs.writeFileSync('public/index.html', rootIndexContent);
console.log('📄 Created root index.html with redirect');

console.log('✅ Build completed successfully!');
console.log('📁 Your site is now in the public/ directory');
console.log('🌐 Deploy the public/ directory to your hosting service');
