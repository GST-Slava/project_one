import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired');

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} onChange={callback} collapsed={true}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} onChange={callback} collapsed={false}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Menu'} collapsed={value} onChange={() => setValue(!value)}/>
}