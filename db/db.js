const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://Smitgoti9573:Smitgoti%40001@cluster0.fhmagqa.mongodb.net/CRUD')
    .then(console.log('Mongoose Sucsessfullly Connected!')).catch((error) => {
        console.log(`Connection Error ${error}`)
    }
);
