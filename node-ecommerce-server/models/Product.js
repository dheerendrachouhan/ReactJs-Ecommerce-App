const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required']
    },
    description: {
        type: String,
        maxlength: 300
    },
    productCode: {
        type: String
    },
    images: {
        type: Array
    },
    status: {
        type: Number,
        default: 1  // 0:Out of stock, 1:New 2:Available 3:Upcoming
    },
    created: {
        type: Number,
        default: Date.now()
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    displayOrder: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('product', productSchema);
