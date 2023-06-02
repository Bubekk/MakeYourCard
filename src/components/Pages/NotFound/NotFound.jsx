import "./style/NotFoundStyle.scss";
import Meme from "../../../../public/images/404/404.jpg";
import ButtonUI from "../../UI/ButtonUI";
import { Link } from "react-router-dom";


function NotFound() {

    const pathname = window.location.pathname;
    console.log(pathname);

    return (
        <div className="notfound">
            <h1>Is this "{pathname}" in room with us right now?</h1>
            <img src={ Meme } alt="Is this site in room with us right now? meme" />
            <h2>404 problem is with us certainly.. :(</h2>
            <Link to="/"><ButtonUI className="return" tag="Back to Main Page"/></Link>
        </div>
    )
}

export default NotFound;