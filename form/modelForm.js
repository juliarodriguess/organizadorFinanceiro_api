const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema;


const FormSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId, auto: true
    },
    name: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    expenseType: {
        type: String,
        required: false,
    },
    cost: {
        type: Number,
        required: false,
    }
});

let form = restful.model('Form', FormSchema);

module.exports = form;