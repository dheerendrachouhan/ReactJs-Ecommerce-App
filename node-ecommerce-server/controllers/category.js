const catchAsync = require('./../utils/catchAsync');
const Category = require('./../models/Category');

exports.createCategory = catchAsync(async (req, res, next) => {
    const doc = await Category.create(req.body);
  
    res.status(201).json({
      status: 'ok',
      data: {
        category: doc,
      },
    });
  });


  exports.getCategories = catchAsync(async (req, res, next) => {
   
    // const docs = await Category.find({status:1}).sort({displayOrder: 
    // 'asc'});

    const docs = await Category.aggregate([
      {
        $match: {status:1}
      },
      {
        $sort: {displayOrder: 1}
      },
      {
        $lookup: {
          from: 'products',
          localField: '_id',
          foreignField: 'category',
          as: 'productCount'
        },
       
      },

      {
        $project:{
                _id:1,
                name:"$name",
                image:1,
                numOfProducts:{$size:"$productCount"},
            }
     }
      
      

    ])
  
    res.json({
      status: 'ok',
      results: docs.length,
      data: { categories: docs },
    });
  });

  exports.getCategory = catchAsync(async (req, res, next) => {
    const category = await Category.findOne({ _id: req.params.id });
  
    res.status(200).json({
      status: 'ok',
      data: {
        category,
      },
    });
  });