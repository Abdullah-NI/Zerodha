import './pricing.css'
import { Link } from 'react-router-dom';
function Brokerage() {
    return (
        <div className="container pricingP ">
            <div className='ms-md-5'>
            <Link to="/pricing" className='fs-2'>Equity</Link>&nbsp; &nbsp; &nbsp;
            <Link to="/pricing/currency" className='fs-2'>Currency</Link>&nbsp; &nbsp; &nbsp;
            <Link to="/pricing/commodity" className='fs-2'>Commodity</Link>
            <hr />
            </div>
        </div>
    );
}

export default Brokerage;