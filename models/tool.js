module.exports = (sequelize, Sequelize) => {
    const Tool = sequelize.define("tool",
    {
        description: {
            type: Sequelize.STRING
        },
        hire_price:{
            type: Sequelize.DOUBLE
        
        },
    },
{
    timestamps: false,
    freezeTableName: true,
    tableName: 'tool'
}
);



return Tool;
};