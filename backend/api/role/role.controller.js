
const getRoleHandler = (req, res) =>{
    return res.send(200).json({message: 'Allowed'})
}

const createAnimalHandler = (req, res) =>{
    if(res.send(200)){
        return res.send(200).json({message: 'Allowed'})
    }
    return res.send(401).json({message: 'Your account is not allowed to create a new entry'})
}

module.exports = {
    getRoleHandler,
    createAnimalHandler
}