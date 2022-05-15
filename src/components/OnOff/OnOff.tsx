import React, {useState} from "react";
import cs from './OnOff.module.css';

type PropsType = {
    // on: boolean
}

export const OnOff = (props: PropsType) => {
    console.log('OnOff rendering');

    let [on, setOn] = useState(false)

    const onStyle = {
        backgroundColor: on ? 'silver' : 'lime'
    };
    const offStyle = {
        backgroundColor: on ? 'silver' : 'red'
    };
    const indicatorStyle = {
        backgroundColor: on ? 'lime' : 'red'
    };

    return (
        <div>
            <div className={cs.onStyle} style={onStyle} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div className={cs.offStyle} style={offStyle} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div className={cs.indicator} style={indicatorStyle}></div>
        </div>
    )
}