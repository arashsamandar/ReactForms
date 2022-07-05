import React,{Component} from "react";
import queryString from 'query-string';
import {useLocation, useParams} from 'react-router-dom';

const Posts = () => {
        const location = useLocation();
        console.log(location.search);
        console.log(queryString.parse(location.search));
        return (
            <div>
                <h2>Hello Posts</h2>
            </div>
        )

}
export default Posts;