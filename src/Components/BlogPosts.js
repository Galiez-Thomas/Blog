import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Blogposts() {
    const [tabposts, setTabposts] = useState([]);

    async function fetchPosts() {
        const result = await fetch('http://localhost:3000/posts/userid/' + RecupValues('userId'));
        const data = await result.json();
        setTabposts(data);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    function RecupValues(slet) {
        return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(slet).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

    return tabposts.map((item, index) => {
        //if (item.userId == RecupValues('userId')) {
            return (
                <div key={index} className='col-sm-4 list-group-item list-group-item-action list-group-item-dark'>
                    Post N° {item.id}
                    <Link to={"/comments/?postId=" + item.id}
                        title="Cliquer pour afficher les comments de ce post"
                    >
                        <p className="list-group-item">{item.title}</p>
                    </Link>
                </div>
            );
        //}
    }
    )
}

export default Blogposts;