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
                setCollapsed(false)
            }}>
                <AccordionTitle title={props.titleValue}/>
                {!collapsed && <AccordionBody/>}
            </div>
            <button onClick={()=> {setCollapsed(true)}} className={cs.buttonCollapse}><span>COLLAPSED</span></button>
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
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}


