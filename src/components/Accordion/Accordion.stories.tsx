import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from '@storybook/react';

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired');
export const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback,
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: [],
}

export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [
        {title: 'Dimich', value: 1},
        {title: 'Andrey', value: 3},
        {title: 'Viktor', value: 5},
        {title: 'Anna', value: 9}],
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion items={[]} onClick={onClickCallback} titleValue={'Menu'} collapsed={value}
                      onChange={() => setValue(!value)}/>
}