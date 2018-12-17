import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import ComponentDetail from './ComponentDetail'

const App = ()=>{
    return (
        <div className="ui container comments">
           <ComponentDetail />
           <ComponentDetail />
           <ComponentDetail />
           <ComponentDetail />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));