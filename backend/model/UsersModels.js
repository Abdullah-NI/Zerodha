const {model}=require("mongoose");

const {userSchema}=require("../schemas/UsersSchema.js");

const UsersModel=new model("User",userSchema);

module.exports={UsersModel};