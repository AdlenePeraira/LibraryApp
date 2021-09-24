const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.aiffa.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const schema = mongoose.Schema;


const AuthorSchema = new schema({
    name: String,
    description: String,
    image: String,
});

//Model creation
const authorData = mongoose.model('authorData', AuthorSchema);

//Export method
module.exports = authorData;