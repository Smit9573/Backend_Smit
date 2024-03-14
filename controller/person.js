const { personModel } = require('../model/index')

const creatPerson = async (req, res) => {
    const body = req.body
    console.log(body);
    try {
        const newAddPerson = await personModel.create({
            name: body.name,
            age: body.age
        })
        res.json({ message: 'New Person Created Sucessfully!', data: newAddPerson })
    } catch (error) {
        return res.status(400).send(error)
    }
}

const getPerson = async (req, res) => {
    const allPersonData = await personModel.find({}).populate('stories')
    res.json({ message: 'All Person Get Sucessfully!', data: allPersonData })
}

const updatePerson = async (req, res) => {
    const body = req.body
    const updatedPerson = await personModel.findByIdAndUpdate(body.id, { $set: { age: body.age } }, { new: true })
    res.json({ message: 'Update Person Sucessfully!', data: updatedPerson })
}

const deletePerson = async (req, res) => {
    const body = req.body
    const deletedPerson = await personModel.findByIdAndDelete(body.id)
    res.json({ message: 'Delete Person Sucessfully!', data: deletedPerson })
}

module.exports = {
    creatPerson,
    getPerson,
    updatePerson,
    deletePerson
}

