const RoundButton = (props) => {
    const colors = {
        red: "#FF434A",
        blue: "#4375FE",
        green: "#00D00F",
        orange: "#FE9D43"
    }

    const bgColor = colors[props.color] || colors["black"];

    return (
        <button style={{border: "0", background: "none"}}>
            <a href={props.url} style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "99px",
                border: "0",
                backgroundColor: bgColor,
                color: "#fff",
                width: props.width || "160px",
                height: props.height || "50px",
                fontSize: props.fontSize || "18px",
                fontFamily: "outfit, sans-serif",
                fontWeight: "700",      
                boxShadow: props.boxShadow || "0 3px 6px 0px rgba(55,70,75,0.15)"
            }}>
                {props.leftIcon && <img src={props.leftIcon} alt="" height="20px" />}
                {props.text}
                {props.rightIcon && <img src={props.rightIcon} alt="" height="20px" />}
            </a>            
        </button>
    );
}

export default RoundButton;