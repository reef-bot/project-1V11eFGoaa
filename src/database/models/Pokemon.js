const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  // Pokemon schema fields
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;