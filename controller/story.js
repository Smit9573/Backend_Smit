const { storyModel,personModel } = require('../model/index')


const creatStory = async(req, res) => {
    const body = req.body
    console.log(body);
    try {
        const newAddStory = await storyModel.create({
            author: body.author,
            title: body.title
        })
        const result = await personModel.findByIdAndUpdate(newAddStory.author, {$push: { stories:newAddStory._id }}) 
        res.json({message:'New Story Created Sucessfully!', data:newAddStory}) 
    } catch (error) {
        return res.status(400).send(error)
    }
}

const getStory = async (req, res) => {
    const allStoryData = await storyModel.find({}).populate('author')
    res.json({message:'All Story Get Sucessfully!', data:allStoryData}) 
}

const updateStory = async (req, res) => {
    const body = req.body
    const updatedStory = await storyModel.findByIdAndUpdate(body.id, { $set: {title : body.title} }, { new: true })
    res.json({message:'Update Story Sucessfully!', data:updatedStory}) 
}

const deleteStory = async (req, res) => {
    const body = req.body
    const deletedStory = await storyModel.findByIdAndDelete(body.id)
    res.json({ message: 'Delete Story Sucessfully!', data: deletedStory})
}

module.exports = {
    creatStory,
    getStory,
    updateStory,
    deleteStory
}

