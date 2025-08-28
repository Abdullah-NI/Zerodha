import './pricing.css'
function Hero() {
    return ( 
       
        <div className="container">
            <div className="row text-center p-5">
                <h3 className="text-center fs-2">Charges</h3>
                <h5 className="text-muted">List of all charges and taxes</h5>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 text-center p-md-5 priceH">
                    <img src="/media/images/pricingEquity.svg" className="img" alt="" />
                    <h3 className='fs-3 '>Free equity delivery</h3>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-md-4 text-center p-md-5 priceH">
                    <img src="/media/images/intradayTrades.svg" alt="" />
                    <h3 className='fs-3 ' >Intraday and F&O trades</h3>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-md-4 text-center p-md-5 priceH">
                    <img src="/media/images/pricingEquity.svg" alt="" />
                    <h3 className='fs-3 '>Free direct MF</h3>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
                
            </div>
        </div>
     );
}

export default Hero;