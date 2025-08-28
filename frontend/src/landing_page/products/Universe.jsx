function Universe() {
    return (

        <div className="container">
            <h2 className="text-center text-muted fs-3 mb-3">The Zerodha Universe</h2>
            <p className="text-center text-muted">Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row text-center d-flex flex-wrap justify-content-center">
                <div className="col-6 col-md-4 p-md-5">
                    <img src="/media/images/zerodhaFundhouse.png" style={{width:"60%"}} alt="" />
                    <p className="text-small text-muted">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                
                <div className="col-6 col-md-4 p-md-5">
                    <img src="/media/images/sensibullLogo.svg" style={{width:"60%"}} alt="" />
                    <p className="text-small text-muted">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                

                <div className="col-6 col-md-4 p-md-5">
                    <img src="/media/images/streakLogo.png" style={{width:"60%"}} alt="" />
                    <p className="text-small text-muted">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-6 col-md-4 p-md-5">
                    <img src="/media/images/smallcaseLogo.png" style={{width:"60%"}} alt="" />
                    <p className="text-small text-muted">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-6 col-md-4 p-md-5">
                    <img src="/media/images/dittoLogo.png" style={{width:"60%"}} alt="" />
                    <p className="text-small text-muted">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>

                {/* <div className="col-6 col-md-4 p-md-5">
                    <img src="/media/images/zerodhaFundhouse.png" style={{width:"60%"}} alt="" />
                    <p className="text-small text-muted">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div> */}
            </div>
            <div className="text-center">
                <button className="btn btn-primary px-5 py-2 mb-md-5 mt-4" style={{backgroundColor:"#387ed1"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;