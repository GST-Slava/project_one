import React, {useState} from "react";
import cs from './Accordion.module.css'


type UncontrolledAccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(true);


    return (
        <>
            <div onClick={() => {
                setCollapsed(!collapsed)
            }}>
                <AccordionTitle title={props.titleValue}/>
                {!collapsed && <AccordionBody/>}
            </div>
        </>


    )
}

type AccordionTitlePropsType = {
    title: string
}


function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h2>-=-{props.title}-=-</h2>
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


