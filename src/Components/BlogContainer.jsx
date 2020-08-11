import React from 'react';
import Blog from './Blog'

import {connect} from 'react-redux'

//Parents: App

const BlogContainer = (props) => {
//     const blogArray = props.blogs.map((blog) => {
//         return <Blog
//             key={blog.id}
//             blog={blog}
//             />
//     })

    return (
        <>
            <div className="blog-container">
                {/* {blogArray} */}
            </div>
        </>
    )
};

let mapStateToProps = (reduxState) => {
    return {
      blogs: reduxState.blogs
    }
  }
  
export default connect(mapStateToProps)(BlogContainer)