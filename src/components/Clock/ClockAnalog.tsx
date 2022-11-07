import React, {useEffect, useState} from "react";
import s from "./Clock.module.css"

type PropsType = {}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num;


export const ClockAnalog: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())
    const refreshClock = () => {
        setDate(new Date())
    }
    console.log('ClockExample');

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId)
        };
    }, [])


    return <div className={s.main}>

    </div>
}