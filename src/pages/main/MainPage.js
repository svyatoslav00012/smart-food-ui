import React, {Component} from 'react';
import Landing from "./components/Landing";
import Shop from "./components/Shop";
import Feedback from "./components/Feedback";

class MainPage extends Component {
    render() {
        return (
            <div>
                <Landing/>
                <Shop/>
                <Feedback/>
            </div>
        );
    }
}

export default MainPage;