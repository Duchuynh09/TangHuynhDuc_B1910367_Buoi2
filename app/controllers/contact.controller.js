const ApiError = require("../api-error");
const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");
// const ContactModel = require("../models/contactModel.js")

exports.findAll = async (req,res,next) => {
    
    try {
        const contactService = new ContactService(MongoDB.client);
        const {name} = req.query;
        if(name){
            const documents = await contactService.findByName(name);
            return res.status(200).json({documents});
        }else {
            const documents = await contactService.find();
            return res.status(200).json({documents});
            
        }
    } catch (error) {
        return next(
            new ApiError(500,"Đã xảy ra lỗi khi truy xuất danh bạ")
        );
        }
};

exports.findOne = async(req,res) => {
    const id = req.params.id;
    try {
        const contactService = new ContactService(MongoDB.client);
        const {name} = req.query;
        if(name){
            const documents = await contactService.findByName(name);
            return res.status(200).json({documents});
        }else {
            
            const documents = await contactService.findById(id);
            return res.status(200).json({documents});
            
        }
    } catch (error) {
        return next(
            new ApiError(500,"Đã xảy ra lỗi khi truy xuất danh bạ")
        );
        }
};

exports.update = async (req,res,next) => {
    if(Object.keys(req.body).length ===0){
        return next(new ApiError(400,"Du lieu khong duoc cap nhat rong"));
    }
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.update(req.params.id,req.body)
        if(!document){
            return next(new ApiError(404,"Contact not found"));
        }
        return res.send({message: "Contact was updated successfully"});
    } catch (error) {
        return next( new ApiError(500,`Loi khi dang cap nhat voi id=${req.params.id}`));
    }
};

exports.delete =async (req,res,next) => {
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.delete(req.params.id)
        if(!document){
            return next(new ApiError(404,"Contact not found"));
        }
        return res.send({message: "Contact was updated successfully"});
    } catch (error) {
        return next( new ApiError(500,`Loi khi dang xoa voi id=${req.params.id}`));
    }
};

exports.deleteAll = async(_req,res,next) => {
    try {
        const contactService = new ContactService(MongoDB.client);
        const deletedCount = await contactService.deleteAll();
        return res.send({message: `${deletedCount}Contact was updated successfully`});
    } catch (error) {
        return next( new ApiError(500,`Loi khi dang xoa`));
    }
};

exports.findAllFavorite = async(_req,res,next) => {
    try {
        const contactService = new ContactService(MongoDB.client);
        const documents = await contactService.findFavorite();
        return res.send(documents);
    } catch (error) {
        return next( new ApiError(500,`Loi khi dang tim kiem yeu thich `));
    }
};

exports.create = async (_req,res,next) =>{
    if(!_req.body?.name){
        return next(new ApiError(400,"Name rỗng"));
    }
    try {
        
        const contactservice = new ContactService(MongoDB.client);
        
        const document = await contactservice.create(_req.body);
       
        return res.send(document);
        
    } catch (error) {
        return next(
            new ApiError(500, "Đã xảy ra lỗi khi tạo liên hệ contact.service")
        );
    }
}

 