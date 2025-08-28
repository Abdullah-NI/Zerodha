require("dotenv").config();

const express=require("express");
const app =express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser")
const cors=require("cors")
const { HoldingsMOdel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const {OrdersModel}=require("./model/OrdersModel");
const { holdings } = require("../dashboard/src/data/data");
const PORT =process.env.PORT || 3002;
const URL =process.env.MONGO_URL;
const cookieParser=require("cookie-parser");
const authRoute=require("./Routes/AuthRoute");

// app.use(cors());
// app.use(cors({
//   origin: "http://localhost:5174",   // frontend URL
//   credentials: true                  // allow cookies/headers
// }));
app.use(
  cors({
    origin: ["http://localhost:5174","http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.json());



async function main() {
    await mongoose.connect(URL)
}
main()
.then(()=>{
    console.log("connected to db")
})
.catch(err=>{ 
    console.log(err)
}) 
//ya niche listen me likha

app.use("/",authRoute);
app.get("/",(req,res)=>{
    res.send("working")
})
// app.get("/addHoldings",(req,res)=>{
//     let tempHoldings=[
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ]

// app.get("/addpositions",(req,res)=>{
//     let Positions=[
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ]
//     Positions.forEach((item)=>{
//         let newPositions=new PositionsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//         })
        
//         newPositions.save();
//         res.send("add");
//     })
// })

app.get("/allHoldings",async(req,res)=>{ 
    let allHoldings= await HoldingsMOdel.find({})
    res.json(allHoldings);
})
app.get("/allPositions",async(req,res)=>{
    let allPositions= await PositionsModel.find({})
    res.json(allPositions);
})


app.post("/newOrder",async(req,res)=>{
    let newOrder=new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode:req.body.mode,
    });
    await newOrder.save();
    // console.log(newOrder); 

    //save it in holdings
    let newholdings=new HoldingsMOdel({
        name: newOrder.name,
        qty: newOrder.qty,
        avg: newOrder.price,
        price: newOrder.price+5,
        net: `+${((((newOrder.price+5)-(newOrder.price-5))/(newOrder.price-25))*100).toFixed(2)}%`,
        day: `+${((((newOrder.price+5)-(newOrder.price-5))/(newOrder.price-5))*100).toFixed(2)}%`,
    })
    await newholdings.save();
    // console.log(newholdings) 
    res.send("order saved")
})

app.get("/allOrders",async(req,res)=>{
    let allOrders =await OrdersModel.find({})
    res.json(allOrders)
})

app.get("/stockDetails/:name",async(req,res)=>{
    // console.log("hdhdhhd")
    const {name}=req.params
    // console.log(name)
    let stocks=await HoldingsMOdel.find({name:name})
    // console.log(stocks)
    let count=0;
    for (let stock of stocks){
        count+=stock.qty;
    }
    res.json(count)
})

app.post("/stockSell",async(req,res)=>{
    // const {name}=req.params
    let sellQty=req.body.qty
    let stocks=await HoldingsMOdel.find({name:req.body.name})
    for(let stock of stocks){
        if(sellQty>=stock.qty){
            let deleteStock=await HoldingsMOdel.findOneAndDelete({name:req.body.name})
            sellQty=sellQty-deleteStock.qty
        }
        else{
            let findstock=await HoldingsMOdel.findOne({name:req.body.name})
            console.log(findstock)
            let updateStock=await HoldingsMOdel.findOneAndUpdate({name:req.body.name},{qty:findstock.qty-sellQty},{new:true})
            console.log(updateStock)
            break;

        }

    }

    // let stock=await HoldingsMOdel.findOneAndDelete({name:req.body.name})
    if(stocks){
        let newOrder=new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode:req.body.mode,
    });
    await newOrder.save();
    }
    res.json(stock)
})

// app.get("/delete",async(req,res)=>{
//     let orders=await OrdersModel.deleteMany({name:"QUICKHEAL" , price:0})
//     console.log(orders)
//     res.send("dlete")
// })
app.listen(3002,()=>{
    console.log("app started");
    // mongoose.connect(URL);
    // console.log("db connected")
})


