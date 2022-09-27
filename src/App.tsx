import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {onClickCallback} from "./components/Accordion/Accordion.stories";
import {Select} from "./components/Select/Select";
import {any} from "prop-types";
import {Clock} from "./components/Clock/Clock";


export const App = () => {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);

    let [switchOn, setSwitchOn] = useState<boolean>(true)

    return (
        <div className={'App'}>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating defaultValue={0} onChange={value => 0}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion items={[]} onClick={onClickCallback} titleValue={"Menu"} collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <Select onChange={value => any} items={[]}/>

            <Clock/>

            {/*<PageTitle title={"This is APP component"}/>
            <Rating value={3}/>*/}
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


