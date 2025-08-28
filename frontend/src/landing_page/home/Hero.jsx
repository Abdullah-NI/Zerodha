import herologo from '/media/images/homeHero.png'
// import herologo2 from '../../assets/homeHero.png'
function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="/media/images/homeHero.png"  alt="Hero Image" className='mb-5 '/>
                {/* <img src={herologo} alt="hero logo" />  ye varibale banaker kara hai */} 
                {/* <img src={herologo2} alt="hero logo" />  ye assets se kara */}
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 col-5 col-md-3 col-lg-2' style={{margin:"0 auto" ,backgroundColor:"#387ed1" }}>SignUp Now</button>
            </div>
        </div>
     );
}

export default Hero;