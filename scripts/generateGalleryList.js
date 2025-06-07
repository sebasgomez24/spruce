const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');
const outputFile = path.join(__dirname, '../public/images/gallery/galleryImages.json');

fs.readdir(galleryDir, (err, files) => {
  if (err) {
    console.error('Error reading gallery directory:', err);
    process.exit(1);
  }
  // Filter for image files (jpg, jpeg, png, webp, gif)
  const imageFiles = files.filter(file => /\.(jpe?g|png|webp|gif)$/i.test(file));
  fs.writeFileSync(outputFile, JSON.stringify(imageFiles, null, 2));
  console.log(`Found ${imageFiles.length} images. Wrote to galleryImages.json.`);
}); 