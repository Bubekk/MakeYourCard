import './style/MainPageStyle.scss';
import Hero from './Hero';
import ProductSection from './UI/ProductSection';
import LinkToGenerator from './LinkToGenerator';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div className="mainpage">
            <Hero />
            <ProductSection header={"Occasional Cards"} />
            <Link to="/generator"><LinkToGenerator /></Link>
        </div>
    )
}

export default MainPage;