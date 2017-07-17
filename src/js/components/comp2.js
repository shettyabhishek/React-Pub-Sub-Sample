import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class comp2 extends Component {

    callerTwo(){
        var str = "<div class='logs removable'> Second Publisher clicked, this publishes the event 'My_Event'. Which inturn triggers the subscriber callback.</div>"
        document.querySelector('.activityLogger').insertAdjacentHTML('beforeend',str);
        var jsonParam = {name: 'Abhishek Shetty', profession: 'Developer', location: 'India'};
        PubSub.publish('My_Event', JSON.stringify(jsonParam));
    }

    render(){
        return(
            <button className='btn btn-sm btn-danger' onClick={(event) => {this.callerTwo()}}>Second Publisher</button>
        );
    }
}

export default comp2;
