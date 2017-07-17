import React, { Component } from 'react';
import PubSub from 'pubsub-js';


class RegPubSub extends Component {

    constructor(props){
        super(props);
        this.state = {
            subscribedStatus : true,
            subscribedStatusText : "Un-Subscribe"
        }
    }
    componentWillMount(){
        /** Creating an event with the name 'My_Event' is subscribed here. This has a subscriber call back.
            When a module/component publishes a request for this event, the subscriber call back is fired **/
        this.pubSubReg = PubSub.subscribe('My_Event', this.mySubscriberClbk.bind(this));
    }

    componentDidMount(){
        var logHeader = "<div style='color: lightseagreen;font-weight: bold;'>**********************************************************************</div>"+
        "<div style='color: lightseagreen;font-weight: bold;'>**********************************************************************</div>"+
        "<div> Mounting the Subscriber Component </div>" ;
        document.querySelector('.activityLogger').insertAdjacentHTML('beforeend',logHeader);
        var str = "<div> Created an event and added a subscriber callback. Event name : <strong>'My_Event'</strong></div>"
        document.querySelector('.activityLogger').insertAdjacentHTML('beforeend',str);
    }

    /** Custom function to subscribe / unsubscribe the 'My_Event' **/
    subscribeAndUnsubscribe({status}){
        if(!status) //subscribing the event
            this.pubSubReg = PubSub.subscribe('My_Event', this.mySubscriberClbk.bind(this));
        else //un-subscribing the event
            PubSub.unsubscribe(this.pubSubReg);

        var str = "<div class='subsMsg removable'> =============The event 'My_event' is <strong>"+this.state.subscribedStatusText+"d</strong>.=============</div>"
        document.querySelector('.activityLogger').insertAdjacentHTML('beforeend',str);
        this.setState({subscribedStatus: !status});
        var getSubsText = this.state.subscribedStatusText === "Un-Subscribe" ? "Subscribe" : "Un-Subscribe";
        this.setState({subscribedStatusText: getSubsText});
    }

    clearLogs(){
        var allElements = document.querySelectorAll('.removable');
        allElements.forEach(function(currentValue, index, arr){
            currentValue.remove();
        });
    }

    componentWillUnMount(){
        /** Unsubscribing the registered subscription when the component unmounts **/
        PubSub.unsubscribe(this.pubSubReg);
    }

    /** The subscriber call back defined below **/
    mySubscriberClbk(msg,data){
        var str = "<div class='subsCallback removable'> The subsciber call back executed. Data passed from Publisher: <strong>"+data+"</strong>.</div>"
        document.querySelector('.activityLogger').insertAdjacentHTML('beforeend',str);
    }

    render(){
        return(<div className='regPubSubComp'>
                <h4>Publisher & Subscriber Registered</h4>
                <button className='btn btn-sm btn-info' onClick={(event) => {this.subscribeAndUnsubscribe({status:this.state.subscribedStatus});}}>{this.state.subscribedStatusText}</button>
                <button className='btn btn-sm btn-info' onClick={(event) => {this.clearLogs();}}>Clear Logs</button>
            </div>
        );
    }
}

export default RegPubSub;
