import React, {useEffect, useState} from 'react'

export default {
    title: 'UseEffect demo',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample');

    //в колбэке переданном в useEffect мы передаем какой-то side effect побочное действие
    //запросы к серверу api.getUsers().then(' '), setInterval, indexDB,document.getElementId,
    //document.title = "User"; Т.Е при каждой отрисовки компоненты useEffect будет отрабатывать

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString();
    },)
    //если не передать зависимости, то useEffect будет перерисован каждый раз при вызове функции-компоненты

    useEffect(() => {
        console.log('useEffect onliy first render ')
        document.title = counter.toString();
    }, [])
    //если передать пустой массив useEffect будет перерисован 1 раз при вмонтировании компоненты

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString();
    }, [counter])
    //если передать в массив зависимость [counter] соответственно useEffect отработает первый раз при первом вызове,
    // а потом только тогда когда изменятся зависимости

    return <>
        This {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>Fake</button>
        <button onClick={() => setCounter(counter + 1)}>Counter</button>
    </>
}

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetIntervalExample');

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick: ' + counter)
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        This,counter: {counter} - fake: {fake}
    </>

    /*return <>
        This {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>Fake</button>
        <button onClick={() => setCounter(counter + 1)}>Counter</button>
    </>
    //вариант со счетчиком*/
}

export const ResetEffectExample = () => {

    const [count, setCount] = useState(1)

    console.log("Component rendered with" + count);

    useEffect(() => {
        console.log("Effect occurred: " + count)

        return () => {
            console.log("Reset Effect" + count)
        }
    }, [count])

    const increase = () => setCount(count + 1);

    return <>
        Hi, counter: {count}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log("Component rendered with " + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        };
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('');

    console.log('Component Rendered' + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        text: {text}
    </>
}