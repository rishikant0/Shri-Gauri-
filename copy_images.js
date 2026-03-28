const fs = require('fs');
const path = require('path');

const files = [
  ['media__1774677349030.jpg', 'v1.jpg'],
  ['media__1774681313460.jpg', 'v2.jpg'],
  ['media__1774681315993.jpg', 'v3.jpg'],
  ['media__1774681318440.jpg', 'v4.jpg'],
  ['media__1774681321045.jpg', 'v5.jpg'],
];

const sourceDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\381e7bdf-7634-4fd7-8448-5577c1791aa3';
const targetDir = 'e:\\shriGauri\\client\\public\\images';

files.forEach(([src, dest]) => {
  const srcPath = path.join(sourceDir, src);
  const destPath = path.join(targetDir, dest);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} to ${dest}`);
  } catch (err) {
    console.error(`Error copying ${src}: ${err.message}`);
  }
});
