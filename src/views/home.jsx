import Header from '../components/header.jsx'
import Banner from '../components/banner.jsx'
import GamesCarousel from '../components/gamesCarousel.jsx'

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner />
                <GamesCarousel />
            </main>
        </div>        
    );
};

export default Home;