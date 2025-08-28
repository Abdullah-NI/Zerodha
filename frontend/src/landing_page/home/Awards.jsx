function Awards() {
    return ( 
        
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 p-5">
                    <img src="/media/images/largestBroker.svg"  style={{width:"100%"}} alt="" />
                </div>
                <div className="col-md-6 p-5 mt-4">
                    <h1>Largest Stock broker in India</h1>
                    <p className="mt-3">2+ million Zerodha clients contribute to over 15% off all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row mt-5 mb-5">
                        <div className="col-6">
                            <ul style={{lineHeight:"2rem"}}>
                                <li>Future and Options</li>
                                <li>Commidity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul style={{lineHeight:"2rem"}}>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="img" className="col-11 mt-2"/>
                </div>
            </div>
        </div>
     );
}

export default Awards;