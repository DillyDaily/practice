import React from 'react';
import Card from '../UI/Card';

const Users = (props) => {
console.log("USERLIST ", props)
    return (
        <ul>
            {props.users.map(i => 
                <div key={i.id}>
                    <h2>Name: {i.name}</h2>
                    <p>Age: {i.age}</p>

                </div>
            // <Card 
            //     key={i.id}
            //     name={i.name}
            //     age={i.age}
            // />
            )}
        </ul>
    );
};

export default Users;