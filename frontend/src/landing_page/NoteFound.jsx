import { Link } from "react-router-dom";
import "./Notefound.css"
function NoteFound() {
    return ( 
        <div className="container notef  mt-5">
            <h3>404</h3>
            <h2 className="mb-4">Kiaan couldn't find that page</h2>
            <p className="mb-4 fs-6">We couldn’t find the page you were looking for. Visit <Link to="/"> Zerodha’s home page</Link></p>
        </div>
        // <p>hdhdhhdhd</p>
     );
}

export default NoteFound;