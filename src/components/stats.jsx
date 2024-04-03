const Stats = () => {
    const styles = {
        banner: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1024px",
            margin: "0 auto"
        },
        heading: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px"
        },
        statValue: {
            fontSize: "50px",
            fontWeight: 800
        },
        statTitle: {
            fontSize: "20px",
            fontWeight: 800,
            margin: 0
        }
    }

    return (
        <div id="stats" style={{backgroundColor: "rgb(243, 245, 247)", padding: "50px", paddingBottom: "70px"}}>
            <div className="banner" style={styles.banner}>
                <div className="heading1" style={styles.heading}>Our Stats</div>
                <div className="subheading1">Here are some of our impressive stats.</div>

                <div className="stats" style={{marginTop: "40px"}}>
                    <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "50px"}}>
                        <div className="card blue stat" style={{width: "50%"}}>
                            <span style={styles.statValue}>100M+</span>
                            <span style={styles.statTitle}>UNIQUE PLAY SESSIONS</span>
                        </div>

                        <div className="card red stat" style={{width: "50%"}}>
                            <span style={styles.statValue}>6M+</span>
                            <span style={styles.statTitle}>MONTHLY ACTIVE USERS</span>
                        </div>
                    </div>   

                    <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "50px"}}>
                        <div className="card green stat" style={{width: "50%"}}>
                            <span style={styles.statValue}>15K+</span>
                            <span style={styles.statTitle}>PEAK CONCURRENT USERS</span>
                        </div>

                        <div className="card yellow stat" style={{width: "50%"}}>
                            <span style={styles.statValue}>1.5M+</span>
                            <span style={styles.statTitle}>TOTAL FAVOURITES</span>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    );
};

export default Stats;