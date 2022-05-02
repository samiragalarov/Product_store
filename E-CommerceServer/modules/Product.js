const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        text: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false,
        },
        price:{
            type: String

        },
        categories: {
            type: String,
            required: false,
        },
        owner: {
            type: String,
            required: false
        },
        ownerid: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", PostSchema);