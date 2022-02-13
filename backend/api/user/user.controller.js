const {
    getAllUsers,
    getUser,
    createUser
} = require('./user.service')

async function getAllUsersHandler(req, res) {
    try{
        const users = await getAllUsers();
        if(users.length === 0) {
            return res.status(404).json({message: `not found users`})
        }
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

async function getUserHandler(req, res) {
    const { id } = req.params;
    try {
        const user = await getUser(id)
        if(user) {
            return res.status(200).json(user)
        }
        return res.status(404).json({message: `not user found with id=${id}`})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

async function createUserHandler(req, res) {
    const { email } = req.body
    try{
        if(!email){
            return res.status(400).json({response: `not email provided`})
        }
        const user = await createUser(req.body)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllUsersHandler,
    getUserHandler,
    createUserHandler,
}