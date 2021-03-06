const AppModel = require('../models/AppModels.js');


const addUpdateFormContent = async function (req, res, next) {
    const data = JSON.parse(req.body.data);

    let attachment = '';
    if(req.files.length> 0) {attachment = req.files[0].filename};
  
    const params = {
        operation: data.operation,
        type: data.type,
        title: data.title,
        content: data.content,
        id: data.id,
        image_id: data.image_id,
        link_id: data.link_id,  
        image_name: attachment,
        link: data.link,
        new_image_id: '',
        new_link_id: '',   
        address: data.address,
        email: data.email,     
        mobile: data.mobile,     
    }   
    try {
        const newActivity = new AppModel(params);
        if(params.image_name !== '' && params.image_name !== undefined && params.image_name !== null){
            const result = await newActivity.uploadImage();
            params.new_image_id = result.insertId;
            newActivity.new_image_id = result.insertId;            
        }

        if(params.link !== '' && params.link !== undefined && params.link !== null){
            const result = await newActivity.insertLink();
            params.new_link_id = result.insertId;
            newActivity.new_link_id = result.insertId;            
        }
        
        if (params.operation === 'add') {
            const result = await newActivity.addFormContent();
            if(result.insertId > 0){
                res.send({ result: result, is_successful : true });
            }else{
                res.send({ result: result, is_successful : false });
            }
        } else if(params.operation === 'update'){
            if(newActivity.new_image_id !== ''){ newActivity.image_id = newActivity.new_image_id }
            if(newActivity.new_link_id !== ''){ newActivity.link_id = newActivity.new_link_id }
            let result = [];
            if(params.type === 'contact'){
                result = await newActivity.updateContactForm();
            }else{
                result = await newActivity.updateFormContent();                
            }
            if(result.changedRows > 0){
                res.send({ result: result, is_successful : true });
            }else{
                res.send({ result: result, is_successful : false });
            }
        }
    } catch (error) {
      next(error);
    }
  };
  

const login = async function (req, res, next) {
    const params = {
       username: req.body.username,
       password:req.body.password,
    }
    try {
        const newActivity = new AppModel(params);
        const result = await newActivity.login();
        res.send( result );
    } catch (err) {
        next(err);
    }
}


const getContactList = async function (req, res, next) {
    try {
        const result = await new AppModel({}).getContactList();
        res.send({ resultList: result });
    } catch (err) {
        next(err);
    }
}



const getTabRelatedList = async function (req, res, next) {
    try {
        // console.log(req.body)
        const result = await new AppModel({type: req.body.type}).getTabRelatedList();
        console.log(result)
        res.send({ resultList: result });
    } catch (err) {
        next(err);
    }
}

const changeState = async function (req, res, next) {
    let params = {
        type: req.body.type,
        id : req.body.id,
        is_active : req.body.is_active == 1 ? 0 :  req.body.is_active == 0 ? 1 :'',
    }

    try {
        const activity = new AppModel(params);        
        await activity.changeState();

        let result =[];
        if(params.type === 'contact'){
            result = await activity.getContactList();
        }else{
            result = await activity.getTabRelatedList();
        }
        
        res.send({ resultList: result });
    } catch (err) {
        next(err);
    }
}



module.exports = {    
    addUpdateFormContent: addUpdateFormContent,
    getTabRelatedList: getTabRelatedList,
    getContactList:getContactList,
    login: login,
    changeState: changeState,
};