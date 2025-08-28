import NoteFound from "../NoteFound";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import Table from "./Table";
import {Route,Routes} from "react-router-dom"

function PricingPage() {
    return ( 
        <>
        <Hero/>
        <Brokerage/>
        
        <Routes>   
        <Route path='/' element={
          <Table 
            head1="Equity delivery" 
            head2="Equity intraday" 
            brokerage={["Zero Brokerage","0.03% or Rs. 20/executed order whichever is lower"]}
            stt={["0.1% on buy & sell","0.025% on the sell side"]}
            transaction={["NSE: 0.00297% BSE: 0.00375%","NSE: 0.00297% BSE: 0.00375%"]}
            gst={["18% on (brokerage + SEBI charges + transaction charges)","18% on (brokerage + SEBI charges + transaction charges)"]}
            sebi={["₹10 / crore","₹10 / crore"]}
            stamp={["0.015% or ₹1500 / crore on buy side","0.015% or ₹1500 / crore on buy side"]}
          />} />
           
           <Route path='/currency' element={
          <Table 
            head1="Currency futures" 
            head2="Currency options" 
            brokerage={["0.03% or ₹ 20/executed order whichever is lower","₹ 20/executed order"]}
            stt={["No STT","No STT"]}
            transaction={["NSE: 0.00035%BSE: 0.00045%","NSE: 0.00035%BSE: 0.00045%"]}
            gst={["18% on (brokerage + SEBI charges + transaction charges)","18% on (brokerage + SEBI charges + transaction charges)"]}
            sebi={["₹10 / crore","₹10 / crore"]}
            stamp={["0.0001% or ₹10 / crore on buy side","0.0001% or ₹10 / crore on buy side"]}
          />} />

          <Route path='/commodity' element={
          <Table 
            head1="Commodity futures" 
            head2="Commodity options" 
            brokerage={["0.03% or Rs. 20/executed order whichever is lower","₹ 20/executed order"]}
            stt={["0.01% on sell side (Non-Agri)","0.05% on sell side"]}
            transaction={["MCX: 0.0021% NSE: 0.0001%","MCX: 0.0021% NSE: 0.0001%"]}
            gst={["18% on (brokerage + SEBI charges + transaction charges)","18% on (brokerage + SEBI charges + transaction charges)"]}
            sebi={["Agri: ₹1 / croreNon-agri:₹10 / crore","₹10 / crore"]}
            stamp={["0.002% or ₹200 / crore on buy side","0.003% or ₹300 / crore on buy side"]}
          />} />
           <Route path="*" element={<NoteFound/>}/>
           {/* yaha hero aur brokerage bhi dikhege and then notefound */}
          </Routes>
        </>
     );
}

export default PricingPage;