import RoundButton from '../components/roundButton.jsx'

const GamesCarousel = () => {
    return (
        <div style={{backgroundColor: "rgb(232, 236, 241)", marginTop: "0", padding: "50px 0"}}>
            <div className="heading1">Our Games</div>
            <div className="subheading1">Check out our most popular games here.</div>
            <div className="games-container"
                style={{display: "flex", margin: "25px 10px 0 10px", justifyContent: "space-evenly", alignItems: "center", gap: "10px"}}>
                <GameItem title="Melee Simulator! ⚔️" icon="thumbnailms.png" visits="11.7" year="2019"/>
                <GameItem title="Build to Survive! 🔨" icon="thumbnailb2s.png" visits="45" year="2023"/>
                <GameItem title="Tower Defense: Mythic! 🏰" icon="thumbnailtdm.png" visits="18.2" year="2021"/>  
            </div>
            <div style={{width: "100%", display:"flex", justifyContent: "center", marginTop: "40px"}}>
                <RoundButton text="See More" color="blue" width="220px" height="60px" fontSize="24px"  rightIcon="arrow-right.png"
                boxShadow="0 0 35px 2px rgba(66, 116, 253, 0.5), 0 5px 10px 0 rgba(66, 116, 253, 0.05)" url="https://www.roblox.com/users/36679424/favorites#!/places"/>
            </div>            
        </div>
    );
};

const GameItem = (props) => {
    const styles = {
        item: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "25px",
            boxShadow: "0px 0px 10px 4px rgba(55,70,75,0.15)"
        },
        icon: {
            zIndex: 2,
            width: "100%",
            position: "relative",
            borderRadius: "40px",
            padding: "20px",
            boxSizing: "border-box"
        },
        title: {
            textAlign: "center",
            fontSize: "26px",
            fontWeight: "700",
            color: "#2B2B2B",
            marginTop: "0",
            marginBottom: "5px"
        },
        visits: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            margin: "5px auto 20px auto",
            padding: "5px 10px",
            backgroundColor: "rgb(255,170,0)",
            borderRadius: "99px",
            fontFamily: "outfit, sans-serif",
            fontSize: "18px",
            fontWeight: "700",
            color: "#fff"
        },
        year: {
            display: "inline-block",
            textAlign: "center",
            margin: "0px auto 20px auto",
            padding: "5px 10px",
            backgroundColor: "rgb(255,170,0)",
            borderRadius: "99px",
            fontFamily: "outfit, sans-serif",
            fontSize: "18px",
            fontWeight: "700",
            color: "#fff"
        }
    }

    return (
        <div className="game-item" style={styles.item}>
            <div className="images" style={styles.images}>
                <img src={props.icon} alt="game icon" style={styles.icon}/>
            </div>
            <p style={styles.title}>{props.title}</p>
            <p style={styles.visits}><img src="controller.png" alt="" height="15px" />{props.visits}M+ Sessions</p>
        </div>
    );
}

export default GamesCarousel;