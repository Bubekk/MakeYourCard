import './style/MainPageStyle.scss';
import Hero from './Hero';
import ProductSection from './UI/ProductSection';

function MainPage() {
    return (
        <div className="mainpage">
            <Hero />
            <ProductSection header={"Business Cards"} />
            <ProductSection header={"Occasional Cards"} />
        </div>
    )
}

export default MainPage;