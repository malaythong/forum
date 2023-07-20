const { model, Schema} = require('mongoose');

const messageSchema = new Schema({
    text: String,
    createAt: String,
    createBy: string
})

module.exports = model('Message', messageSchema)