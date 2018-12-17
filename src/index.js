import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';

const App = ()=>{
    return (
        <div className="ui container comments">
            <div className="comment">
                <a className="avatar">
                    <img alt="avatar" src={Faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00 pm</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));