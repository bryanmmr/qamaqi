const User = require('./user.model');

async function getAllUsers(){
    try {
        const users = await User.find();
        return users
    } catch(error) {
        throw error;
    }
}

async function getUser(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch(error) {
        throw error;
    }
}

async function createUser(user) {
    try {
        const newUser = new User(user);
        const savedUser = await newUser.save();
        return savedUser
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
}