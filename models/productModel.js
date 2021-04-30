const Product = require('./productSchema')


exports.getProduct = (req, res) => {
    Product.find({}, (err, data) => {
      if(err) {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: err.message || 'Something went wrong when fetching the products'
        })
      }
      res.status(200).json(data);
    })
  }
 
exports.editProduct =(req,res) =>{
    Product.updateOne({_id:req.params.id},{
      ...req.body,
      modified: Date.now()
    })
    .then(()=>{
      return res.status(200).json({
        statusCode:200,
        status: true,
        message:'update successfully'
      })
    })
    .catch(()=>{
      return res.status(500).json({
        statusCode:500,
        status:false,
        message:'update failed'

      })
    })
  } 
exports.deleteProduct =(req,res) =>{
    Product.deleteOne({_id:sereq.params.id})
    .then(()=>{
      return res.status(200).json({
        statusCode:200,
        status: true,
        message:'delete successfully'
    })
  })
    .catch(()=>{
      return res.status(500).json({
        statusCode:500,
        status: false,
        message:'failed delete'
      })
    })
  }
  
exports.createProduct = (req, res) => {

  const product = new Product({
    name: req.body.name,
    short: req.body.short,
    desc: req.body.desc,
    price: req.body.price,
    image: req.body.image    
  })

  product.save()
    .then(() => {
      res.status(201).json({
        statusCode: 201,
        satus: true,
        message: 'product created'
      })
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        satus: false,
        message: 'Failed to create product'
      })
    })
}