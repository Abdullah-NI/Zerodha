const {model}=require("mongoose");

const {HoldingsSchema}=require("../schemas/HoldingsSchema.js");

const HoldingsMOdel=new model("holding",HoldingsSchema);

module.exports={HoldingsMOdel};