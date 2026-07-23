import mongoose from "mongoose";
//step1 : create a shema for Note model
//step2 : create a model for Note using the schema
const noteSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
},
{timestamps: true},
);

const Note = mongoose.model("Note", noteSchema);
export default Note;