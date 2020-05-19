import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import HomePage from "../containers/HomePage";

class LandingPage extends React.Component{

    render() {
        return(
            <Router>
                <Route
                    path="/"
                    exact={true}
                    render={() =>
                        <HomePage/>
                    }
                />
            </Router>
        );
    }

}

export default LandingPage
