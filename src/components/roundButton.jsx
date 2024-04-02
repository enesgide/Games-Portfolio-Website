const RoundButton = (props) => {
    const colors = {
        red: "#FF434A",
        blue: "#4375FE",
        green: "#00D00F",
        orange: "#FE9D43"
    }

    const bgColor = colors[props.color] || colors["black"];

    return (
        <button
            style={{
                borderRadius: "99px",
                border: "0",
                backgroundColor: bgColor,
                color: "#fff",
                width: props.width || "160px",
                height: props.height || "50px",
                fontSize: "18px",
                fontFamily: "outfit, sans-serif",
                fontWeight: "700",      
                boxShadow: "0 3px 6px 0px rgba(55,70,75,0.15)"
            }}
        >
            {props.text}
        </button>
    );
}

export default RoundButton;