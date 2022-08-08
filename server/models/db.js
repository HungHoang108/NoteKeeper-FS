import mongoose from "mongoose";

const noteSchema = new mongoose.Schema ({
    email: String,
    title: String,
    content: String
})

const Tester = mongoose.model("Tester", noteSchema)

export default Tester;