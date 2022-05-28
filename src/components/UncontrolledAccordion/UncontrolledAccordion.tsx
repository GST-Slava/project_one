import React, {useState} from "react";
import cs from '../Accordion/Accordion.module.css'


type UncontrolledAccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h2 className={cs.clickAccordion} onClick={() => {
            props.onClick()
        }}>-=-{props.title}-=-</h2>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>Драники</li>
            <li>Борщ</li>
            <li>Креветки Белоруские</li>
            <li>Компот</li>
            <li>Квас</li>
        </ul>
    )
}


