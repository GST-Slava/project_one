import React, {useState} from 'react'

export default {
    title: 'React.memo demo',
}

type UsersSecretType = {
    users: Array<string>
}
type NewMessageCounterType = {
    count: number
}

const UsersSecret = (props: UsersSecretType) => {
    console.log('USERS')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const NewMessageCounter = (props: NewMessageCounterType) => {
    return <div>{props.count}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example1');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Slava', 'Sasha', 'Pasha'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers);
    }

    users.push('Sveta ' + new Date().getTime());

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}