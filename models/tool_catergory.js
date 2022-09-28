module.exports = (sequelize, Sequelize) => {
    const Tool_catergory = 
    sequelize.define("tool_catergory",
    {
        description: {
            type: Sequelize.STRING

        }

    },
    {
        timestamps: false,
        freeTableName: true,
        tableName: 'tool_catergory'

    }

    );
    return Tool_catergory;
}