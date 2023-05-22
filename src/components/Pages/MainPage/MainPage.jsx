import './style/MainPageStyle.scss';
import Hero from './Hero';
import ProductSection from './UI/ProductSection';
import LinkToGenerator from './LinkToGenerator';

function MainPage() {
    return (
        <div className="mainpage">
            <Hero />
            <ProductSection header={"Business Cards"} />
            <ProductSection header={"Occasional Cards"} />
            <LinkToGenerator />
        </div>
    )
}

export default MainPage;