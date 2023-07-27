const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    userId : { type: Schema.Types.ObjectId, ref: 'User' },
    comment : String
});

const DetailSchema = new Schema({
    title : String,
    content: String,
    API : String
});

const DaySchema = new Schema({
    userId : { type: Schema.Types.ObjectId, ref: 'User' },
    details : [DetailSchema],
    day : Number
});


const PlanSchema = new Schema({
    userId : [{
        type: Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    }],
    styles : [String],
    who : [String],
    days : [DaySchema],
    startday : Date,
    enddate : Date,
    city : String,
    comments : [CommentsSchema]
});

module.exports = mongoose.models.Plan || mongoose.model('Plan', PlanSchema);