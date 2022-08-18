const mongoose= require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category name is required"]
    },
    image: {
        type: String,
        default: "default-category.jpg"
    },
    displayOrder: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 1
    },
    softDelete: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model('category', categorySchema);
