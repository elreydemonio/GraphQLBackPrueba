import { Schema, model}  from "mongoose";

const userSchema = new Schema({
    ID: String,
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    age: Number
});

export default model('User', userSchema);