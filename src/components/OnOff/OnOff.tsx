import React, {useState} from "react";
import cs from './OnOff.module.css';

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}
export const OnOff = (props: PropsType) => {
    console.log('On: ' + props.on);


    const onStyle = {
        backgroundColor: props.on ? 'lime' : 'silver'
    };
    const offStyle = {
        backgroundColor: props.on ? 'silver' : 'red'
    };
    const indicatorStyle = {
        backgroundColor: props.on ? 'lime' : 'red'
    };
    return (
        <div>
            <div className={cs.onStyle} style={onStyle} onClick={() => {
                props.onChange(true)
            }}>On
            </div>
            <div className={cs.offStyle} style={offStyle} onClick={() => {
                props.onChange(false)
            }}>Off
            </div>
            <div className={cs.indicator} style={indicatorStyle}></div>
        </div>
    )
}