import React from 'react';

export type ClockViewPropsType = {
    date: Date
}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {

    return <><span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>

    </>
};