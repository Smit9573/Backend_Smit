const { productModal } = require('../model/index')

const creatProduct = async(req, res) => {
    const body = req.body
    console.log(body);
    try {
        const newAddProduct = await productModal.create({
            name: body.name,
            price: body.price
        })
        res.json({message:'New Product Created Sucessfully!', data:newAddProduct}) 
    } catch (error) {
        return res.status(400).send(error)
    }
}

const getProduct = async (req, res) => {
    const allProductData = await productModal.find({})
    res.json({message:'All Product Get Sucessfully!', data:allProductData}) 
}

const updateProduct = async (req, res) => {
    const body = req.body
    const updatedProduct = await productModal.findByIdAndUpdate(body.id, { $set: {price : body.price} }, { new: true })
    res.json({message:'Update Product Sucessfully!', data:updatedProduct}) 
}

const deleteProduct = async (req, res) => {
    const body = req.body
    const deletedProduct = await productModal.findByIdAndDelete(body.id)
    res.json({ message: 'Delete Product Sucessfully!', data: deletedProduct})
}

module.exports = {
    creatProduct,
    getProduct,
    updateProduct,
    deleteProduct
}

