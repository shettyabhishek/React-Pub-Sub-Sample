import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class comp1 extends Component {

    callerOne(){
        var str = "<div class='logs removable'> First Publisher clicked, this publishes the event 'My_Event'. Which inturn triggers the subscriber callback.</div>"
        document.querySelector('.activityLogger').insertAdjacentHTML('beforeend',str);
        PubSub.publish('My_Event', 'Get me this function');
    }

    render(){
        return(
            <button className='btn btn-sm btn-warning' onClick={(event) => {this.callerOne()}}>First Publisher</button>
        );
    }
}

export default comp1;
