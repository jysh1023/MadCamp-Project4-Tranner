const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    name: {
        type : String,
        required: true
    },
    password: {
        type : String,
        required: true
    },
    styles : [{ type: String}],
    who : [{ type: String}],
    plans_id : [{ type: Schema.Types.ObjectId, ref: 'Plan' }],
});

module.exports = mongoose.models.User ||mongoose.model('User', UserSchema);