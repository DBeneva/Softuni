const User = require('../models/User');

async function createUser(username, email, hashedPassword) {
    const user = await new User({ username, email, hashedPassword }).save();
    return user;
}

async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i');
    const user = await User.findOne({ username: { $regex: pattern } });
    return user;
}

async function getUserByEmail(email) {
    const pattern = new RegExp(`^${email}$`, 'i');
    const user = await User.findOne({ email: { $regex: pattern } });
    return user;
}

module.exports = {
    createUser,
    getUserByUsername,
    getUserByEmail
};