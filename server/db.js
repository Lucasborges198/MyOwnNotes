const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, 'notes.json');

function readData() {
  if (!fs.existsSync(DATA_PATH)) {
    return { notes: [], nextId: 1 };
  }
  return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
}

function writeData(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

// Initialise file on first run
if (!fs.existsSync(DATA_PATH)) {
  writeData({ notes: [], nextId: 1 });
}

module.exports = { readData, writeData };

