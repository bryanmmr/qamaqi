
const getRoleHandler = (req, res) =>{
    return res.send(200).json({message: 'Allowed'})
}

module.exports = {
    getRoleHandler,
}