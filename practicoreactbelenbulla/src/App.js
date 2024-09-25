import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) 
            .then(data => {
                setUsers(data); 
            })
            .catch(error => {
                console.error('Hubo un error al obtener los datos:', error);
            });
    }, []);

    return (
        <div className="container mt-6">
            <h1 className="title">Lista de Usuarios</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="box">
                        <p><strong>Nombre de usuario:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
