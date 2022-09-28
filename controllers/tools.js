const router = require('../routes/tools');
const utilities = require('../utilities/utility');
const db = require('../models');
const { tool_catergory } = require('../models');
const Tool = db.tool;
const Tool_catergory = db.tool_catergory;


getAll = async (req, res) =>{
    const tool = await Tool.findAll();
    res.status(200).json(tool);
}
//this code gets all Description from SQL--->
getByDesc = async (req, res) => {
    const desc = req.params.value;
    try{
        const tool = await Tool.findAll(
                {where: {description: description},
                include:[{
                    model: tool_catergory,
                    required: true

                }]});
                if(tool.length==0){
                    throw new Error('Error not able to to find with descritption' + desc);

                }
                res.status(200).json(tool);

    }
    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}
//this code gets all ID's from SQL--->
getById = async(req, res)=> {
    const id = req.params.id;
    try{
        const tool = await Tool.findByPk(id,
            {include: [{model: tool_catergory, required: true}]}
            );
        if(tool==null || tool.length == 0){
            throw new Error('Error Unable to find Tool with id ' + id);
        }
        res.status(200).json(tool);
    }
    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
    
}
//This creates a new SQL
ObjectCreate = async(req, res) => {
    const tool ={
        description: req.body.description,
        hire_price: req.body.hire_price,
        Tool_catergory: req.body.tool_catergoryID
    };
    
    try{
        if(tool.description==null || tool.hire_price==null || tool.tool_catergoryID==null){
            throw new Error("Essential fields missing");

        }
        await Tool.create(tool);
        res.status(200).json(tool);
    }
    catch(error){
        utilities.formatErrorResponse(res, 400, error.message);

    }
}
ObjectDelete= async(req, res) => {
    const id = req.body.id;
    try{
        const deleted = await Tool.destroy({where: { id: id}});
        if (deleted==0){
            throw new Error("ID not found");
        }   
        res.status(200).send("Tool deleted");

    }
    catch(error){
        utilities.formatErrorResponse(res,404,error.message);
    }
}
ObjectUpdate = async (req,res) => {
    const id=req.body.id;

    const tool ={
        description: req.body.desc,
        hire_price: req.body.hire_price,
        tool_catergory_ID: req.body.tool_catergoryID
    };
    try{
        if(id==null || tool.description==null || tool.hire_price==null || tool.tool_catergoryID==null){
            throw new Error("Missing Essential Components witnin the field");

        }
        await Tool.update(tool, {
            where: {
                id: id
            }
        })
        res.status(200).json(tool);
    }
    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
    
}
module.exports = {getAll, getByDesc, getById, ObjectCreate, ObjectDelete, ObjectUpdate};

