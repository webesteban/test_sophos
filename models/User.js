
//define Model User
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        id: {type: DataTypes.SMALLINT, primaryKey: true},
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        user: DataTypes.STRING,
        is_active: DataTypes.BOOLEAN,
    },
    {
        timestamps: false
    });

};