
const mongoose = require('mongoose');

const portfolioItemSchema = new mongoose.Schema({
    // name in English for localisation
    nameEng: {
        type: String,
        required: true
    },
    // name in Kazakh for localisation
    nameKaz: {
        type: String,
        required: true
    },
    // description in English for localisation
    descriptionEng: {
        type: String,
        required: true
    },
    // description in Kazakh for localisation
    descriptionKaz: {
        type: String,
        required: true
    },
    images: {
        type: [String], // an array of multiple images (URLs)
        required: true
    },
    deletedAt: {
        type: Date,
        default: null
    }

}, { timestamps: true });


module.exports = mongoose.model('PortfolioItem', portfolioItemSchema);
