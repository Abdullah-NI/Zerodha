function Pricing() {

    const styles={
        width:"150%",
    }
    return ( 
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <h2 className="mb-3 ">Unbeatable pricing</h2>
                    <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=""style={{textDecoration:"none"}}>See Pricing<i class="fa-solid fa-arrow-right"></i></a>

                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <img src="/media/images/pricingEquity.svg" alt="img" style={styles} />
                                </div>
                                <div className="col mt-4 p-2">
                                    <p style={{fontSize:"10px"}}>Free account opening</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <img src="/media/images/pricingEquity.svg" alt="img" style={styles}/>
                                </div>
                                <div className="col mt-4 p-2">
                                    <p style={{fontSize:"10px"}}>Free equity delivery and direct mutual funds</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <img src="/media/images/intradayTrades.svg" alt="img" style={styles} />
                                </div>
                                <div className="col mt-4 p-2 ms-1">
                                    <p style={{fontSize:"10px"}}>Intraday and F&O</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>      
                </div>
            </div>
        </div>
        

        </>
     );
}

export default Pricing;