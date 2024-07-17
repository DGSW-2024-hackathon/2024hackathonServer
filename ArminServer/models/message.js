const Sequelize = require('sequelize');

class Message extends Sequelize.Model {
    static initiate(sequelize) {
        Message.init({
            value: {
                type: Sequelize.STRING(150),
            },
            answer:{
                type:Sequelize.STRING(150)
            }
        }, {
            sequelize,
            timestamps: false,
            paranoid: false,
            modelName: 'message',
            tableName: 'message',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }  
};

module.exports = Message;