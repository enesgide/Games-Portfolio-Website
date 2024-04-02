import Header from '../components/header.jsx'
import GamesCarousel from '../components/gamesCarousel.jsx'

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <GamesCarousel />
            </main>
        </div>        
    );
};

export default Home;