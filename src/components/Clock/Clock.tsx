import React, {useEffect, useState} from "react";
import s from "./Clock.module.css"

type PropsType = {}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num;


export const Clock: React.FC<PropsType> = (props) => {

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
        <div className={s.container}>
            <div className={s.clock}>

                <div className={s.circle} id={'sc'}><i>{get2digitsString(date.getSeconds())}</i></div>
                <div className={s.circle2} id={'mn'}><i>{get2digitsString(date.getMinutes())}</i></div>
                <div className={s.circle3} id={'hr'}><i>{get2digitsString(date.getHours())}</i></div>

                <span className={s.number1}><b>1</b></span>
                <span className={s.number2}><b>2</b></span>
                <span className={s.number3}><b>3</b></span>
                <span className={s.number4}><b>4</b></span>
                <span className={s.number5}><b>5</b></span>
                <span className={s.number6}><b>6</b></span>
                <span className={s.number7}><b>7</b></span>
                <span className={s.number8}><b>8</b></span>
                <span className={s.number9}><b>9</b></span>
                <span className={s.number10}><b>10</b></span>
                <span className={s.number11}><b>11</b></span>
                <span className={s.number12}><b>12</b></span>
            </div>

            <div className={s.digitalClock}>
                Time: {date.toLocaleTimeString()}
            </div>
        </div>

        {/*Time: {date.toLocaleTimeString()} // отображает стандартные системные часы */}
    </div>
}