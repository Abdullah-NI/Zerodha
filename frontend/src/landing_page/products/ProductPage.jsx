import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection
            imageUrl="/media/images/kite.png"
            productName="Kite"
            productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
            tryDemo="Try demo"
           learnMore="learn More"
        />
        <RightSection
            imageUrl="/media/images/console.png"
            productName="Console"
            productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
            tryDemo="LearnMore"
        />
        <LeftSection
            imageUrl="/media/images/coin.png"
            productName="Coin"
            productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
            tryDemo="Coin"
        />
        <RightSection
            imageUrl="/media/images/kite.png"
            productName="Kite Connect API"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            tryDemo="Kite Connect"
        />
         <LeftSection
            imageUrl="/media/images/varsity.png"
            productName="Varsity mobile"
            productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
            tryDemo=""
        />
        <div className="productH">
            <p className="text-center fs-4 mx-2 mt-0">Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</p>
        </div>
        <Universe/>
        </>
     );
}

export default ProductPage;