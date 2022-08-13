import React from 'react';
import Card from '../UI/Card'

const User = (props) => {

    let { name, age } = props;

    return (
        <Card>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
        </Card>
    )

};

export default User;