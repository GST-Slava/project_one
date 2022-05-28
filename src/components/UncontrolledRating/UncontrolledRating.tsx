import React, {useState} from "react";
import cs from './UncontrolledRating.module.css'

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UncontrolledRating = (props: RatingPropsType) => {
    console.log('UncontrolledRating rendered')
    let [value, setValue] = useState(0)
    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

const Star = (props: StarPropsType) => {
    console.log("Star Rendering")
    return (
        <span className={cs.rating} onClick={() => {
            props.setValue(props.value)
        }}>
            {props.selected ? <b className={cs.ratingActive}>★</b> : '★'}
        </span>
    )
}

/*const Test = () => {
    return (
        <div className={cs.rating}>
            <div className={cs.ratingBody}></div>
            <div className={cs.ratingActive}></div>
            <div className={cs.ratingItems}>
                <input type="radio" className="ratingItem"/>
                <input type="radio" className="ratingItem"/>
                <input type="radio" className="ratingItem"/>
                <input type="radio" className="ratingItem"/>
                <input type="radio" className="ratingItem"/>
            </div>
        </div>

    )
}*/

//<span><b>★</b> </span>