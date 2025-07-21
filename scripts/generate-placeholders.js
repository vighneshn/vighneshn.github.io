/**
 * Script to generate placeholder images for project gallery
 * 
 * To run this script:
 * 1. Install dependencies: npm install sharp
 * 2. Run: node scripts/generate-placeholders.js
 */

const fs = require('fs');
const path = require('path');

const projectImages = [
  // Scalable Surface Ion Trap Array
  'ion-trap-array-1.jpg',
  'ion-trap-array-2.jpg',
  'ion-trap-array-3.jpg',
  
  // Quantum Error Correction
  'error-correction-1.jpg',
  'error-correction-2.jpg',
  'error-correction-3.jpg',
  
  // Hybrid Quantum-Classical Algorithms
  'hybrid-algorithms-1.jpg',
  'hybrid-algorithms-2.jpg',
  'hybrid-algorithms-3.jpg',
  
  // Cryogenic Ion Trap
  'cryogenic-trap-1.jpg',
  'cryogenic-trap-2.jpg',
  'cryogenic-trap-3.jpg'
];

console.log('This script will help you set up placeholder images for projects.');
console.log('Since image processing libraries require installation, here are the steps:');
console.log('');
console.log('1. For each project, you need these images in public/images/:');
projectImages.forEach(img => console.log(`   - ${img}`));
console.log('');
console.log('2. Options for creating these:');
console.log('   a. Copy existing ion-trap-chip.jpg to each filename');
console.log('   b. Create placeholders with an online service');
console.log('   c. Use actual project images if available');
console.log('');
console.log('Example command to copy existing image:');
console.log('');
console.log('mkdir -p public/images');
projectImages.forEach(img => {
  console.log(`cp public/images/ion-trap-chip.jpg public/images/${img}`);
}); 