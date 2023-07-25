const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    password: {
        type : Number,
        required: true
    },
    styles : [{ type: String}],
    who : [{ type: String}],
    plans_id : [{ type: Schema.Types.ObjectId, ref: 'Plan' }],
});

module.exports = mongoose.model('User', UserSchema);