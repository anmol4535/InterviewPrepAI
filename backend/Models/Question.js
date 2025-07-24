const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    session: {type:mongoose.Schema.Types.ObjectId, ref:"Session"},
    question:String,
    answer: String, // ✅ Make sure this is added
    note: String,
    isPinned : {type: Boolean , default: false},

} , {timestamps: true});

module.exports = mongoose.model("Question" , questionSchema);