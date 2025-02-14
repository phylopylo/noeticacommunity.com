import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of all available art images
const artImages = [
  'angelo-con-dadi-e-tunica-vouet.jpg',
  'angelo-con-la-lancia-della-passione-vouet.jpg',
  'apollo-and-daphne-1625.jpg',
  'bacchanal-of-putti-1626.jpg',
  'battle-of-gideon-against-the-midianites-1626.jpg',
  'cephalus-and-aurora-1625.jpg',
  'circoncisione-di-ges-vouet.jpg',
  'Delivery of the Keys to St. Peter by Perugino.jpg',
  'et-in-arcadia-ego.jpg',
  'midas-washing-at-the-source-of-the-river-pactolus-1624.jpg',
  'rinaldo-and-armida-1626.jpg',
  'rinaldo-and-armida-nicolas-poussin.jpg',
  'Saint Jerome in his Study by Antonello da Messina.jpg',
  'simon-vouet-david-with-the-head-of-goliath-google-art-project.jpg',
  'simon-vouet-sophonisba-receiving-the-poisoned-chalice-wga25358.jpg',
  'sleeping-venus-surprised-by-satyr-1626.jpg',
  'The Ecstasy of Saint Francis painting by the Italian Renaissance artist Giovanni Bellini (c. 1430- 1516 CE). Completed by 1480 CE. (Frick Collection, New York).jpg',
  'The Marriage of the Virgin by Raphael.jpg',
  'the-martyrdom-of-st-stephen-1623.jpg',
  'The painted panel the Flagellation of Christ by the Italian Renaissance artist Piero della Francesca (c. 1420-1492 CE). c. 1455 CE. (National Gallery of Marche, Urbino).jpg',
  'venus-and-adonis.jpg',
  'venus-weeping-over-adonis-1.jpg',
  'victory-of-joshua-over-the-amalekites.jpg',
  'vouet-anges-instruments-de-la-passion-besanc-on.jpg',
  'vouet-judith.jpg'
];

// Function to get a random image
function getRandomImage() {
  return artImages[Math.floor(Math.random() * artImages.length)];
}

// Function to update thumbnail in a markdown file
function updateThumbnail(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the Thumbnail line with a random image
    const newThumbnail = getRandomImage();
    const updatedContent = content.replace(
      /Thumbnail: .*\.jpg/,
      `Thumbnail: ${newThumbnail}`
    );
    
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated ${path.basename(filePath)} with thumbnail: ${newThumbnail}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
}

// Get all markdown files in the literary directory
const literaryDir = path.join(__dirname, 'public/content/literary');
const files = fs.readdirSync(literaryDir).filter(file => file.endsWith('.md'));

console.log(`Found ${files.length} literary works to update...`);

// Update each file
files.forEach(file => {
  const filePath = path.join(literaryDir, file);
  updateThumbnail(filePath);
});

console.log('Thumbnail assignment complete!'); 