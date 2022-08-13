import React, { useState } from 'react';

const AddUser = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();

        const userData = {
            id: Math.random().toString(),
            name: enteredName,
            age: +enteredAge
        };
    
        props.onAddUser(userData);
        setEnteredName('');
        setEnteredAge('');  
    };

    return ( 
    <form onSubmit={submitFormHandler}>
        <div>
            <label htmlFor="username">Name</label>
            <input id="username" type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
        </div>
        <button type="submit">ADD USER</button>
    </form>
    )
};

export default AddUser;