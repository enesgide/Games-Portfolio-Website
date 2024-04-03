import Header from '../components/header.jsx'
import Stats from '../components/stats.jsx'
import GamesCarousel from '../components/gamesCarousel.jsx'

const Home = () => {
    return (
        <div>
            <Header />
            <main>                
                <GamesCarousel />
                <Stats />
            </main>
        </div>        
    );
};

export default Home;