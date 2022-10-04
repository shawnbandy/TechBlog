const { User } = require('../models')

const userData = [
    {
        username: 'admin',
        password: 'root',
    },
    {
        username: 'Shawn',
        password: 'root',
    },
];

const generateUser = () => User.bulkCreate(userData);

module.exports = generateUser;