const catchAsync = require('./../utils/catchAsync');
const Product = require('./../models/Product');
const ApiFeatures = require('./../utils/apiFeatures');
var mongoose = require('mongoose');
const Category = require('../models/Category');

exports.createProduct = catchAsync(async (req, res, next) => {
  const doc = await Product.create(req.body);

  res.status(201).json({
    status: 'ok',
    data: {
      product: doc,
    },
  });
});

exports.getProducts = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Product.find(), req.query)
    .filter()
    .sort()
    .paginate()
    .limitFields()

  const docs = await features.query;
  
  const features2 = new ApiFeatures(Product.find(), req.query)
    .filter();
  const docs2 = await features2.query;
  const totalProducts = docs2.length
  // const productCountRes = await Product.aggregate([{
  //   $count : "count"
  // }])

  console.log('docs22---',docs2.length);

  res.json({
    status: 'ok',
    results: docs.length,
    total: totalProducts, //productCountRes[0].count,
    data: { products: docs },
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findOne({ _id: req.params.id });

  res.status(200).json({
    status: 'ok',
    data: {
      product,
    },
  });
});

exports.getCatProduct = catchAsync(async (req, res, next) => {
  //let product = await Product.find().populate( { path: 'category', $match: {_id: "62d70b7e5b5db2366f6ec8db"}})
   
  console.log('cat url -',req.params.id)
  let docs = await Product.aggregate([
      {
        $match: {"category": mongoose.Types.ObjectId(req.params.id)}
      },
      // {
      //   $lookup: {
      //       from: "categories",
      //       localField: "category",
      //       foreignField: "_id",
      //       as: "product_cat"
      //   }
      // },
  ])   

  //await Category.populate(product, {path: "category"})
               
  res.status(200).json({
    status: 'ok',
    results: docs.length,
    data: { products: docs },
  });
});

exports.getSearchProducts =  catchAsync(async (req, res, next) => {

  const searchText = req.params.query
  console.log(`product search -- $${searchText}`)
  let docs = await Product.aggregate([
    {
      $search: {
        index: 'product',
        "text": {
          query: searchText,
          path: ["name", "description"],
          fuzzy: {},
         },
        }
    
    }
  ])

  //let docs = await Product.find()

  res.status(200).json({
    status: 'ok',
    results: docs.length,
    data: { products: docs },
  });

});
