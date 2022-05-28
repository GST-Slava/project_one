import React, {useState} from "react";
import cs from './UncontrolledOnOff.module.css';

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}
export const UncontrolledOnOff = (props: PropsType) => {
    console.log('UncontrolledOnOff rendering');

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        backgroundColor: on ? 'lime' : 'silver'
    };
    const offStyle = {
        backgroundColor: on ? 'silver' : 'red'
    };
    const indicatorStyle = {
        backgroundColor: on ? 'lime' : 'red'
    };

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div className={cs.onStyle} style={onStyle} onClick={onClicked}>On</div>
            <div className={cs.offStyle} style={offStyle} onClick={offClicked}>Off</div>
            <div className={cs.indicator} style={indicatorStyle}></div>
        </div>
    )
}