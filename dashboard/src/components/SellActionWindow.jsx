import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";
import { useContext } from "react";
import { useEffect } from "react";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContext=useContext(GeneralContext);
  const [maxqty,setMaxqty]=useState(0)

  useEffect(()=>{
    axios.get(`https://zerodha-backends.onrender.com/stockDetails/${uid}`)
    .then((res)=>{
        setStockQuantity(res.data)
        setMaxqty(res.data)
    })
    
  },[])
  
  const handleSellClick = () => {
    axios.post(`https://zerodha-backends.onrender.com/stockSell/`, {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });
    generalContext.closeSellWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              max={maxqty}
              
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        {maxqty>0 ? <span>you can sell maximum {maxqty} QTY </span> : <span>you cant't sell bcz not available</span>}
        {/* <span>you can sell maximum {maxqty} QTY</span> */}
        <div>     { /* onClick={handleBuyClick}*/ }
          {maxqty>0 && <Link className="btn btn-blue" onClick={handleSellClick} >
            Sell
          </Link>}
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
