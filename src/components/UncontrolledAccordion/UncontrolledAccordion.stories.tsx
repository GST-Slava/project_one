import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callback = action('uncontrolled accordion change');

export const AccordionModeChange = () => <UncontrolledAccordion titleValue={'Menu'}/>


