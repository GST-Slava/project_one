import React from "react";
import {ClockOptions} from "./ClockOptions";

export default {
    title: 'Clock Digital and Analog',
    component: ClockOptions,
}

export const BaseDigitalExample = () => {
    return <ClockOptions mode={'digital'}/>
};

export const BaseAnalogExample = () => {
    return <ClockOptions mode={'analog'}/>
};