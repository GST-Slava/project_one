import React, {useReducer} from "react";
import cs from '../Accordion/Accordion.module.css'
import {reducer, TOGGLE_COLLAPSED} from "./reduser";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    //let [collapsed, setCollapsed] = useState(true);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody/>}
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


