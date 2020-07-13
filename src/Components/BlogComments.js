import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Blogcomments() {
    const [tabcomments, setTabcomments] = useState([]);

    async function fetchComments() {
        const result = await fetch('http://localhost:3000/comments/postid/' + RecupValues('postId'));
        const data = await result.json();
        setTabcomments(data);
    }

    useEffect(() => {
        fetchComments();
    }, []);

    function RecupValues(slet) {
        return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(slet).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

    return tabcomments.map((item, index) => {
        //if (item.postId == RecupValues('postId')) {
            return (   
                <div key={index} className='col-sm-4 list-group-item list-group-item-action list-group-item-dark'>
                    {item.email}
                    <Link to="/" title="Cliquer pour revenir à la page d'accueil">
                        <p className="list-group-item">{item.name}</p>
                    </Link>
                </div>
            );
        //}
    }
    )
}

export default Blogcomments;