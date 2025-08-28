import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Orders = () => {
  const [allOrders ,setAllOrders]=useState([])

  useEffect(()=>{
    axios.get("https://zerodha-backends.onrender.com/allOrders")
    .then((res)=>{
      setAllOrders(res.data);
    })
  },[])
  return (
    <div className="orders order-table">

      <table>
          <tr>
            
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price/Qty</th>
            <th>Mode</th>
            
          </tr>

          {allOrders.map((stock,index)=>{
                        const curValue=stock.price*stock.qty;
                        const isProfit=curValue-stock.avg*stock.qty>=0.0;
                        const profitClass=stock.mode=="BUY"?"profit":"loss";
                        const dayClass=stock.isLoss? "loss":"profit";
                        return (
                          <tr key={index} >
                            <td>{stock.name}</td>
                            <td>{stock.qty}</td>
                            <td>{stock.price.toFixed(2)}</td>
                            <td className={profitClass}>{stock.mode}</td>
                        </tr>
                        );
                      })}

        </table>
      <div className="no-orders">
        <p>placed New orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
