import React from "react";

const Show = (props) =>{
    const {hours,minutes,seconds} = props;
    return(
        <div className="timer">
        {hours < 10 ? "0"+hours: hours}:{minutes < 10 ? "0"+minutes: minutes}:{seconds < 10 ? "0"+seconds: seconds}
        </div>
    )
}

export default Show;