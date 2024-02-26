const mongoose=require('mongoose')
const {Schema}=mongoose;
const blogschema=new Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
    
    
});
module.exports=mongoose.model('Blogcontent',blogschema)