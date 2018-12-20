import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import ComponentDetail from './ComponentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <ComponentDetail  author="sam" timeAgo="Today at 4:45pm" content="It's very nice!" avatar={Faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <ComponentDetail author="will" timeAgo="Today at 5:00pm" content="I like that novel" avatar={Faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <ComponentDetail author="bran" timeAgo="Yesterday at 6:00pm" content="I liked the writing!" avatar={Faker.image.avatar()}/>
        </ApprovalCard>  
        <ApprovalCard>
            <ComponentDetail author="bran" timeAgo="Yesterday at 6:00pm" content="I liked the writing!" avatar={Faker.image.avatar()}/>
        </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));