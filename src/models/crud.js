/**
 *  Model crud
 * @param {*} sequelize
 * @param {*} DataTypes
 */


const crud = (sequelize, DataTypes) => {
    return sequelize.define(
        "crud", // name of Model
        {
            // fields
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            demo_text: { type: DataTypes.STRING, allowNull: true },
        }, {
            timestamps: true
        }
    );
};

module.exports = crud;
