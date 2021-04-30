const mongodb = require('mongoose')

const userSchema = mongodb.Schema({
    _id: mongodb.Schema.Types.ObjectId,
    firstName: { type: String, required: false, default: '' },
    lastName:  { type: String, required: false, default: ''},
    email:     { type: String, required: true, unique: true},
    userHash:  { type: String, required: true},
    created:   { type: Date, default: Date.now},
    modified:  { type: Date, default: Date.now}
})

module.exports = mongodb.model('User', userSchema) 