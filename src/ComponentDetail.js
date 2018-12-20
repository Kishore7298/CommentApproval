import React from 'react';
import Faker from 'faker';

const ComponentDetail = (props)=>{
    return (
        <div className="comment">
        <a className="avatar">
            <img alt="avatar" src={Faker.image.avatar()}/>
        </a>
        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadata">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{props.content}</div>
        </div>
    </div>
    )
}
export default ComponentDetail;