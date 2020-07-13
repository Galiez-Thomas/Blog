import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Blogusers() {
    const [tabusers, setTabusers] = useState([]);

    async function fetchUsers() {
        const result = await fetch('http://localhost:3000/users');
        const data = await result.json();
        setTabusers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return tabusers.map((item, index) => {
        return (
            <div key={index} className='col-sm-5 list-group-item list-group-item-action list-group-item-dark'>
                {item.name}
                <Link to={"/posts/?userId=" + item.id}>
                    <p className="list-group-item"
                        title="Cliquer pour afficher les posts de cet utilisateur"
                    >
                        {item.username}<br />
                        {item.email}
                    </p>
                    <img src={"https://picsum.photos/150?random=" + item.id} />
                </Link>
            </div>
        );
    }
    )
}

export default Blogusers;