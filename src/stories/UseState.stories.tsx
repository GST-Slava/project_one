import React, {useMemo, useState} from 'react'

export default {
    title: 'UseState demo',
}

function generateData() {
    //difficult counting
    console.log('generateData')
    return 32849827332;
}

export const Example0 = () => {
    console.log('Example0');
    const initValue = generateData();//useMemo запомнил данные 1 раз и больше запускать не будет generateDatas
    //вариант когда тяжелые вычисления будут вызваны каждый раз когда мы используем useState
    const [counter, setCounter] = useState(initValue); // [32849827332, function(newValue){}]
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

export const Example1 = () => {
    console.log('Example1');
    const initValue = useMemo(generateData, []);//useMemo запомнил данные 1 раз и больше запускать не будет generateDatas
    //вариант с использованием useMemo
    const [counter, setCounter] = useState(initValue); // [32849827332, function(newValue){}]
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

export const Example2 = () => {
    console.log('Example2');
    //вариант с использованием самого хука UseState, если передаем саму Function generateData()
    //useState сам запомнит первое значение и повторно не будет вызывать ее
    //используется для тяжелых подсчетов синхронных которые занимают много времени
    //useState делает так автоматически запоминая стартовое значение
    const [counter, setCounter] = useState(generateData); // [32849827332, function(newValue){}]
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

//дополнительно useState может принимать в setCounter значение функцию преобразователь state
export const Example3 = () => {
    console.log('Example3');
    const [counter, setCounter] = useState(generateData);
    //один вариант записи с отдельной функцией
    /*const changer = (state: number) => {
        return state + 1
    }*/
    return <>
        {/*//один вариант записи с отдельной функцией*/}
        {/* <button onClick={() => setCounter(changer)}>+</button>
        {counter}*/}

        {/*//упрощенный вариант записи*/}
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}

