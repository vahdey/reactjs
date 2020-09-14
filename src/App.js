import React, { Component } from 'react';
import Header from "./components/sections/Header";
import { Route , Switch } from "react-router-dom";

import './styles/css/bootstrap.min.css';
import './styles/css/bootstrap-rtl.min.css';

// Components
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Product from "./components/pages/Product";
import NoMatch from "./components/pages/NoMatch";
import Login from "./components/pages/Login";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div style={{ paddingTop : 70 }}>
                        <Switch>
                            <Route path="/" exact={true} component={Home}/>
                            <Route path="/product/:id" component={Product}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/user-panel" component={Contact}/>
                            <Route path="/login" component={Login}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
