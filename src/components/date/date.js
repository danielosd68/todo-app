import React from "react";

const DateComponent = (props) => {
    const todayDate = new Date();
    const day = todayDate.getDate();
    const month = todayDate.getMonth();
    const year = todayDate.getFullYear();
    const hours = todayDate.getHours();
    const minutes = todayDate.getMinutes();
    const seconds = todayDate.getSeconds();

    return (
        <span>{day < 10 ? "0"+day: day}.{month < 10 ? "0"+month: month}.{year < 10 ? "0"+year : year}  {hours < 10 ? "0"+hours: hours}:{minutes < 10 ? "0"+minutes: minutes}:{seconds < 10 ? "0"+seconds: seconds}</span>
    )
}

export default DateComponent;