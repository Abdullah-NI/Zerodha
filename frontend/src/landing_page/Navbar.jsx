import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
            <div className="container-fluid container-md">
                <Link className="navbar-brand" to="/"><img src="/media/images/logo.svg" alt="nav image" style={{width:"9rem"}}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <form className="d-flex  ms-auto me-5 " role="search">
                        <ul className="navbar-nav  mb-2 mb-lg-0 flex justify-content-center align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/signup">SignUp</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="product">Products</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="pricing">Pricing</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="support">Support</Link>
                         </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="userpage">My Account</Link>
                         </li>
                         {/* <li className="nav-item">
                            <Link className="nav-link" to="http://localhost:5174/">Go to deshboard</Link>
                         </li> */}
                          <li className="nav-item">
                            
                            <Link className="nav-link" to="#"><i className="fa-solid fa-bars"></i></Link>
                         </li>
                        
                        
                    </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;