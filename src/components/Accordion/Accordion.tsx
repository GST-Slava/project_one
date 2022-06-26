import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * This comment writing in to storybook
     */
    items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value
     */
    onClick: (value: any) => void
    /**
     * optional color on header text
     */
    color?: string
}

export const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} color={props.color} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2
            style={{color: props.color ? props.color : 'black'}}
            onClick={(e) => props.onChange()}>-=-{props.title}-=-</h2>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}


