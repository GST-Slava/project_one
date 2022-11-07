import React from "react";
import {Clock} from "./Clock";
import {ClockExample} from "../../stories/UseEffect.stories";

export default {
    title: 'Clock',
    component: Clock,
}

export const BaseDigitalExample = () => {
    return <ClockExample />
};