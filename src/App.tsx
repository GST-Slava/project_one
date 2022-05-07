import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

export const App = () => {
    return (
        <div>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            <Rating value={3}/>

        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
