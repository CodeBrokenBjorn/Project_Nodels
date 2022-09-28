const router = require('../routes/tool_catergory');
const utilities = require('../utilities/utility');
const db = require('../models');
const Tool_catergory = db.tool_catergory;

getAll = async (req, res) => {
    const tool_catergory = await Tool_catergory.findAll({
    order:["id"],
    include: [{
        model: Tool_catergory,
        require: true
    }]
});
    res.status(200).json(tool_catergory);

}
getByID = async(req, res) => {
    const ID =req.params.ID;
    try{
        const tool_catergory = await Tool_catergory.findAll(ID);

        if(tool_catergory==null || tool_catergory.length==0){
            throw new Error("Unable to detect the tool with that specific ID you provided" + id);
        }
        res.status(200).json(tool_catergory);

    }
    catch(error){
        utilities.formatErrorResponse(res,400, error.message);
    }

}
module.exports = {getAll, getById}
