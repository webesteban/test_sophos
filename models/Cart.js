
//define Model Cart
module.exports = function(sequelize, DataTypes) {

    return sequelize.define('Cart', {
        id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
        user_id: DataTypes.SMALLINT,
        product_id: DataTypes.SMALLINT,
        count: DataTypes.INTEGER,
        price: DataTypes.DOUBLE,
        created_at: {
            type: 'TIMESTAMP',
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),

        },
        updated_at: {
            type: 'TIMESTAMP',
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),

        }
    },{
        createdAt   : 'created_at',
        updatedAt   : 'updated_at',
        timestamps  : false,
        tableName: 'cart_shop'
    })

};