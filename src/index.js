import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import ComponentDetail from './ComponentDetail'

const App = ()=>{
    return (
        <div className="ui container comments">
           <ComponentDetail  author="sam" timeAgo="Today at 4:45pm" content="It's very nice!"/>
           <ComponentDetail author="will" timeAgo="Today at 5:00pm" content="I like that novel"/>
           <ComponentDetail author="bran" timeAgo="Yesterday at 6:00pm" content="I liked the writing!"/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));