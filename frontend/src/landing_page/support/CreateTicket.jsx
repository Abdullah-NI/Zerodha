import './support.css'

function CreateTicket() {
    return ( 
        
        <div className="container">
            <h2 className="mt-5 ">To Create Ticket ,select a relevent topic</h2>
            <div className="row">
                <div className="col-md-4 mt-5 tags">
                    <h4><i class="fa-solid fa-plus border rounded-circle fs-5"></i>Account Opning</h4>
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Resident individual</a><br />
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Minor</a><br />
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Non Resident Indian (NRI)</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>Company, Partnership, HUF and LLP</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>Glossary</a><br />
                </div>
                <div className="col-md-4 mt-5 tags">
                    <h4><i class="fa-solid fa-user"></i> Zerodha Account</h4>
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Your profile</a><br />
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>client</a><br />
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>Nomination</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>Transfer and conversion of securities</a><br />
                </div>
                <div className="col-md-4 mt-5 tags">
                    <h4><i class="fa-solid fa-indian-rupee-sign "></i>Funds</h4>
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Add money</a><br />
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Withdraw money</a><br />
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Add bank accounts</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>eMandates</a><br />
                </div>

                <div className="col-md-4 mt-5 tags">
                    <h4><i class="fa-solid fa-sink"></i>Kite</h4>
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>IPO</a><br />
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Trading FAQs</a><br />
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Margin Trading Facility (MTF) and Margins</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>Charts and orders</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>Alerts and Nudges</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>General</a><br />
                </div>
                <div className="col-md-4 mt-5 tags">
                    <h4><i class="fa-solid fa-terminal"></i>Console</h4>
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Portfolio</a><br />
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Corporate actions</a><br />
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Funds statement</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>Reports</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>Profile</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>Segments</a><br />
                </div>
                <div className="col-md-4 mt-5 tags">
                    <h4><i class="fa-solid fa-coins"></i>Coin</h4>
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Mutual funds</a><br />
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>National Pension Scheme (NPS)</a><br />
                        <a href="" style={{textDecoration:"none", lineHeight:"2rem"}}>Fixed Deposit (FD)</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>Features on Coin</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>Payments and Orders</a><br />
                        <a href="" style={{textDecoration:"none" ,lineHeight:"2rem"}}>General</a><br />
                </div>

                
            </div>
        </div>
     );
}

export default CreateTicket;