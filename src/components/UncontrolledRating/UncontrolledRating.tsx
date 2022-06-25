import React, {useState} from "react";
import cs from './UncontrolledRating.module.css'

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const UncontrolledRating = (props: RatingPropsType) => {
    console.log('UncontrolledRating rendered')

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star value={0} selected={value > 0} setValue={() => {
                setValue(1);
                props.onChange(1)
            }}/>
            <Star value={0} selected={value > 1} setValue={() => {
                setValue(2);
                props.onChange(2);
            }}/>
            <Star value={0} selected={value > 2} setValue={() => {
                setValue(3);
                props.onChange(3);
            }}/>
            <Star value={0} selected={value > 3} setValue={() => {
                setValue(4);
                props.onChange(4);
            }}/>
            <Star value={0} selected={value > 4} setValue={() => {
                setValue(5);
                props.onChange(5);
            }}/>

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