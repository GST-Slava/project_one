import React, {useState} from 'react';

export default {
    title: 'input',
};

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(e) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }
    }/> - {value} </>;
}


export const TrackValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    return <><input id={'inputId'}/>
        <button onClick={(e) => {
            const el = document.getElementById('inputId') as HTMLInputElement;
            setValue(el.value)
        }}>safe
        </button>
        - actual value: {value}
    </>;
}


export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>