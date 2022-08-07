import mongoose from "mongoose";

const noteSchema = new mongoose.Schema ({
    // title: String
    user: String,
    note: [{
        title: String,
        content: String
    }]
})

const Tester = mongoose.model("Tester", noteSchema)

export default Tester;