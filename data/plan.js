const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    userId : { type: Schema.Types.ObjectId, ref: 'User' },
    comment : String
});

const DaySchema = new Schema({
    userId : { type: Schema.Types.ObjectId, ref: 'User' },
    details : [DetailSchema],
    day : Number
});

const DetailSchema = new Schema({
    title : String,
    content: String,
    API : String
});

const PlanSchema = new Schema({
    userId : [{
        type: Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    }],
    styles : [String],
    who : [String],
    day : Number,
    days : [DaySchema],
    comments : [CommentsSchema]
});

module.exports = mongoose.model('Plan', PlanSchema);const mongoose = require('mongoose');