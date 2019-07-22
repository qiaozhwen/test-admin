import React, {Component} from 'react';
import './App.css';
import NewsContent from './views/NewsContent'
import NewsBody from './views/NewsBody'
import Header from "./components/Header";
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Header/>
                    <Route path="/" exact component={NewsContent}>
                    </Route>
                    <Route path="/news/:id" exact component={NewsBody}>
                    </Route>
            </BrowserRouter>
        );
    }

}

export default App;
