import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import ComponentDetail from './ComponentDetail'

const App = ()=>{
    return (
        <div className="ui container comments">
           <ComponentDetail  author="sam" timeAgo="Today at 4:45pm"/>
           <ComponentDetail author="will" timeAgo="Today at 5:00pm"/>
           <ComponentDetail author="bran" timeAgo="Yesterday at 6:00pm"/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));