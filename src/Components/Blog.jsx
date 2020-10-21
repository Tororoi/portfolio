import React from 'react';
import {NavLink} from 'react-router-dom'

import {connect} from 'react-redux'

//Parents: ProjectContainer

const Blog = (props) => {

    const handleClick = (e) => {
        // console.log(props.project)
        props.blogDispatch(props.blog)
    }

    return (
        <>
        <div className="blog-card">
            <div className="blog">
                <h3>{props.blog.title}</h3>
                {/* <img
                    src={props.project.image}
                    alt={props.project.title}
                    onClick={handleClick}
                /> */}
            </div>
        </div>
        </>
    )
};

const chooseBlog = (blog) => {
    return {
        type: "CHOOSE_BLOG",
        payload: blog
    }
}

const mapDispatchToProps = {
    blogDispatch: chooseBlog
}

export default connect(null, mapDispatchToProps)(Blog);