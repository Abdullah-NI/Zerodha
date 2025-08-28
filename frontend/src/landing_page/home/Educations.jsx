function Education() {
    return ( 
        
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 p-5">
                    <img src="/media/images/education.svg" style={{width:"100%"}} alt="" />
                </div>
                <div className="col-md-6 p-5 mt-4">
                    <h3>Free and open market education</h3>
                    <p className="mt-4" style={{lineHeight:"2rem"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration:"none"}}>Versity<i class="fa-solid fa-arrow-right"></i></a>
                    
                    <p className="mt-4" style={{lineHeight:"2rem"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
                    
                </div>
            </div>
        </div>
     );
}

export default Education;