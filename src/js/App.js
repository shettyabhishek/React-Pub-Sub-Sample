import React, { Component } from 'react';
import RegPubSub from './components/registerPubSubComp';
import Compone from './components/comp1';
import Comptwo from './components/comp2';

class App extends Component {
    componentDidMount(){
    }

    render() {
        return (
            <div className="container">
                <div className="subHeader">
                    <h2>React - Publisher & Subscriber implementation</h2>
                </div>
                <div className="mainContent">
                    <p>Install the npm package "pubsub-js", to integrate the Publisher and Subscribers into react.
                       Execute the below command, that adds the required package into node_modules.
                    </p>
                    <p>$ npm install --save pubsub-js</p>
                    <div className='row'>
                        <RegPubSub></RegPubSub>
                    </div>
                    <div className='row'>
                        <div className='activityLogger'></div>
                    </div>
                    <br/>
                    <div className='row'><Compone></Compone><Comptwo></Comptwo></div>
                </div>
            </div>
        );
    }
}

export default App;
