import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import ComponentDetail from './ComponentDetail'

const App = ()=>{
    return (
        <div className="ui container comments">
           <ComponentDetail  author="sam"/>
           <ComponentDetail author="will"/>
           <ComponentDetail author="bran"/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));